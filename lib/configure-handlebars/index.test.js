'use strict';

const { assert } = require('chai');
const validateHtml = require('html-tag-validator');

const configureHandlebars = require('./');

const fs = require('fs');

const kitchenSinkOptions = require('../../test/kitchen-sink-options');

const kitchenSinkContent = require('../../test/content.json');

describe('handlebars/index.js forTemplateContent()  method', () => {
  it('is a function', () => {
    assert.isFunction(configureHandlebars.forTemplateContent);
  });

  it('returns handlebars method', async () => {
    const handlebars = await configureHandlebars.forTemplateContent('kitchen-sink');
    assert.isFunction(handlebars);
  });

  it('compiles without throwing any errors', async () => {
    const handlebars = await configureHandlebars.forTemplateContent('kitchen-sink');
    const templateContent = JSON.parse(handlebars(kitchenSinkOptions));
  });

  it('produces content json with all required attributes', async () => {
    const handlebars = await configureHandlebars.forTemplateContent('kitchen-sink');
    const templateContent = JSON.parse(handlebars(kitchenSinkOptions));
    assert.property(templateContent, 'mmn');
    assert.property(templateContent, 'approvalMonth');
    assert.property(templateContent, 'approvalYear');
    assert.property(templateContent, 'build-tool-version');
    assert.property(templateContent, 'previewText');
    assert.property(templateContent, 'subjectLines');
    assert.property(templateContent, 'content');
    assert.property(templateContent, 'footers');
  });

  it('throws error on invalid template', async () => {
    try {
      await configureHandlebars.forTemplateContent('invalid-template-name');
      throw new Error('error should have been thrown');
    } catch (error) {
      assert.include(error.message, 'no such file or directory', 'error does not contain "no such file"');
    }
  });
});

describe('handlebars/index.js forBaseEmail()  method', () => {
  it('is a function', () => {
    assert.isFunction(configureHandlebars.forBaseEmail);
  });

  it('returns handlebars method', async () => {
    const handlebars = await configureHandlebars.forBaseEmail();
    assert.isFunction(handlebars);
  });

  it('compiles without throwing any errors', async () => {
    const handlebars = await configureHandlebars.forBaseEmail();
    const baseEmail = handlebars(kitchenSinkContent);
    assert.include(baseEmail, 'Lorem ipsum dolor');
  });
});

describe('handlebars/index.js forVariation()  method', () => {
  it('is a function', () => {
    assert.isFunction(configureHandlebars.forVariation);
  });

  it('returns handlebars method', async () => {
    const kitchenSinkBaseEmail = fs.readFileSync('./test/kitchen-sink.html');
    const handlebars = await configureHandlebars.forVariation(kitchenSinkBaseEmail.toString(), 'lilly');
    assert.isFunction(handlebars);
  });

  it('compiles without throwing any errors', async () => {
    const kitchenSinkBaseEmail = fs.readFileSync('./test/kitchen-sink.html');
    const handlebars = await configureHandlebars.forVariation(kitchenSinkBaseEmail.toString(), 'lilly');
    const variationEmailContent = handlebars(kitchenSinkOptions);
    fs.writeFileSync('test/output.html', variationEmailContent);
  });
});
