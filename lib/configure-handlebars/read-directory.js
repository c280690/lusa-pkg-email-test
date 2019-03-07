'use strict';

const fs = require('fs');

const readDirectory = (directory) => {
  const filePaths = [];
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    // if file, push file to filePaths
    if (file.indexOf('.') > -1) filePaths.push(`${directory}/${file}`);
    // if directory, push nested files to filePaths
    else {
      const nestedFilePaths = readDirectory(`${directory}/${file}`);
      filePaths.push(...nestedFilePaths);
    }
  });
  return filePaths;
};

module.exports = directory => readDirectory(directory);
