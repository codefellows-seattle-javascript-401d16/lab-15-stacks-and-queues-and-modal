'use strict';
//all funtions are O(n)
const LinkedList = require('./linkedlist.js');

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let next = new LinkedList(value);
    if (!value) return;
    if (!this.head) {
      this.head = next;
      return this;
    }
    this.head.appendNode(next);
    return this;
  }

  pop() {
    console.log('cats');
    if (!this.head) return;
    let result = this.head;
    if (!result.next) {
      this.head = null;
      return result.value;
    }
    let tail = this.head;
    result = result.next;

    while (result.next) {
      tail = tail.next;
      result = result.next;
    }
    tail.next = null;
    return result.value;
  }
}

module.exports = Stack;
