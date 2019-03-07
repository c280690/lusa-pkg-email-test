'use strict';

const { assert } = require('chai');

const returnToUppercase = require('./returnToUpperCase');

describe('handlebars/baseEmail/helpers returnToUppercase() method', () => {
  it('is a function', () => {
    assert.isFunction(returnToUppercase);
  });

  it('returns string to all uppercase', () => {
    assert.deepEqual(returnToUppercase('mixedUpperCase'), 'MIXEDUPPERCASE');
  });

  it('returns empty string on undefined', () => {
    assert.deepEqual(returnToUppercase(), '');
  });

  it('returns empty string on empty string', () => {
    assert.deepEqual(returnToUppercase(''), '');
  });
});
