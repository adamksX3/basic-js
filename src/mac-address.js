const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  const groups = inputString.split('-');
  if (groups.length !== 6) return false;
  const hexDigits = '0123456789ABCDEF';
  return groups.every(
  (group) => group.length === 2 && hexDigits.includes(group[0]) && hexDigits.includes(group[1]),
);
}

module.exports = {
  isMAC48Address
};
