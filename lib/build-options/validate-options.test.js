'use strict';

var { assert } = require('chai');

const validateOptions = require('./validate-options')

const path = require('path');

const newTemplateFooters = ['lilly', 'healthlink', 'ska']

describe('Validate Options [lib/validateOptions.js]', () => {

	it('is a function', () => {
		assert.isFunction(validateOptions);
	})

	it('accepts all existing brand names', async () => {
		const validOptions1 = {
			template: 'branded-1',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		const validOptions2 = {
			template: 'branded-2',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		const validOptions3 = {
			template: 'kitchen-sink',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		const validOptions4 = {
			template: 'unbranded-1',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		const validOptions5 = {
			template: 'unbranded-2',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		const validOptions6 = {
			template: 'unbranded-3',
			mmn: 'pp-in-us-0001',
			footers: {}
		}
		assert.deepEqual(validOptions1, await validateOptions(validOptions1));
		assert.deepEqual(validOptions2, await validateOptions(validOptions2));
		assert.deepEqual(validOptions3, await validateOptions(validOptions3));
		assert.deepEqual(validOptions4, await validateOptions(validOptions4));
		assert.deepEqual(validOptions5, await validateOptions(validOptions5));
		assert.deepEqual(validOptions6, await validateOptions(validOptions6));
	})

	it('throws "invalid template name" error with invalid template name', async () => {
		const invalidOptions = {
			template: 'invalid-template',
			mmn: 'pp-in-us-0001'
		}
		try { await validateOptions(invalidOptions) }
		catch (error) { assert.isTrue(error.message.indexOf('invalid template name') > -1) }
	})

	it('throws "invalid mmn" error with invalid mmn', async () => {
		const invalidOptions1 = {
			template: 'branded-1',
			mmn: 'PP-IN-USs-0001'
		}
		const invalidOptions2 = {
			template: 'branded-1',
			mmn: '?p-in-us-0001'
		}
		const invalidOptions3 = {
			template: 'branded-1',
			mmn: 'pp-idn-us-0001'
		}
		const invalidOptions4 = {
			template: 'branded-1',
			mmn: 'ppf-in-us-0001'
		}
		const invalidOptions5 = {
			template: 'branded-1',
			mmn: 'p1-in-us-0001'
		}
		const invalidOptions6 = {
			template: 'branded-1',
			mmn: 'pp-i1-us-0001'
		}
		const invalidOptions7 = {
			template: 'branded-1',
			mmn: 'pp-in-1s-0001'
		}
		const invalidOptions8 = {
			template: 'branded-1',
			mmn: 'PP-IN-US-000'
		}
		const invalidOptions9 = {
			template: 'branded-1',
			mmn: 'PP-IN-US-000a'
		}
		const expectedError = '[validateOptions.js] invalid mmn. (xx-xx-xx-####)';
		try { 
			await validateOptions(invalidOptions1);
		}
		catch (error) { assert.equal(error.message, expectedError) }
		try { 
			await validateOptions(invalidOptions2);
		}
		catch (error) { assert.equal(error.message, expectedError) }

		try { 
			await validateOptions(invalidOptions3);
		}
		catch (error) { assert.equal(error.message, expectedError) }

		try { 
			await validateOptions(invalidOptions4);
		}
		catch (error) { assert.equal(error.message, expectedError) }

		try { 
			await validateOptions(invalidOptions5);
		}
		catch (error) { assert.equal(error.message, expectedError) }

		try { 
			await validateOptions(invalidOptions6);
		}
		catch (error) { assert.equal(error.message, expectedError) }
		try { 
			await validateOptions(invalidOptions7);
		}
		catch (error) { assert.equal(error.message, expectedError) }
		try { 
			await validateOptions(invalidOptions8);
		}
		catch (error) { assert.equal(error.message, expectedError) }
		try { 
			await validateOptions(invalidOptions9);
		}
		catch (error) { assert.equal(error.message, expectedError) }

	})

	it('throws error when footers are missing', async () => {
		const options = {
			template: 'branded-1',
			mmn: 'pp-in-us-0001'
		}
		try { await validateOptions(options); } catch (error) {
			assert.include(error.message, '');
		}
	})

});
