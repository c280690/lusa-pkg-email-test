'use strict';

const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const readdir = require('./read-directory');

const registerPartials = async (srcFolder, handlebarsInstance) => {
  const partialPaths = readdir(`${srcFolder}/partials`);
  const partialRegistrationTasks = partialPaths.map(async (partialPath) => {
    const content = await fs.readFileSync(partialPath).toString();
    const name = partialPath.split('/').pop().replace('.hbs', '');
    handlebarsInstance.registerPartial(name, content);
  });
  return partialRegistrationTasks;
};

const registerHelpers = async (srcFolder, handlebarsInstance) => {
  const helperRegistrationTasks = (readdir(`${srcFolder}/helpers`)).map(async (helperPath) => {
    if (helperPath.indexOf('test') <= -1 && helperPath.indexOf('DS') <= -1) {
      const name = helperPath.split('/').pop().replace('.js', '');
      // eslint-disable-next-line import/no-dynamic-require
      const helperContent = require(helperPath); // eslint-disable-line global-require
      handlebarsInstance.registerHelper(name, helperContent);
    }
  });
  return helperRegistrationTasks;
};


const forTemplateContent = async (templateType) => {
  const templateContentHandlebars = handlebars.create();
  const src = path.join(__dirname, 'templateContent');
  const layout = fs.readFileSync(`${src}/${templateType}.hbs`).toString();
  await Promise.all([
    await registerPartials(src, templateContentHandlebars),
    await registerHelpers(src, templateContentHandlebars),
  ]);
  return templateContentHandlebars.compile(layout);
};

const forBaseEmail = async () => {
  const baseEmailHandlebars = handlebars.create();
  const srcFolder = path.join(__dirname, 'baseEmail');
  const layout = fs.readFileSync(`${srcFolder}/layout.hbs`).toString();
  await Promise.all([
    await registerPartials(srcFolder, baseEmailHandlebars),
    await registerHelpers(srcFolder, baseEmailHandlebars),
  ]);
  return baseEmailHandlebars.compile(layout);
};

const forVariation = async (baseEmailContent, variation) => {
  const variationHandlebars = handlebars.create();
  const srcFolder = path.join(__dirname, 'variationEmails');
  const footerContent = fs.readFileSync(`${srcFolder}/${variation}.hbs`).toString();
  variationHandlebars.registerPartial('footer', footerContent);
  await Promise.all([
    await registerPartials(srcFolder, variationHandlebars),
    await registerHelpers(srcFolder, variationHandlebars),
  ]);
  return variationHandlebars.compile(baseEmailContent);
};

module.exports = {
  forTemplateContent,
  forBaseEmail,
  forVariation,
};
