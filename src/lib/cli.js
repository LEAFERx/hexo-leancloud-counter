const AV = require('leancloud-storage');
const inquirer = require('inquirer');
const spawn = require('cross-spawn');
const packageInfo = require('../../package.json');
const log = require('./log');
const { getMasterKey } = require('./util');

const commandOptions = {
  desc: packageInfo.description,
  usage: '<argument>',
  arguments: [
    {
      name: 'init | i',
      desc: 'Automatic setup Counter class for you',
    },
  ],
};

async function createCounterClass() {
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
}

async function installPuppeteer(installFlag) {
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
    return require('puppeteer');
  } catch (err) {
    log.error(err);
    log.error('Still can not import puppeteer. Exiting now...');
    return false;
  }
}

async function importPuppeteer() {
  try {
    // eslint-disable-next-line global-require, import/no-unresolved
    return require('puppeteer');
  } catch (err) {
    log.error('Oops! Seems like puppeteer is not installed.');
    const questions = [{
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
    const answers = await inquirer.prompt(questions);

    if (answers.install === 'nope') return false;
    const installFlag = answers.install === 'install for me' ? 1 : 2;
    return installPuppeteer(installFlag);
  }
}

async function init() {
  const { config } = this;
  const APP_ID = config.leancloud_counter.app_id;
  const APP_KEY = config.leancloud_counter.app_key;
  const MASTER_KEY = config.leancloud_counter.master_key
    ? config.leancloud_counter.master_key
    : await getMasterKey();
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    masterKey: MASTER_KEY,
  });
  AV.Cloud.useMasterKey();

  let questions;
  let answers;

  await createCounterClass();

  questions = [
    {
      type: 'confirm',
      name: 'toContinue',
      message: 'Continue?', // tbd
      default: true,
    },
  ];
  answers = await inquirer.prompt(questions);
  if (!answers.toContinue) return;

  const puppeteer = await importPuppeteer();
  if (!puppeteer) return;

  questions = [
    {
      type: 'input',
      name: 'email',
      message: 'email?',
    }, {
      type: 'password',
      name: 'password',
      message: 'password?',
      mask: '*',
    },
  ];
  answers = await inquirer.prompt(questions);

  const browser = await puppeteer.launch({
    timeout: 15000,
    ignoreHTTPSErrors: true,
  });
  try {
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
        body: '{"permissions":{"add_fields":{"users":"","roles":""}}}',
      });
    })()`);
    await page.evaluate(`(async () => {
      return await fetch('https://leancloud.cn/1/data/${APP_ID}/classes/Counter/permissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'X-XSRF-TOKEN': '${token}',
        },
        body: '{"permissions":{"create":{"users":"","roles":""}}}',
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
  } catch (err) {
    browser.close();
    log.error(err);
  }
}

function commandFunc(args) {
  if (args._[0] === 'init' || args._[0] === 'i') {
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
