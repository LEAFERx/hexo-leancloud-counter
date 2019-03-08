"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var AV = require('leancloud-storage');

var inquirer = require('inquirer');

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
    var config, APP_ID, APP_KEY, Counter, testObj, res, user, randomPassword, adminId, questions, answers, puppeteer, browser, page, cookies, token;
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
            }); // Try create the Counter class by creating a test object

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
            user.setUsername('admin');
            user.setPassword(randomPassword);
            _context.prev = 26;
            log.info(randomPassword);
            _context.next = 30;
            return user.signUp();

          case 30:
            adminId = _context.sent.id;
            _context.next = 36;
            break;

          case 33:
            _context.prev = 33;
            _context.t1 = _context["catch"](26);
            log.error(_context.t1);

          case 36:
            questions = [{
              type: 'confirm',
              name: 'toContinue',
              message: 'Continue?',
              // tbd
              default: true
            }, {
              type: 'input',
              name: 'username',
              message: 'username?',
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
            _context.next = 39;
            return inquirer.prompt(questions);

          case 39:
            answers = _context.sent;

            if (answers.toContinue) {
              _context.next = 42;
              break;
            }

            return _context.abrupt("return");

          case 42:
            _context.prev = 42;
            // eslint-disable-next-line global-require, import/no-unresolved
            puppeteer = require('puppeteer');
            _context.next = 50;
            break;

          case 46:
            _context.prev = 46;
            _context.t2 = _context["catch"](42);
            log.error('Oops! Seems like puppeteer is not installed.');
            return _context.abrupt("return");

          case 50:
            _context.prev = 50;
            _context.next = 53;
            return puppeteer.launch({
              timeout: 15000,
              ignoreHTTPSErrors: true
            });

          case 53:
            browser = _context.sent;
            _context.next = 56;
            return browser.newPage();

          case 56:
            page = _context.sent;
            _context.next = 59;
            return page.goto('https://leancloud.cn/dashboard/login.html#/signin');

          case 59:
            _context.next = 61;
            return page.type('#inputEmail', answers.username);

          case 61:
            _context.next = 63;
            return page.type('#inputPassword', answers.password);

          case 63:
            _context.next = 65;
            return page.click('#loginBtn');

          case 65:
            _context.next = 67;
            return page.waitForNavigation({
              waitUntil: 'load'
            });

          case 67:
            _context.next = 69;
            return page.goto("https://leancloud.cn/dashboard/data.html?appid=".concat(APP_ID, "#/Counter"));

          case 69:
            _context.next = 71;
            return page.cookies();

          case 71:
            cookies = _context.sent;
            token = cookies.filter(function (x) {
              return x.name === 'XSRF-TOKEN';
            })[0].value;
            _context.next = 75;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"add_fields\":{\"users\":[\"").concat(adminId, "\"],\"roles\":\"\"}}}',\n      });\n    })()"));

          case 75:
            _context.next = 77;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"create\":{\"users\":[\"").concat(adminId, "\"],\"roles\":\"\"}}}',\n      });\n    })()"));

          case 77:
            _context.next = 79;
            return page.evaluate("(async () => {\n      return await fetch('https://leancloud.cn/1/data/".concat(APP_ID, "/classes/Counter/permissions', {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json;charset=UTF-8',\n          'X-XSRF-TOKEN': '").concat(token, "',\n        },\n        body: '{\"permissions\":{\"delete\":{\"users\":\"\",\"roles\":\"\"}}}',\n      });\n    })()"));

          case 79:
            browser.close();
            _context.next = 85;
            break;

          case 82:
            _context.prev = 82;
            _context.t3 = _context["catch"](50);
            log.error(_context.t3);

          case 85:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 17], [26, 33], [42, 46], [50, 82]]);
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