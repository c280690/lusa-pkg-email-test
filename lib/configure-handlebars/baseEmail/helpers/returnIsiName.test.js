'use strict';

const { assert } = require('chai');

const returnIsiName = require('./returnIsiName');

describe('handlebars/baseEmail/helpers returnIsiName() method', () => {
  it('is a function', () => {
    assert.isFunction(returnIsiName);
  });

  it('returns taltz default', () => {
    assert.equal(returnIsiName('taltz'), 'ix-hcp-isi-01dec2017');
  });


  it('returns forteo default', () => {
    assert.equal(returnIsiName('forteo'), 'te-hcp-isi-24sep2012-with-4-24-disclaimers');
  });


  it('returns humalog default', () => {
    assert.equal(returnIsiName('humalog'), 'hcp-jr-kp-isi-17jul2017');
  });


  it('returns cyramza default', () => {
    assert.equal(returnIsiName('cyramza'), 'rc-c-hcp-isi-17sep2015');
  });

  it('returns string if no default exists', () => {
    assert.equal(returnIsiName('string'), 'string');
  });
});
