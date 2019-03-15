const inquirer = require('inquirer');

async function getMasterKey() {
  if (process.env.HEXO_LEANCLOUD_COUNTER_MASTER_KEY) {
    return process.env.HEXO_LEANCLOUD_COUNTER_MASTER_KEY;
  }
  const questions = [
    {
      type: 'input',
      name: 'masterKey',
      message: 'master key?',
    },
  ];
  const answers = await inquirer.prompt(questions);
  return answers.masterKey;
}

module.exports = {
  getMasterKey,
};
