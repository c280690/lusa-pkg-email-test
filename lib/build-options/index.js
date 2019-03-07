'use strict';

const fs = require('fs');

const getOptionsFromCommand = require('./get-options-from-command');
const getOptionsFromTemplate = require('./get-options-from-template');
const askUser = require('./ask-user');
const log = require('../log');
const validateOptions = require('./validate-options');

module.exports = async (projectFolder, isNewTemplate) => {
  log.inform('Building Template Options');

  if (isNewTemplate &&
fs.existsSync(`${projectFolder}/src/content.json`) &&
await askUser.forOverwritePermission()) {
    throw new Error('Build aborted by user.');
  }

  let options = getOptionsFromCommand();

  if (!options) {
    if (!isNewTemplate) options = await getOptionsFromTemplate(projectFolder);
    else options = await askUser.forOptions();
  }

  if (isNewTemplate) await validateOptions(options);

  log.succeeded('Build Template Options');

  return options;
};
