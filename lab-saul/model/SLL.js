'use strict';

class SLL {
  constructor(value, next=null){
    this.value = value;
    this.next=next;
  }
  // this is a BIG O of n
  appendNode(node){
    if(!(node instanceof SLL))
      throw new Error('must append a SLL node');
    if(!this.next){
      this.next = node;
      return;
    }

    this.next.appendNode(node);
  }
}

module.exports = SLL;
