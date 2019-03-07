'use strict';

const { assert } = require('chai');

const returnBoolean = require('./returnBoolean');

describe('handlebars/baseEmail/helpers returnBoolean() method', () => {
  it('is a function', () => {
    assert.isFunction(returnBoolean);
  });

  it('returns true on "true"', () => {
    assert.isTrue(returnBoolean('true'));
  });

  it('returns true on true', () => {
    assert.isTrue(returnBoolean(true));
  });

  it('returns false on "false"', () => {
    assert.isFalse(returnBoolean('false'));
  });

  it('returns false on false', () => {
    assert.isFalse(returnBoolean(false));
  });

  it('returns false on undefined', () => {
    assert.isFalse(returnBoolean());
  });
});
