'use strict';

const SLL = require('./sll.js');

module.exports = class Stack {
  constructor(){
    this.head = null;
  }

  push(value){
    let next = new SLL(value);
    if(!this.head){
      this.head = next;
      return this;
    }

    this.head.appendNode(next);
    return this;
  }

  pop(){
    if(!this.head)
      return;
    let result = this.head;
    if(!result.next){
      this.head = null;
      return result.value;
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
