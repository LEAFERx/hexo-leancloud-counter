const chalk = require('chalk');

const { log } = console;

function info(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgWhite('INFO')} ${msg}`);
}

function warn(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgYellow('INFO')} ${msg}`);
}

function error(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgRed('INFO')} ${msg}`);
}

module.exports = {
  info,
  warn,
  error,
};
