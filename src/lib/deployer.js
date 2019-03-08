const AV = require('leancloud-storage');
const _ = require('lodash');
const inquirer = require('inquirer');
const pathFn = require('path');
const fs = require('fs');
const log = require('./log');

function cmp(x, y) {
  if (x.url < y.url) return -1;
  if (x.url === y.url) return 0;
  return 1;
}

function postOperation(env, cnt, limit, newData, memoData) {
  if (cnt === limit) {
    newData.sort(cmp);
    const sourceDir = env.source_dir;
    const publicDir = env.public_dir;
    const memoFile = pathFn.join(sourceDir, 'leancloud.memo');
    fs.writeFileSync(memoFile, '[\n');

    let memoIdx = 1;
    for (let i = 0; newData[i]; i += 1) {
      while (true) {
        if (memoData[memoIdx] === ']') break;
        const y = JSON.parse(memoData[memoIdx].substring(0, memoData[memoIdx].length - 1));
        if (y.url > newData[i].url) break;

        fs.writeFileSync(memoFile, `${memoData[memoIdx]}\n`, { flag: 'a' });
        memoIdx += 1;
      }
      fs.writeFileSync(memoFile, `{"title":"${newData[i].title}","url":"${newData[i].url}"},\n`, { flag: 'a' });
    }
    while (memoData[memoIdx] !== ']') {
      fs.writeFileSync(memoFile, `${memoData[memoIdx]}\n`, { flag: 'a' });
      memoIdx += 1;
    }
    fs.writeFileSync(memoFile, memoData[memoIdx], { flag: 'a' });

    const srcFile = pathFn.join(sourceDir, 'leancloud.memo');
    const destFile = pathFn.join(publicDir, 'leancloud.memo');
    const readStream = fs.createReadStream(srcFile);
    const writeStream = fs.createWriteStream(destFile);
    readStream.pipe(writeStream);
    log.info('leancloud.memo successfully updated.');
  }
}

const usernameQuestion = {
  type: 'input',
  name: 'username',
  message: 'Enter your username: ',
};

const passwordQuestion = {
  type: 'password',
  name: 'password',
  message: 'Enter your password: ',
  mask: '*',
};

async function sync() {
  const { config } = this;

  if (config.leancloud_counter.enable_sync) {
    const APP_ID = config.leancloud_counter.app_id;
    const APP_KEY = config.leancloud_counter.app_key;
    const publicDir = this.public_dir;
    const urlsFile = pathFn.join(publicDir, 'leancloud_counter_post_list.json');
    const urls = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
    });

    const currentUser = AV.User.current();
    if (!currentUser) {
      let userName = config.leancloud_counter.username;
      let passWord = config.leancloud_counter.password;
      if (!userName) {
        await inquirer.prompt([usernameQuestion, passwordQuestion])
          .then((answers) => {
            userName = answers.username;
            passWord = answers.password;
          });
      } else if (!passWord) {
        await inquirer.prompt([passwordQuestion])
          .then((answers) => {
            passWord = answers.password;
          });
      }
      await (AV.User.logIn(userName, passWord).then(
        (loginedUser) => { log.info(`Logined as: ${loginedUser.getUsername()}`); },
        (error) => { log.error(error); },
      ));
    }

    log.info('Now syncing your posts list to leancloud counter...');
    const Counter = AV.Object.extend('Counter');
    urls.sort(cmp);
    const memoFile = pathFn.join(publicDir, 'leancloud.memo');
    if (!fs.existsSync(memoFile)) {
      fs.writeFileSync(memoFile, '[\n]');
    }
    const memoData = fs.readFileSync(memoFile, 'utf-8').split('\n');
    let memoIdx = 1;
    const newData = [];
    let cnt = 0;
    let limit = 0;
    const env = this;
    _.forEach(urls, (x) => {
      let y = {};
      y.title = '';
      y.url = '';
      let flag = false;
      while (true) {
        if (memoData[memoIdx] === ']') break;
        y = JSON.parse(memoData[memoIdx].substring(0, memoData[memoIdx].length - 1));
        if (y.url > x.url) break;
        if (y.url === x.url && y.title === x.title) {
          flag = true;
          break;
        }
        memoIdx += 1;
      }
      if (!flag) {
        log.info(`Dealing with record of ${x.title}`);
        limit += 1;
        const query = new AV.Query('Counter');
        query.equalTo('url', x.url);
        query.count().then(
          (count) => {
            if (count === 0) {
              const counter = new Counter();
              counter.set('url', x.url);
              counter.set('title', x.title);
              counter.set('time', 0);
              counter.save().then(
                (obj) => {
                  log.info(`${x.title} is saved as: ${obj.id}`);
                  newData.push(x);
                  cnt += 1;
                  postOperation(env, cnt, limit, newData, memoData);
                },
                (error) => {
                  log.error(error);
                  cnt += 1;
                  postOperation(env, cnt, limit, newData, memoData);
                },
              );
            } else {
              newData.push(x);
              cnt += 1;
              postOperation(env, cnt, limit, newData, memoData);
            }
          },
          (error) => {
            log.error(error);
            cnt += 1;
            postOperation(env, cnt, limit, newData, memoData);
          },
        );
      }
    });
  }
}

module.exports = {
  sync,
};