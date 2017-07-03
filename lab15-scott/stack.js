'use strict';

//create a link list constructor to use in the stack process

class singlyLL {
  constructor(value, next=null){
    //assign the value passing in to the value property
    this.value = value;
    //assign the next value to the next property, if empty then make it null
    this.next = next;
  }
  //start the appending process

  appendNode(node){
    // if the node is not the same instance throw an error
    if (!(node instanceof singlyLL)) {
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

  //push method
  push(value){
    //assign next to the value passing in and create a new node
    let next = new singlyLL(value);
    //if there is no head, make this the head
    if (!this.head) {
      this.head = next;
      return this;
    }

  }
}
