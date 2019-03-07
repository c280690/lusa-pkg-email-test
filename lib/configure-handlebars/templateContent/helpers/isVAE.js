'use strict';

module.exports = (emailType) => {
  if (emailType) {
    return emailType === 'Veeva Approved Email (VAE)';
  }
  return false;
};
