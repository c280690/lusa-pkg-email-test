'use strict';

const fs = require('fs-extra');
const gulp = require('gulp');
const connect = require('gulp-connect');

const buildOptions = require('./build-options');
const buildContent = require('./build-content');
const buildHtml = require('./build-html');
const buildStylesheet = require('./build-stylesheet');
const finalizeHtml = require('./finalize-html');
const log = require('./log');

const build = async (projectFolder, isNew) => {
  try {
    const options = await buildOptions(projectFolder, isNew);

    if (isNew) await fs.remove(`${projectFolder}/src`);
    await fs.remove(`${projectFolder}/temp`);
    await fs.remove(`${projectFolder}/dist`);

    const content = await buildContent(options, projectFolder, isNew);
    await buildHtml(content, projectFolder);
    await buildStylesheet(projectFolder, isNew);

    await finalizeHtml(projectFolder, content, options);
    if (fs.existsSync(`${projectFolder}/src/images`)) {
      log.debug('copying files from src/images folder');
      await fs.copy(`${projectFolder}/src/images`, `${projectFolder}/dist/images`);
    }
    // fs.remove(`${projectFolder}/temp`);
  } catch (error) {
    log.warn(error);
  }
};

const develop = async (projectFolder) => {
  await build(projectFolder, false);

  connect.server({
    root: `${projectFolder}/dist`,
    livereload: true,
    port: 3000,
  });

  gulp.watch([`${projectFolder}/src/**/*`], [
    async () => {
      log.inform('\nRebuilding Content\n', false);
      await build(projectFolder, false);
      gulp.src(`${projectFolder}/dist/**/*`)
        .pipe(connect.reload());
      log.inform('\nContent Reloaded\n', false);
    },
  ]);
};

module.exports = {
  build,
  develop,
};
