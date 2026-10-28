const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const ALPHABET_SIZE = 26;
const CODE_OF_A = 'A'.charCodeAt(0);

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.transform(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.transform(encryptedMessage, key, -1);
  }

  transform(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    let keyIndex = 0;
    let result = '';

    for (const char of upperText) {
      if (char < 'A' || char > 'Z') {
        result += char;
        continue;
      }

      const charShift = char.charCodeAt(0) - CODE_OF_A;
      const keyShift = upperKey.charCodeAt(keyIndex % upperKey.length) - CODE_OF_A;
      const newShift = (charShift + direction * keyShift + ALPHABET_SIZE) % ALPHABET_SIZE;

      result += String.fromCharCode(CODE_OF_A + newShift);
      keyIndex += 1;
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
