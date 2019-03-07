'use strict';

const { assert, expect } = require('chai');
const sinon = require('sinon');
const inquirer = require('inquirer');

const askUser = require('./ask-user');

describe('build-options/ask-user aboutOverwritingExistingTemplate() method', () => {
  it('is a function', () => {
    assert.isFunction(askUser.forOverwritePermission);
  });
});


describe('build-options/ask-user forOptions() method', () => {
  it('is a function', () => {
    assert.isFunction(askUser.forOptions);
  });

  // it('returns a variations object for footers', async function(done) {
  // 	this.timeout(0);
  // 	const { footers: { variations } } = await askUser.forOptions();
  // 	assert.isObject(variations);
  //   assert.equal(variations.lilly, 'true');
  // })

});
