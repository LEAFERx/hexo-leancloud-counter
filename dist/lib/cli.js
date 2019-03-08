"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var AV = require('leancloud-storage');

var inquirer = require('inquirer');

var spawn = require('cross-spawn');

var packageInfo = require('../../package.json');

var log = require('./log');

var commandOptions = {
  desc: packageInfo.description,
  usage: '<argument>',
  arguments: [{
    name: 'register | r <username> <password>',
    desc: '[DEPRECATED] Register a new user.'
  }, {
    name: 'init | i',
    desc: 'Automatic setup Counter class for you'
  }]
};

function register(username, password) {
  var config = this.config;
  var APP_ID = config.leancloud_counter.app_id;
  var APP_KEY = config.leancloud_counter.app_key;
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    log.info("".concat(loginedUser.getUsername(), " is successfully signed up"));
  }, function (error) {
    log.error(error);
  });
}

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var config, APP_ID, APP_KEY, questions, answers, Counter, testObj, res, user, randomPassword, adminId, puppeteer, installFlag, cmd, args, promise, browser, page, cookies, token;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = this.config;
            APP_ID = config.leancloud_counter.app_id;
            APP_KEY = config.leancloud_counter.app_key;
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
            _context.prev = 4;
            Counter = AV.Object.extend('Counter');
            testObj = new Counter();
            testObj.set('title', 'test');
            testObj.set('url', 'test');
            testObj.set('time', 0);
            _context.next = 12;
            return testObj.save();

          case 12:
            res = _context.sent;
            _context.next = 15;
            return AV.Query.doCloudQuery("delete from Counter where objectId=\"".concat(res.id, "\""));

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](4);
            log.error(_context.t0);
            return _context.abrupt("return");

          case 21:
            log.info('Successfully created Counter class.');
            user = new AV.User();
            randomPassword = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
            questions = [{
              type: 'input',
              name: 'username',
              message: 'username?',
              default: 'admin'
            }];
            _context.next = 27;
            return inquirer.prompt(questions);

          case 27:
            answers = _context.sent;
            user.setUsername(answers.username);
            user.setPassword(randomPassword);
            _context.prev = 30;
            log.info(randomPassword);
            _context.next = 34;
            return user.signUp();

          case 34:
            adminId = _context.sent.id;
            _context.next = 41;
            break;

          case 37:
            _context.prev = 37;
            _context.t1 = _context["catch"](30);
            log.error(_context.t1);
            return _context.abrupt("return");

          case 41:
            questions = [{
              type: 'confirm',
              name: 'toContinue',
              message: 'Continue?',
              // tbd
              default: true
            }, {
              type: 'input',
              name: 'email',
              message: 'email?',
              when: function when(ans) {
                return ans.toContinue;
              }
            }, {
              type: 'password',
              name: 'password',
              message: 'password?',
              mask: '*',
              when: function when(ans) {
                return ans.toContinue;
              }
            }];
            _context.next = 44;
            return inquirer.prompt(questions);

          case 44:
            answers = _context.sent;

            if (answers.toContinue) {
              _context.next = 47;
              break;
            }

            return _context.abrupt("return");

          case 47:
            _context.prev = 47;
            // eslint-disable-next-line global-require, import/no-unresolved
            puppeteer = require('puppeteer');
            _context.next = 61;
            break;

          case 51:
            _context.prev = 51;
            _context.t2 = _context["catch"](47);
            log.error('Oops! Seems like puppeteer is not installed.');
            questions = [{
              type: 'list',
              name: 'install',
              message: 'install puppeteer?',
              choices: ['install for me', 'install for me using taobao cdn', 'nope'],
              default: 'nope'
            }];
            _context.next = 57;
            return inquirer.prompt(questions);

          case 57:
            answers = _context.sent;

            if (!(answers.install === 'nope')) {
              _context.next = 60;
              break;
            }

            return _context.abrupt("return");

          case 60:
            installFlag = answers.install === 'install for me' ? 1 : 2;

          case 61:
            if (!installFlag) {
              _context.next = 77;
              break;
            }

            _context.prev = 62;
            cmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
            args = ['install', 'puppeteer', '--production'];

            if (installFlag === 2) {
              args.push('--chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver');
            }

            promise = new Promise(function (resolve, reject) {
              var child = spawn(cmd, args, {
                cwd: process.cwd(),
                stdio: 'inherit'
              });
              child.on('error', reject);
              child.on('exit', function (code) {
                if (code === 0) {
                  resolve();
                } else {
                  reject();
                }
              });
            });
            _context.next = 69;
            return promise;

          case 69:
            // eslint-disable-next-line global-require, import/no-unresolved
            puppeteer = require('puppeteer');
            _context.next = 77;
            break;

          case 72:
            _context.prev = 72;
            _context.t3 = _context["catch"](62);
            log.error(_context.t3);
            log.error('Still can not import puppeteer. Exiting now...');
            return _context.abrupt("return");

          case 77:
            _context.prev = 77;
            _context.next = 80;
            return puppeteer.launch({
              timeout: 15000,
              ignoreHTTPSErrors: true
            });

          case 80:
            browser = _context.sent;
            _context.next = 83;
            return browser.newPage();

          case 83:
            page = _context.sent;
            _context.next = 86;
            return page.goto('https://leancloud.cn/dashboard/login.html#/signin');

          case 86:
            _context.next = 88;
            return page.type('#inputEmail', answers.email);

          case 88:
            _context.next = 90;
            return page.type('#inputPassword', answers.password);

          case 90:
            _context.next = 92;
            return page.click('#loginBtn');

          case 92:
            _context.next = 94;
            return page.waitForNavigation({
              waitUntil: 'load'
            });

          case 94:
            _context.next = 96;
            return page.goto("https://leancloud.cn/dashboard/data.html?appid=".concat(APP_ID, "#/Counter"));

          case 96:
            _context.next = 98;
            return page.cookies();

          case 98:
            cookies = _context.sent;
            token = cookies.filter(function (x) {
              return x.name === 'XSRF-TOKEN';
            })[0].value;
            _context.next = 102;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"add_fields\":{\"users\":[\"").concat(adminId, "\"],\"roles\":\"\"}}}',\n      });\n    })()"));

          case 102:
            _context.next = 104;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"create\":{\"users\":[\"").concat(adminId, "\"],\"roles\":\"\"}}}',\n      });\n    })()"));

          case 104:
            _context.next = 106;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"delete\":{\"users\":\"\",\"roles\":\"\"}}}',\n      });\n    })()"));

          case 106:
            browser.close();
            _context.next = 112;
            break;

          case 109:
            _context.prev = 109;
            _context.t4 = _context["catch"](77);
            log.error(_context.t4);

          case 112:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 17], [30, 37], [47, 51], [62, 72], [77, 109]]);
  }));
  return _init.apply(this, arguments);
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
  commandOptions: commandOptions,
  commandFunc: commandFunc
};