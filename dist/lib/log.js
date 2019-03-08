"use strict";

var chalk = require('chalk');

var _console = console,
    log = _console.log;

function info(msg) {
  log("".concat(chalk.cyan('[hexo-leancloud-counter]'), " ").concat(chalk.black.bgWhite('INFO'), " ").concat(msg));
}

function warn(msg) {
  log("".concat(chalk.cyan('[hexo-leancloud-counter]'), " ").concat(chalk.black.bgYellow('WARN'), " ").concat(msg));
}

function error(msg) {
  log("".concat(chalk.cyan('[hexo-leancloud-counter]'), " ").concat(chalk.black.bgRed('ERR!'), " ").concat(msg));
}

module.exports = {
  info: info,
  warn: warn,
  error: error
};