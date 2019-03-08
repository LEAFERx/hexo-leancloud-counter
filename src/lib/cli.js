const AV = require('leancloud-storage');
const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const packageInfo = require('../../package.json');
const log = require('./log');

const commandOptions = {
  desc: packageInfo.description,
  usage: '<argument>',
  arguments: [
    {
      name: 'register | r <username> <password>',
      desc: '[DEPRECATED] Register a new user.',
    },
    {
      name: 'init | i',
      desc: 'Automatic setup Counter class for you',
    },
  ],
};

function register(username, password) {
  const { config } = this;
  const APP_ID = config.leancloud_counter.app_id;
  const APP_KEY = config.leancloud_counter.app_key;
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
  });

  const user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(
    (loginedUser) => {
      log.info(`${loginedUser.getUsername()} is successfully signed up`);
    },
    (error) => {
      log.error(error);
    },
  );
}

async function init() {
  const { config } = this;
  const APP_ID = config.leancloud_counter.app_id;
  const APP_KEY = config.leancloud_counter.app_key;
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
  });

  let questions;
  let answers;

  // Try create the Counter class by creating a test object
  try {
    const Counter = AV.Object.extend('Counter');
    const testObj = new Counter();
    testObj.set('title', 'test');
    testObj.set('url', 'test');
    testObj.set('time', 0);
    const res = await testObj.save();
    await AV.Query.doCloudQuery(`delete from Counter where objectId="${res.id}"`);
  } catch (err) {
    log.error(err);
    return;
  }
  log.info('Successfully created Counter class.');

  const user = new AV.User();
  const randomPassword = Math.random().toString(36).substr(2)
                       + Math.random().toString(36).substr(2);
  let adminId;
  questions = [
    {
      type: 'input',
      name: 'username',
      message: 'username?',
      default: 'admin',
    },
  ];
  answers = await inquirer.prompt(questions);
  user.setUsername(answers.username);
  user.setPassword(randomPassword);
  try {
    log.info(randomPassword);
    adminId = (await user.signUp()).id;
  } catch (err) {
    log.error(err);
    return;
  }

  questions = [
    {
      type: 'confirm',
      name: 'toContinue',
      message: 'Continue?', // tbd
      default: true,
    }, {
      type: 'input',
      name: 'email',
      message: 'email?',
      when: ans => ans.toContinue,
    }, {
      type: 'password',
      name: 'password',
      message: 'password?',
      mask: '*',
      when: ans => ans.toContinue,
    },
  ];
  answers = await inquirer.prompt(questions);
  if (!answers.toContinue) return;
  let puppeteer;
  let installFlag;
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    puppeteer = require('puppeteer');
  } catch (err) {
    log.error('Oops! Seems like puppeteer is not installed.');
    questions = [{
      type: 'list',
      name: 'install',
      message: 'install puppeteer?',
      choices: [
        'install for me',
        'install for me using taobao cdn',
        'nope',
      ],
      default: 'nope',
    }];
    answers = await inquirer.prompt(questions);
    if (answers.install === 'nope') return;
    installFlag = answers.install === 'install for me' ? 1 : 2;
  }
  if (installFlag) {
    try {
      const cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
      const args = ['install', 'puppeteer', '--production'];
      if (installFlag === 2) {
        args.push('--chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver');
      }
      const promise = new Promise((resolve, reject) => {
        const child = spawn(cmd, args, {
          cwd: process.cwd(),
          stdio: 'inherit',
        });
        child.on('error', reject);
        child.on('exit', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject();
          }
        });
      });
      await promise;
      // eslint-disable-next-line global-require, import/no-unresolved
      puppeteer = require('puppeteer');
    } catch (err) {
      log.error(err);
      log.error('Still can not import puppeteer. Exiting now...');
      return;
    }
  }

  try {
    const browser = await puppeteer.launch({
      timeout: 15000,
      ignoreHTTPSErrors: true,
    });
    const page = await browser.newPage();
    await page.goto('https://leancloud.cn/dashboard/login.html#/signin');
    await page.type('#inputEmail', answers.email);
    await page.type('#inputPassword', answers.password);
    await page.click('#loginBtn');
    await page.waitForNavigation({
      waitUntil: 'load',
    });
    await page.goto(`https://leancloud.cn/dashboard/data.html?appid=${APP_ID}#/Counter`);
    const cookies = await page.cookies();
    const token = cookies.filter(x => x.name === 'XSRF-TOKEN')[0].value;
    await page.evaluate(`(async () => {
      return await fetch('https://leancloud.cn/1/data/${APP_ID}/classes/Counter/permissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-XSRF-TOKEN': '${token}',
        },
        body: '{"permissions":{"add_fields":{"users":["${adminId}"],"roles":""}}}',
      });
    })()`);
    await page.evaluate(`(async () => {
      return await fetch('https://leancloud.cn/1/data/${APP_ID}/classes/Counter/permissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-XSRF-TOKEN': '${token}',
        },
        body: '{"permissions":{"create":{"users":["${adminId}"],"roles":""}}}',
      });
    })()`);
    await page.evaluate(`(async () => {
      return await fetch('https://leancloud.cn/1/data/${APP_ID}/classes/Counter/permissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-XSRF-TOKEN': '${token}',
        },
        body: '{"permissions":{"delete":{"users":"","roles":""}}}',
      });
    })()`);
    browser.close();
  } catch (err) {
    log.error(err);
  }
}

function commandFunc(args) {
  if (args._[0] === 'register' || args._[0] === 'r') {
    if (args._.length !== 3) {
      log.error('Too Few or Many Arguments.');
      return;
    }
    register.call(this, String(args._[1]), String(args._[2]));
  } else if (args._[0] === 'init' || args._[0] === 'i') {
    if (args._.length !== 1) {
      log.error('Too Many Arguments.');
      return;
    }
    init.call(this);
  } else {
    log.error('Unknown Command.');
  }
}

module.exports = {
  commandOptions,
  commandFunc,
};
