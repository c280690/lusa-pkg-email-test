'use strict';

const { assert } = require('chai');
const path = require('path');
const sinon = require('sinon');
const fs = require('fs');

const askUser = require('./build-options/ask-user');

const { build } = require('./');

describe('lib/index.js', () => {

	beforeEach(() => {
		sinon.stub(askUser, 'forOverwritePermission').returns(false);
		process.argv = [, , , 'pp-in-us-0001', 'kitchen-sink', 'lilly,healthlink,ska,alert,vae'];
	})

	afterEach(() => {
		askUser.forOverwritePermission.restore();
		process.argv = [];
	})

	it('is a function', () => {
		assert.isFunction(build);
	})

	// it('runs start to finish', async function(done) {
	// 	this.timeout(0);
	// 	const testProjectFolder = path.join(__dirname, '../test/projectFolder');
	// 	await build(testProjectFolder, true);
	// })

	// it('rebuilds on existing content', async function(done) {
	// 	this.timeout(0);
	// 	const testProjectFolder = path.join(__dirname, '../../..');
	// 	await build(testProjectFolder, false);
	// })

})

describe('Other Tests', () => {

	// it('package version matches data-parser output', () => {
	// 	const { version } = package;
	// 	const dataVersion = 
	// })
})