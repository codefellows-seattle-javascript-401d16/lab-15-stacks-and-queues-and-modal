'use strict';

const SLL = require('./SLL.js');

module.exports = class Queue {
  constructor(value) {  // O(1)
    this.head = new SLL(value);
    this.tail = this.head;
  }

  enqueue(value) {  // O(1)
    this.tail.next = new SLL(value);
    this.tail = this.tail.next;
    return this;
  }

  dequeue() {  // O(1)
    if(!this.head) return undefined; //nothing in queue
    this.head = this.head.next;
    return this.head.value;
  }
};
