'use strict';

const { assert } = require('chai');
const path = require('path');
const readDirectory = require('./read-directory');

describe('lib/configure-handlebars/read-directory() function', () => {
    it('is a function', () => {
        assert.isFunction(readDirectory);
    })

    it('does a thing', () => {
        console.log('about to get files');

        const directory = path.join(__dirname, './templateContent/partials');
        const files = readDirectory(directory);

        console.log(files);
    })
})