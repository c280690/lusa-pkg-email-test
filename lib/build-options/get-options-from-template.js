'use strict';

const fs = require('fs');

module.exports = async (projectFolder) => {
  const { mmn, footers } = JSON.parse(fs.readFileSync(`${projectFolder}/src/content.json`));

  return { mmn, footers };
};
