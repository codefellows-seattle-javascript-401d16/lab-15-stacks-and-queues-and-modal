'use strict';

class SLL {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }

  prependNode (node) {
    if (!(node instanceof SLL))
      throw new Error('Use an SLL node!');
    node.next = this;
    return node;
  }
}

module.exports = SLL;
