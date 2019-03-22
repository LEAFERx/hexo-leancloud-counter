import inquirer from 'inquirer';

async function getMasterKey() {
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

export {
  getMasterKey,
};
