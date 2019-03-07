'use strict';

const fs = require('fs');
const path = require('path');

const log = require('../log');

const validateTemplateName = (template) => {
  const handlebarsTemplate = path.join(__dirname, `../configure-handlebars/templateContent/${template}.hbs`);
  if (!fs.existsSync(handlebarsTemplate)) { throw new Error(`[validateOptions.js] invalid template name "${template}".`); }
};

const validateMmn = (mmn) => {
  const isValidMMN = /^[a-z]{2}(-|\s)[a-z]{2}(-|\s)[a-z]{2}(-|\s)\d{4}/;
  if (!isValidMMN.test(mmn)) throw new Error('[validateOptions.js] invalid mmn. (xx-xx-xx-####)');
};

const validateFooters = (footers) => {
  if (!footers) throw new Error('Invalid Footers Object');
};

module.exports = async (options) => {
  const { template, mmn, footers } = options;

  await validateTemplateName(template);
  log.debug('validating template');

  await validateMmn(mmn);
  log.debug('validating mmn');

  await validateFooters(footers);
  log.debug('validating footers');

  return options;
};

