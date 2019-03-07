'use strict';

module.exports = (emailType) => {
  if (emailType) {
    return emailType === 'Consumer Email';
  }
  return false;
};
