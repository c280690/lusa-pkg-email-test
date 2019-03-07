'use strict';

const fs = require('fs');

const log = require('../log');
const { version } = require('../../package');

module.exports = async (projectFolder, templateContent) => {
  log.inform('Parsing Data');

  const {
    to,
    from,
    date,
    approvalMonth,
    approvalYear,
    previewText,
    subjectLines,
    mmn,
    footers: {
      variations,
    },
  } = templateContent;

  const selectedFooters = [];

  Object.keys(variations).forEach((footer) => {
    if (variations[footer] !== 'false') {
      if (footer === 'alert') {
        Object.keys(variations[footer]).forEach((alertVariation) => {
          selectedFooters.push(`alert${alertVariation}`);
        });
      }

      selectedFooters.push(footer);
    }
  });

  const data = {
    to,
    from,
    date,
    buildToolVersion: version,
    mmn,
    approvalMonth,
    approvalYear,
    previewText,
    subjectLines,
    variations: selectedFooters,
  };

  await fs.writeFileSync(`${projectFolder}/dist/data.json`, JSON.stringify(data, null, 4));

  log.succeeded('Parsed Data');
};
