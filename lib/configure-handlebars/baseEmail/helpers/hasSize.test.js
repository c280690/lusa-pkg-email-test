'use strict';

const { assert } = require('chai');

const hasSize = require('./hasSize');

describe('handlebars/baseEmail/helpers hasSize() method', () => {
  it('is a function', () => {
    assert.isFunction(hasSize);
  });

  it('returns true with size > 0', () => {
    assert.isTrue(hasSize('1'));
  });

  it('returns false with size = 0', () => {
    assert.isFalse(hasSize('0'));
  });

  it('returns false with size = null', () => {
    assert.isFalse(hasSize());
  });
});
