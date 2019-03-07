'use strict';


const gulp = require('gulp');
const gulpStreamToPromise = require('gulp-stream-to-promise');

const inlineCSS = require('gulp-inline-css');
const strip = require('gulp-strip-comments');
const siphon = require('siphon-media-query');
const replace = require('gulp-replace');
const fs = require('fs');
const inky = require('inky');
const makePretty = require('gulp-html-beautify');


const {
  inform, succeeded,
} = require('../log');

const getMediaQueries = (cssFilePath) => {
  const css = fs.readFileSync(cssFilePath, 'utf-8');
  return siphon(css);
};


module.exports = async (projectFolder) => {
  inform('Inlining Styles.');

  const inlineOptions = {
    applyStyleTags: false,
    removeStyleTags: true,
    preserveMediaQueries: true,
    removeLinkTags: true,
  };

  const stripOptions = {
    safe: true,
    ignore: [
      /<!--<!\[endif\]-->/g,
      /<!-- special header placeholder -->/g,
      /<!-- special footer placeholder -->/g,
    ],
  };

  const mediaQueries = getMediaQueries(`${projectFolder}/temp/styles.css`);
  const inlineMediaQueries = `<style>${mediaQueries}</style>`;

  await gulpStreamToPromise(gulp.src(`${projectFolder}/temp/*.html`)
    .pipe(inky())
    .pipe(inlineCSS(inlineOptions))
    .pipe(replace('<!-- app media queries -->', inlineMediaQueries))
    .pipe(strip(stripOptions))
    .pipe(makePretty({ indentSize: 2, preserve_newlines: false }))
    .pipe(gulp.dest(`${projectFolder}/dist/`)));

  succeeded('Inlined Styles');
};
