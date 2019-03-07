'use strict';

const { assert } = require('chai');
const sinon = require('sinon');
const path = require('path');
const fs = require('fs');

const buildAlertVariations = require('./build-alert-variations');
const options = require('../../test/projectFolder1/src/content');

describe('finalize-html/build-alertVariations() method', () => {

	beforeEach(() => {
		sinon.stub(fs, 'writeFileSync')
	})

	afterEach(() => {
		fs.writeFileSync.restore();
	})

	it('is a function', () => {
		assert.isFunction(buildAlertVariations);
	})

	// it('compiles with valid options', async () => {
	// 	const projectFolder = path.join(__dirname, '../../test/projectFolder1');
	// 	await buildAlertVariations(projectFolder, options);
	// })

})