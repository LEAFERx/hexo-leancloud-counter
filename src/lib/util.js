import chalk from 'chalk';
import inquirer from 'inquirer';

const { log } = console;

function info(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgWhite('INFO')} ${msg}`);
}

function warn(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgYellow('WARN')} ${msg}`);
}

function error(msg) {
  log(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgRed('ERR!')} ${msg}`);
}

const customLog = {
  info,
  warn,
  error,
};

export { customLog as log };

export async function getMasterKey() {
  if (process.env.HEXO_LEANCLOUD_COUNTER_MASTER_KEY) {
    return process.env.HEXO_LEANCLOUD_COUNTER_MASTER_KEY;
  }
  const questions = [
    {
      type: 'input',
      name: 'masterKey',
      message: 'Please input the master key of your application',
    },
  ];
  const answers = await inquirer.prompt(questions);
  return answers.masterKey;
}
