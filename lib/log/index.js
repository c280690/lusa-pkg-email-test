'use strict';

const chalk = require('chalk');

function log(str) {
  console.log(str);
}

function warn(str) {
  const message = chalk.italic.grey('       ')
                  + chalk.italic.red(str);
  log(message);
  return true;
}

function inform(str) {
  const message = chalk.italic.grey('\n    ')
                  + chalk.italic.yellow(str);
  log(message);
  return true;
}

function debug(str) {
  const message = chalk.italic.grey('       ')
                  + chalk.italic.grey(str);
  log(message);
  return true;
}

function succeeded(str) {
  const message = chalk.italic.grey('    ')
                  + chalk.italic.green('[succeeded] ')
                  + chalk.italic.grey(str);
  log(message);
  return true;
}

module.exports = {
  inform,
  warn,
  debug,
  succeeded,
  log,
};

