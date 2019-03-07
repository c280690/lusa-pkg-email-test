'use strict';

const fs = require('fs-extra');
const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpStreamToPromise = require('gulp-stream-to-promise');
const autoprefixer = require('gulp-autoprefixer');

const log = require('../log');

module.exports = async (projectFolder, isNew) => {
  log.inform('Building Stylesheet');


  if (isNew) {
    log.debug('copying example stylesheet to src folder');
    const exampleStyles = fs.readFileSync(path.join(__dirname, 'styles.scss'));
    fs.writeFileSync(`${projectFolder}/src/styles.scss`, exampleStyles);
  }

  const stylesheetPath = path.join(__dirname, './sass/styles.scss');

  log.debug('building custom stylesheet');

  await gulpStreamToPromise(gulp.src(stylesheetPath)
    .pipe(sass())
    .on('error', (err) => {
      log.warn(err);
    })
    .pipe(autoprefixer({ cascade: false, browsers: ['last 2 versions'] }))
    .pipe(gulp.dest(`${projectFolder}/temp/`)));

  log.succeeded('Built Stylesheet');
};
