'use strict';

const { assert, expect } = require('chai');
const path = require('path');
const sinon = require('sinon');
const fs = require('fs');

const buildOptions = require('./');
const askUser = require('./ask-user');

const srcFolder = path.join(__dirname, '../../test');

describe('build-options/ method', async () => {
  const contentJson = fs.readFileSync(`${srcFolder}/content.json`);

  beforeEach(() => {
    sinon.stub(askUser, 'forOptions').resolves({ mmn: 'pp-in-us-0001', template: 'kitchen-sink', footers: ['lilly'] });
    sinon.stub(askUser, 'forOverwritePermission').resolves(true);
    sinon.stub(fs, 'readFileSync').returns(contentJson);
  });

  afterEach(() => {
    askUser.forOptions.restore();
    askUser.forOverwritePermission.restore();
    fs.readFileSync.restore();
  });

  it('is a function', () => {
    assert.isFunction(buildOptions);
  });

  it('asks user for options if command line options are absent', async () => {
    process.argv[3] = undefined;
    process.argv[4] = undefined;
    process.argv[5] = undefined;

    const options = await buildOptions(srcFolder, true);
    expect(options).to.have.property('mmn');
    expect(options).to.have.property('footers');
    expect(options).to.have.property('template');
  });

  it('gets options from template if !isNewTemplate', async () => {
    const options = await buildOptions(srcFolder, false);

    const expectedOutput = {
      mmn: 'pp-in-us-0001',
			  footers: {
        trademarkStatement: "<span class='placeholder'>[brand] is a registered trademark</span>",
        vermont: 'false',
        boehringer: 'false',
        copyrightYear: '2018',
        variations: {
          lilly: 'false',
          healthlink: 'false',
          ska: 'false',
          vae: 'false',
          alert: 'false',
          none: 'false',
        },
      },
    };

    assert.deepEqual(options, expectedOutput);
  });

  describe('', () => {
    before(() => {
      sinon.stub(fs, 'existsSync').resolves(true);
    });

    after(() => {
      fs.existsSync.restore();
    });

    it('should throw "user aborted build" error', async () => {
      try { await buildOptions(srcFolder, true); } catch (error) {
        assert.include(error.message, 'aborted by user');
      }
    });
  });
});
