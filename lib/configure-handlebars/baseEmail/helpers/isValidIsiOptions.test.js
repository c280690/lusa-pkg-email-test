'use strict';

const { assert } = require('chai');

const readdir = require('recursive-readdir');
const path = require('path');

const isValidIsiOption = require('./isValidIsiOption');

describe('handlebars/baseEmail/helpers isValidIsiOption() method', async () => {
  it('is a function', () => {
    assert.isFunction(isValidIsiOption);
  });

  it('returns true for all existing isi variations', async () => {
    const allIsiOptions = await readdir(path.join(__dirname, '../partials/isi'));

    allIsiOptions.forEach((isiFilePath) => {
      const option = isiFilePath.split('/').pop().replace('.hbs', '');

      if (!isValidIsiOption(option)) throw new Error(`${option} is not listed as a valid ISI`);
      else (console.log('\x1b[2m', `      ${option}`, '\x1b[0m'));
    });
  });

  it('returns true for all brands', async () => {
    const allIsiOptions = ['forteo', 'humalog', 'taltz', 'cyramza'];

    allIsiOptions.forEach((isiFilePath) => {
      const option = isiFilePath.split('/').pop().replace('.hbs', '');

      if (!isValidIsiOption(option)) throw new Error(`${option} is not listed as a valid ISI`);
      else (console.log('\x1b[2m', `      ${option}`, '\x1b[0m'));
    });
  });

  it('returns false for invalid ISI', () => {
    assert.isFalse(isValidIsiOption('invalid'));
  });
});
