'use strict';

const SLL = require('./SLL.js');

module.exports = class Stack {
  constructor(value) {
    this.head = new SLL(value);
  }

  push(value) {
    this.head = new SLL(value, this.head);
    return this;
  }

  pop() {
    if(!this.head) return undefined; //nothing left in Stack
    this.head = this.head.next;
    return this.head.value;
  }
};
