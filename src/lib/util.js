import chalk from 'chalk';
import inquirer from 'inquirer';

const { log: sysLog } = console;

export const log = {
  info(msg) {
    sysLog(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgWhite('INFO')} ${msg}`);
  },
  warn(msg) {
    sysLog(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgYellow('WARN')} ${msg}`);
  },
  error(msg) {
    sysLog(`${chalk.cyan('[hexo-leancloud-counter]')} ${chalk.black.bgRed('ERR!')} ${msg}`);
  },
};

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
