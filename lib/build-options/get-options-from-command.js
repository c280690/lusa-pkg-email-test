'use strict';

const { debug } = require('../log');

module.exports = () => {
  const [, , , mmn, template, footerString, emailTypeInput] = process.argv;

  if (!mmn || !template || !footerString) return false;

  debug('getting options from command');

  const variations = {};

  footerString.split(',').forEach((footer) => {
    variations[footer] = 'true';
  });

  let emailType = 'Default';

  if (emailTypeInput) {
    if (emailTypeInput.indexOf('consumer') > -1) {
      emailType = 'Consumer Email';
    } else if (emailTypeInput.indexOf('veeva') > -1) {
      emailType = 'Veeva Approved Email (VAE)';
    }
  }

  return {
    mmn, template, footers: { variations }, emailType,
  };
};
