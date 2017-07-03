'use strict';

const SLL = require('./singleLinkedList.js');

class Queue {
  constructor () {
    this.head = null;
  }
  // O(1) we are doing a work, we aren't iterating at all. We are just changing the head
  enqueue (value) {
    let addToQueue = new SLL(value);
    if (!this.head) {
      this.head = addToQueue;
      return this;
    }
    this.head.prependNode(addToQueue);
    this.head = addToQueue;
    return this;
  }
  // O(n) we are always iterating to the last node and removing it
  dequeue () {
    let secondIn, removeFirstIn;

    if(!this.head.next) {
      removeFirstIn = this.head;
      this.head = null;
      return removeFirstIn;
    }
    if(!this.head.next.next) {
      removeFirstIn = this.head.next;
      this.head.next = null;
      return removeFirstIn;
    }
    secondIn = this.head.next;
    removeFirstIn = secondIn.next;
    while(removeFirstIn.next) {
      secondIn = secondIn.next;
      removeFirstIn = secondIn.next;
    }
    secondIn.next = null;
    return removeFirstIn;
  }
}

module.exports = Queue;
