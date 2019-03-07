'use strict';

const { assert } = require('chai');

const returnStringHasLength = require('./returnStringHasLength');

describe('handlebars/baseEmail/helpers returnStringHasLength() method', () => {
  it('is a function', () => {
    assert.isFunction(returnStringHasLength);
  });

  it('returns true on string with length', () => {
    assert.isTrue(returnStringHasLength('someString with length'));
  });

  it('returns false on string without length', () => {
    assert.isFalse(returnStringHasLength(''));
  });

  it('returns false on undefined', () => {
    assert.isFalse(returnStringHasLength());
  });
});
