const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },

  addLink(value) {
    const text = arguments.length === 0 ? '' : String(value);
    this.links.push(`( ${text} )`);
    return this;
  },

  removeLink(position) {
    const isValidPosition =
      Number.isInteger(position) && position >= 1 && position <= this.links.length;

    if (!isValidPosition) {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.links.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    const chain = this.links.join('~~');
    this.links = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
