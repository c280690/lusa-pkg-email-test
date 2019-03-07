'use strict';

const fs = require('fs-extra');

const configureHandlebars = require('../configure-handlebars');
const log = require('../log');

module.exports = async (options, projectFolder, isNew) => {
  if (isNew) {
    log.inform('Building New Content');

    const { template } = options;

    log.debug('configuring content handlebars');
    const contentHandlebars = await configureHandlebars.forTemplateContent(template);

    log.debug('compiling content handlebars');
    const content = JSON.parse(contentHandlebars(options));

    log.debug('writing content to src/content.json');
    fs.mkdirSync(`${projectFolder}/src`);
    fs.writeFileSync(`${projectFolder}/src/content.json`, JSON.stringify(content, null, 4));

    log.succeeded('Built New Content');

    return content;
  }

  log.inform('Reading Existing Content');

  const contentString = fs.readFileSync(`${projectFolder}/src/content.json`);

  log.succeeded('Read Existing Content');

  return JSON.parse(contentString);
};
