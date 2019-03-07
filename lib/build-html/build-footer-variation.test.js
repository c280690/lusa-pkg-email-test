'use strict';

const { assert } = require('chai');
const fs = require('fs');

const buildVariation = require('./build-footer-variation');

describe('build-html/build-footer-variation() method', () => {

	const baseEmail = fs.readFileSync('./test/kitchen-sink.html');
	const templateContent = fs.readFileSync('./test/content.json');

	it('is a function', () => {
		assert.isFunction(buildVariation);
	})

	it('injects content correctly', async () => {
		const variation = await buildVariation(JSON.parse(templateContent), baseEmail.toString(), 'lilly');
		assert.include(variation, 'PP-IN-US-0001');
	})
	
})