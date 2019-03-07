'use strict';

const inquirer = require('inquirer');

const overwriteQuestions = [
  {
    type: 'list',
    name: 'yesOrNo',
    message: 'This file already exists - would you like to overwrite it?',
    choices: [
      'yes',
      'no',
    ],
  },
];

const optionsQuestions = [
  {
    type: 'input',
    name: 'mmn',
    message: 'Email MMN.',
    validate(answer) {
      const isValidMMN = /^[a-zA-Z]{2}(-|\s)[a-zA-Z]{2}(-|\s)[a-zA-Z]{2}(-|\s)\d{4}/;
      if (!isValidMMN.test(answer)) return 'invalid MMN (xx-xx-xx-####).';
      return true;
    },
  },
  {
    type: 'list',
    name: 'template',
    message: 'Which layout should be used to build the template?',
    choices: [
      'branded-1',
      'branded-2',
      'unbranded-1',
      'unbranded-2',
      'unbranded-3',
      'kitchen-sink',
    ],
  },
  {
    type: 'checkbox',
    name: 'selectedFooters',
    message: 'FOOTERS?',
    choices: [
      new inquirer.Separator(' = Footers = '),
      {
        name: 'lilly',
        checked: 'true',
      },
      {
        name: 'healthlink',
        checked: 'true',
      },
      {
        name: 'ska',
        checked: 'true',
      },
      {
        name: 'alert',
      },
      {
        name: 'vae',
      },
      {
        name: 'none',
      },
    ],
    validate(answer) {
      if (answer.length === 0) {
        return 'Please select at least one footer.';
      }
      return true;
    },
  },
  {
    type: 'list',
    name: 'emailType',
    message: 'What type of email is this?',
    choices: [
      'Default',
      'Veeva Approved Email (VAE)',
      'Consumer Email',
    ],
  },
];

const forOverwritePermission = async () => {
  const prompt = inquirer.createPromptModule();
  const { yesOrNo } = await prompt(overwriteQuestions);
  if (yesOrNo === 'yes') return false;
  return true;
};

const forOptions = async () => {
  const prompt = inquirer.createPromptModule();
  const answers = await prompt(optionsQuestions);
  const { selectedFooters } = answers;

  const variations = {};

  selectedFooters.forEach((footer) => {
    variations[footer] = 'true';
  });

  answers.footers = { variations };

  return answers;
};

module.exports = {
  forOverwritePermission,
  forOptions,
};

