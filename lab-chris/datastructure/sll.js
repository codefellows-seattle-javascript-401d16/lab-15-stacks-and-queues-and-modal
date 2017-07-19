'use stric';

module.exports = class SLL {
  constructor(value, next=null){
    this.value = value;
    this.next=next;
  }

  // O(1)
  appendNode(node){
    if(!(node instanceof SLL))
      throw new Error('must append a SLL node');
    if(!this.next){
      this.next = node;
      return;
    }

    this.next.appendNode(node);
  }
};
