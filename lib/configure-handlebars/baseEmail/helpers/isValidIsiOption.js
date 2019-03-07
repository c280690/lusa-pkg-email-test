'use strict';

module.exports = function (str) {
  if (str === 'forteo' ||
str === 'humalog' ||
str === 'taltz' ||
str === 'cyramza' ||
str === 'te-hcp-isi-24sep2012' ||
str === 'te-hcp-isi-24sep2012-with-4-24-disclaimers' ||
str === 'ix-hcp-isi-01dec2017' ||
str === 'ix-hcp-isi-01dec2017_v2' ||
str === 'hcp-jr-kp-isi-17jul2017' ||
str === 'dg-hcp-isi-06feb2017' ||
str === 'rb-p-hcp-isi-16feb2017' ||
str === 'rc-c-hcp-isi-17sep2015') {
    return true;
  }
  console.log(`Invalid ISI Default Option '${str}'. \nValid options include 'forteo', 'humalog', 'taltz', 'cyramza'`);
  return false;
};
