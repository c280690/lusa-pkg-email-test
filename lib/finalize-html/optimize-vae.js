'use strict';

const fs = require('fs');
const minify = require('html-minifier').minify;

module.exports = async (projectFolder, templateContent) => {
  const { mmn } = templateContent;
  const filePath = `${projectFolder}/dist/${mmn}-vae.html`;
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8').toString();
    //       .replace(/<!-- -->/g, '')
    //       .replace(/<!--[\s\S]*?-->/g, '')
    //       .replace(/img class="show-for-large/g, 'img class="');
    console.log(content.length);
    const minifiedContent = minify(content, {
      removeTagWhitespace: true,
      removeStyleLinkTypeAttributes: true,
      removeComments: true,
      minifyCSS: true,
      collapseWhitespace: true,
    });
    console.log(minifiedContent.length);
    fs.writeFileSync(filePath, minifiedContent);
  }
};
