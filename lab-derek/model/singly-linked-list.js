'use strict';

module.exports = class SLL {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  //O(n)
  appendNode(node){
    if(!(node instanceof SLL))
      throw new Error('parameter must be instance of SLL');
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }
};
