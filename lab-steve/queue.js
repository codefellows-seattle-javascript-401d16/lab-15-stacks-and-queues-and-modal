'use strict';

const SLL = require('./SLL.js');

module.exports = class Queue {
  constructor(value) {
    this.head = new SLL(value);
    this.tail = this.head;
  }

  enqueue(value) {
    this.tail.next = new SLL(value);
    this.tail = this.tail.next;
    return this;
  }

  dequeue() {
    if(!this.head) return undefined; //nothing in queue
    this.head = this.head.next;
    return this.head.value;
  }
};
