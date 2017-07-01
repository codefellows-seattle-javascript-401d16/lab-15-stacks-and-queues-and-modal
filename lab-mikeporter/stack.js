'use strict';

const SLL = require('./singleLinkedList.js');

class Stack {
  constructor () {
    this.head = null;
  }

  push (value) {
    let topStack = new SLL(value);
    if (!this.head) {
      this.head = topStack;
      return this;
    }
    this.head.prependNode(topStack);
    this.head = topStack;
    return this;
  }

  pop () {
    if(!this.head)
      return;
    let newHead = this.head.next;
    this.head.next = null;
    let current = this.head;
    this.head = newHead;
    return current;
  }
}

module.exports = Stack;
