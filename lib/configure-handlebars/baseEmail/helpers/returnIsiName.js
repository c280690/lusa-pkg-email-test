'use strict';

module.exports = function (str) {
  switch (str) {
    case 'taltz':
      return 'ix-hcp-isi-01dec2017';
    case 'forteo':
      return 'te-hcp-isi-24sep2012-with-4-24-disclaimers';
    case 'humalog':
      return 'hcp-jr-kp-isi-17jul2017';
    case 'cyramza':
      return 'rc-c-hcp-isi-17sep2015';
    default:
      return str;
  }
};
