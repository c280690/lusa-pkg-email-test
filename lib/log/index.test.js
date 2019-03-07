'use strict';

const { assert } = require('chai');
const sinon = require('sinon');

const log = require('./');

describe('log/index.js methods', () => {

	it('inform() is a function', () => {
		assert.isFunction(log.inform);
	})

	it('inform() does not throw error', () => {
		log.inform('cool');
	})

	it('warn() is a function', () => {
		assert.isFunction(log.warn);
	})

	it('warn() does not throw error', () => {
		log.warn('cool');
	})

	it('debug() is a function', () => {
		assert.isFunction(log.debug);
	})

	it('debug() does not throw error', () => {
		log.debug('cool');
	})

	it('succeeded() is a function', () => {
		assert.isFunction(log.succeeded);
	})

	it('succeeded() does not throw error', () => {
		log.succeeded('cool');
	})

})