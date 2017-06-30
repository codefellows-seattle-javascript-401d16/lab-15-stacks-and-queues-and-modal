'use strict';

// Implement a stack consturctor with push and pop methods
// Implement a queue constroctor with enqueue and dequeue methods
// Testing
//
// Test your stack methods
// Test your queue methods
// Bonus Points:
//
// 1pt Implement your stack using a SinglyLinkedList
// 1pt Implement your queue using a SinglyLinkedList

class SLL {
  constructor(value, next=null){
    this.value = value
    this.next=next
  }

  prependNode(node){
    if(!(node instanceof SLL))
      throw new Error('Use an SLL node!');
    node.next = this;
    return node;
  };
}

class Stack {
  constructor(){
      this.head = null;
  };

  push(value) {
    let topStack = new SLL(value);
    if(!this.head) {
      this.head = topStack;
      return this;
    }
    this.head.prependNode(value);
    this.head = topStack;
    return topStack
  }
};


let single = new SLL(3)
let potato = new SLL(4)
let frog = new SLL(5)

let apple = single.prependNode(potato).prependNode(frog);
console.dir(apple, {depth: Infinity})
