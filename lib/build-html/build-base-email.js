'use strict';

const configureHandlebars = require('../configure-handlebars');
const { inform, debug, succeeded } = require('../log');

module.exports = async (templateContent) => {
  inform('Building Base Email');

  debug('configuring base email handlebars');
  const baseEmailHandlebars = await configureHandlebars.forBaseEmail();

  debug('building base email');
  const baseEmail = baseEmailHandlebars(templateContent);

  succeeded('Built Base Email');
  return baseEmail;
};
