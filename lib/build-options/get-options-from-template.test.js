'use strict';

const { assert } = require('chai');
const path = require('path');

const getOptionsFromTemplate = require('./get-options-from-template');

describe('build-options/get-options-from-template() method', () => {
  it('is a function', () => {
    assert.isFunction(getOptionsFromTemplate);
  });

  it('gets options from existing template content.json', async () => {
    const srcFolder = path.join(__dirname, '../../test/projectFolder1');
    const options = await getOptionsFromTemplate(srcFolder);
    const expectedOptions = {
      mmn: 'pp-in-us-0001',
      footers: {
			    trademarkStatement: "<span class='placeholder'>[brand] is a registered trademark</span>",
			    vermont: 'false',
			    boehringer: 'false',
			    copyrightYear: '2018',
			    variations: {
			      lilly: 'true',
			      healthlink: 'true',
			      ska: 'true',
			      vae: 'true',
			      alert: {
              "HCP": "true",
              "MD": "true",
              "NP": "true",
              "PA": "true",
              "Pharm": "true"
            },
			      none: 'false'
			    },
      },
    };
    assert.deepEqual(options, expectedOptions);
  });

  it('throws error on invalid src folder', async () => {
    try {
      await getOptionsFromTemplate('invalid folder obviously');
    } catch (error) {
      assert.include(error.message, 'invalid folder');
    }
  });
});
