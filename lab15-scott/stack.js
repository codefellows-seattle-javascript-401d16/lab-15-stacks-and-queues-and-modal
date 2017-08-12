'use strict';

//create a link list constructor to use in the stack process

class SinglyLL {
  constructor(value, next=null){
    //assign the value passing in to the value property
    this.value = value;
    //assign the next value to the next property, if empty then make it null
    this.next = next;
  }

  //big o = O(n)
  //start the appending process
  appendNode(node){
    // if the node is not the same instance throw an error
    if (!(node instanceof SinglyLL)) {
      throw new Error ('Please append a new node instance');
    }
    //set the node to the tail of the list where next = null
    if (!this.next) {
      this.next = node;
      return;
    }
  }
}

//start of stack constructor

class Stack {
  constructor(){
    // start with no head
    this.head = null;
  }
  //big o = O(n)
  //push method
  push(value){
    //assign next to the value passing in and create a new node
    let next = new SinglyLL(value);
    //if there is no head, make this the head
    if (!this.head) {
      this.head = next;
      return this;
    }
    //if there is a head, construct a new node and append to the tail
    this.head.appendNode(next);
    return this;
  }

  //big o = O(n)
  // taking nodes off of the stack, start of pop
  pop(){
    //check if there's a head/list at all
    if (!this.head) return;
    //check if there's only a head and no other nodes
    if (!this.head.next) {
      this.head = null;
      //return the value
      return this.head.value;
    }
    //create a slow and fast track
    let slow = this.head;
    //assign result
    let result = this.head.next;
    //advance slow and result pointers until the tail is found at null
    while (result.next) {
      slow = slow.next;
      result = result.next;
    }
    //assign the slow pointers next property to null as it's the new tail
    slow.next = null;
    //return the value to pop off
    return result.value;
  }
}

module.exports = {
  SinglyLL : SinglyLL,
  Stack : Stack,
};
