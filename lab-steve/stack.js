'use strict';

const SLL = require('./SLL.js');

module.exports = class Stack {
  constructor(value) { // O(1)
    this.head = new SLL(value);
  }

  push(value) { // O(1)
    this.head = new SLL(value, this.head);
    return this;
  }

  pop() {  // O(1)
    if(!this.head) return undefined; //nothing left in Stack
    this.head = this.head.next;
    return this.head.value;
  }
};
