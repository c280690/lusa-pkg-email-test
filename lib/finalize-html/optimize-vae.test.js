'use strict';

const { assert } = require('chai');
const path = require('path');

const optimizeVae = require('./optimize-vae');

const kitchenSinkOptions = require('../../test/kitchen-sink-options');
const kitchenSinkContent = require('../../test/content.json');

describe('optimize-vae() method', () => {
	it('is a function', () => {
		assert.isFunction(optimizeVae);
	})

	it('minifies code', async () => {
		// const projectFolder = path.join(__dirname, '../../test/projectFolder1');

		// const testFilePath = path.join(__dirname, '../../test/output-test/output.html');
		// const result = await optimizeVae(testFilePath);
	})
})