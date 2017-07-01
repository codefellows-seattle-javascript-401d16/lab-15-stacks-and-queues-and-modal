'use strict';

const SLL = require('./singleLinkedList.js');

class Stack {
  constructor () {
    this.head = null;
  }
  // O(1) we are doing a work, we are only prepending to a stack
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
  // O(1) we are doing a work, we are only removing the first node and changing the head in a stack
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
