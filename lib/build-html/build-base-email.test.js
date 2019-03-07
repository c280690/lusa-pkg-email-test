'use strict';

const { assert } = require('chai');
const fs = require('fs');

const buildBaseEmail = require('./build-base-email');

describe('build-html/build-base-email() method', () => {

	it('is a function', () => {
		assert.isFunction(buildBaseEmail)
	})

	it('returns html with template content', async () => {
		const templateContent = JSON.parse(fs.readFileSync('./test/content.json').toString());
		const baseEmail = await buildBaseEmail(templateContent);
    	assert.include(baseEmail, 'Lorem ipsum dolor');
	})

})