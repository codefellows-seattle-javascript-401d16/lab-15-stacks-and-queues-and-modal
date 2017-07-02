'use strict';

const SLL = require('./singly-linked-list.js');

module.exports = class Queue {
  constructor(){
    this.head = null;
  }

  //O(n)
  enqueue(value) {
    let next = new SLL(value);
    if(!this.head){
      this.head = next;
      return this;
    }
    this.head.appendNode(next);
    return this;
  }

  //O(1)
  dequeue(){
    let current = this.head;
    let result = current.value;
    this.head = current.next;
    current = null;
    return result;
  }
};
