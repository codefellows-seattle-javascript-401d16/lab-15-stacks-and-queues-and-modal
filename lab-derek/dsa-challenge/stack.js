'use strict';

const SLL = require('./SLL.js');

module.exports = class Stack {
  constructor(){
    this.head = null;
  }

  push(value) {
    let next = new SLL(value);
    if(!this.head){
      this.head = next;
      return this;
    }

    this.appendNode(next);
    return this;
  }

  pop() {
    if(!this.head){
      return;
    }
    let result = this.head;
    if(!this.next){
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
