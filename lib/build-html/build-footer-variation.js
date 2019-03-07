'use strict';

const configureHandlebars = require('../configure-handlebars');
const { debug } = require('../log');

module.exports = async (templateContent, baseEmail, footer) => {
  debug(`configuring ${footer} variation handlebars`);
  const variationHandlebars = await configureHandlebars.forVariation(baseEmail, footer);

  debug(`======== ${footer} variation`);
  return variationHandlebars(templateContent);
};
