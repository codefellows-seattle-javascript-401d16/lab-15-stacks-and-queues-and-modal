'use strict';

const SLL = require('./SLL.js');

module.exports = class Queue {
  constructor(){
    this.head = null;
  }

  enqueue(value) {
    let next = new SLL(value);
    if(!this.head){
      this.head = next;
    }
    if(!this.next){
      this.appendNode(value);
    }
  }

  dequeue(){
    let current = this.head;
    let result = current;
    this.head = current.next;
    current = null;
    return result;
  }
};
