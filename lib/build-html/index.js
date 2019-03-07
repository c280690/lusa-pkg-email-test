'use strict';

const buildBaseEmail = require('./build-base-email');
const buildFooterVariation = require('./build-footer-variation');
const log = require('../log');

const fs = require('fs');

module.exports = async (templateContent, projectFolder) => {
  const baseEmail = await buildBaseEmail(templateContent);

  const { mmn, footers: { variations } } = templateContent;

  log.inform('Building Variation Emails');

  fs.mkdirSync(`${projectFolder}/temp`);

  const variationBuildTasks = Object.keys(variations).map(async (variation) => {
    if (variations[variation] !== 'false') {
      const variationEmail = await buildFooterVariation(templateContent, baseEmail, variation);
      const variationFilePath = `${projectFolder}/temp/${mmn}-${variation}.html`;
      fs.writeFileSync(variationFilePath, variationEmail);
    }
  });

  await Promise.all(variationBuildTasks);

  log.succeeded('Built Variation Emails');
};
