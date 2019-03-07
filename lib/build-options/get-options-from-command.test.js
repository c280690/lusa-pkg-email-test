'use strict';

const { assert } = require('chai');

const getOptionsFromCommand = require('./get-options-from-command');

describe('build-options/get-options-from-command() method', () => {
  it('is a function', () => {
    assert.isFunction(getOptionsFromCommand);
  });

  it('returns non-false with enough arguments', () => {
    process.argv = [, , , 'fake mmn', 'fake template', 'fake footers'];
    assert.isFalse(!getOptionsFromCommand());
  });

  it('returns correct options with enough arguments', () => {
    process.argv = [, , , 'fake mmn', 'fake template', 'fake footers'];
    const expectedOptions = {
      mmn: 'fake mmn',
      template: 'fake template',
      emailType: "Default",
      footers: {
        variations: {  
          'fake footers': 'true'
        }
      }
    }
    assert.deepEqual(getOptionsFromCommand(), expectedOptions);
  });

  it('returns false with no process arguments', () => {
    process.argv = [];
    assert.isFalse(getOptionsFromCommand());
  });

  it('returns false with not enough arguments', () => {
    process.argv = [, , , 'fake mmn'];
    assert.isFalse(getOptionsFromCommand());
  });

  it('returns footers as object', () => {
    process.argv = [, , , 'fake mmn', 'fake template', 'fake footers'];
    const { footers: { variations } } = getOptionsFromCommand();
    assert.isObject(variations)
  })
});
