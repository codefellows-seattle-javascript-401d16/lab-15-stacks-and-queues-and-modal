'use strict';

const SLL = require('./singly-linked-list.js');

module.exports = class Stack {
  constructor(){
    this.head = null;
  }

  //O(n)
  push(value) {
    let next = new SLL(value);
    if(!this.head){
      this.head = next;
      return this;
    }

    this.head.appendNode(next);
    return this;
  }

  //O(n)
  pop() {
    if(!this.head){
      return;
    }
    let result = this.head;
    if(!result.next){
      this.head = null;
      return result;
    }

    let tail = this.head;
    result = result.next;

    while(result.next){
      tail = tail.next;
      result = result.next;
    }

    tail.next = null;
    return result.value;
  }
};
