"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var AV = require('leancloud-storage');

var _ = require('lodash');

var inquirer = require('inquirer');

var pathFn = require('path');

var fs = require('fs');

var log = require('./log');

function cmp(x, y) {
  if (x.url < y.url) return -1;
  if (x.url === y.url) return 0;
  return 1;
}

function postOperation(env, cnt, limit, newData, memoData) {
  if (cnt === limit) {
    newData.sort(cmp);
    var sourceDir = env.source_dir;
    var publicDir = env.public_dir;
    var memoFile = pathFn.join(sourceDir, 'leancloud.memo');
    fs.writeFileSync(memoFile, '[\n');
    var memoIdx = 1;

    for (var i = 0; newData[i]; i += 1) {
      while (true) {
        if (memoData[memoIdx] === ']') break;
        var y = JSON.parse(memoData[memoIdx].substring(0, memoData[memoIdx].length - 1));
        if (y.url > newData[i].url) break;
        fs.writeFileSync(memoFile, "".concat(memoData[memoIdx], "\n"), {
          flag: 'a'
        });
        memoIdx += 1;
      }

      fs.writeFileSync(memoFile, "{\"title\":\"".concat(newData[i].title, "\",\"url\":\"").concat(newData[i].url, "\"},\n"), {
        flag: 'a'
      });
    }

    while (memoData[memoIdx] !== ']') {
      fs.writeFileSync(memoFile, "".concat(memoData[memoIdx], "\n"), {
        flag: 'a'
      });
      memoIdx += 1;
    }

    fs.writeFileSync(memoFile, memoData[memoIdx], {
      flag: 'a'
    });
    var srcFile = pathFn.join(sourceDir, 'leancloud.memo');
    var destFile = pathFn.join(publicDir, 'leancloud.memo');
    var readStream = fs.createReadStream(srcFile);
    var writeStream = fs.createWriteStream(destFile);
    readStream.pipe(writeStream);
    log.info('leancloud.memo successfully updated.');
  }
}

var usernameQuestion = {
  type: 'input',
  name: 'username',
  message: 'Enter your username: '
};
var passwordQuestion = {
  type: 'password',
  name: 'password',
  message: 'Enter your password: ',
  mask: '*'
};

function sync() {
  return _sync.apply(this, arguments);
}

function _sync() {
  _sync = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var config, APP_ID, APP_KEY, publicDir, urlsFile, urls, currentUser, userName, passWord, Counter, memoFile, memoData, memoIdx, newData, cnt, limit, env;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = this.config;

            if (!config.leancloud_counter.enable_sync) {
              _context.next = 34;
              break;
            }

            APP_ID = config.leancloud_counter.app_id;
            APP_KEY = config.leancloud_counter.app_key;
            publicDir = this.public_dir;
            urlsFile = pathFn.join(publicDir, 'leancloud_counter_post_list.json');
            urls = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));
            AV.init({
              appId: APP_ID,
              appKey: APP_KEY
            });
            currentUser = AV.User.current();

            if (currentUser) {
              _context.next = 22;
              break;
            }

            userName = config.leancloud_counter.username;
            passWord = config.leancloud_counter.password;

            if (userName) {
              _context.next = 17;
              break;
            }

            _context.next = 15;
            return inquirer.prompt([usernameQuestion, passwordQuestion]).then(function (answers) {
              userName = answers.username;
              passWord = answers.password;
            });

          case 15:
            _context.next = 20;
            break;

          case 17:
            if (passWord) {
              _context.next = 20;
              break;
            }

            _context.next = 20;
            return inquirer.prompt([passwordQuestion]).then(function (answers) {
              passWord = answers.password;
            });

          case 20:
            _context.next = 22;
            return AV.User.logIn(userName, passWord).then(function (loginedUser) {
              log.info("Logined as: ".concat(loginedUser.getUsername()));
            }, function (error) {
              log.error(error);
            });

          case 22:
            log.info('Now syncing your posts list to leancloud counter...');
            Counter = AV.Object.extend('Counter');
            urls.sort(cmp);
            memoFile = pathFn.join(publicDir, 'leancloud.memo');

            if (!fs.existsSync(memoFile)) {
              fs.writeFileSync(memoFile, '[\n]');
            }

            memoData = fs.readFileSync(memoFile, 'utf-8').split('\n');
            memoIdx = 1;
            newData = [];
            cnt = 0;
            limit = 0;
            env = this;

            _.forEach(urls, function (x) {
              var y = {};
              y.title = '';
              y.url = '';
              var flag = false;

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
                log.info("Dealing with record of ".concat(x.title));
                limit += 1;
                var query = new AV.Query('Counter');
                query.equalTo('url', x.url);
                query.count().then(function (count) {
                  if (count === 0) {
                    var counter = new Counter();
                    counter.set('url', x.url);
                    counter.set('title', x.title);
                    counter.set('time', 0);
                    counter.save().then(function (obj) {
                      log.info("".concat(x.title, " is saved as: ").concat(obj.id));
                      newData.push(x);
                      cnt += 1;
                      postOperation(env, cnt, limit, newData, memoData);
                    }, function (error) {
                      log.error(error);
                      cnt += 1;
                      postOperation(env, cnt, limit, newData, memoData);
                    });
                  } else {
                    newData.push(x);
                    cnt += 1;
                    postOperation(env, cnt, limit, newData, memoData);
                  }
                }, function (error) {
                  log.error(error);
                  cnt += 1;
                  postOperation(env, cnt, limit, newData, memoData);
                });
              }
            });

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _sync.apply(this, arguments);
}

module.exports = {
  sync: sync
};