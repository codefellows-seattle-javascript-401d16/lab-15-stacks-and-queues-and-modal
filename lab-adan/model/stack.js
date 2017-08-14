'use strict';

const SLL = require('./singly-linked-list.js');

module.exports = class Stack {
  constructor() {
    this.head = null;
  }

  // Big O: O(1)
  push(value) {
    let next = new SLL(value);
    if(!value)
      return;
    if(!this.head) {
      this.head = next;
      return this;
    }
    this.head.appendNode(next);
    return this;
  }

  // Big O: O(n)
  pop() {
    if(!this.head)
      return;
    let result = this.head;
    if(!result.next) {
      this.head = null;
      return result.value;
    }
    let tail = this.head;
    result = result.next;

    while(result.next) {
      tail = tail.next;
      result = result.next;
    }

    tail.next = null;
    return result.value;
  }
};
