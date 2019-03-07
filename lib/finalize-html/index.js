'use strict';

const inlineStyles = require('./inline-styles');
const buildAlertVariations = require('./build-alert-variations');
const parseData = require('./parse-data');
// const optimizeVae = require('./optimize-vae');

module.exports = async (projectFolder, templateContent) => {
  await inlineStyles(projectFolder);

  await buildAlertVariations(projectFolder, templateContent);

  await parseData(projectFolder, templateContent);

  // await optimizeVae(projectFolder, templateContent);
};
