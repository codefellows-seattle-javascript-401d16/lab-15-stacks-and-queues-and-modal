'use strict';

const expect = require('expect');
const Stack = require('../scripts/stack.js');

class SLL {
  constructor(value, next=null){
    this.value = value;
    this.next=next;
  }

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

describe('Testing Stack.', () => {
  describe('Testing push.', () => {
    it('Should add a node to the stack.', () => {
      let stack = new Stack();
      expect(stack.head).toEqual(null);
      stack.push(1);
      expect(stack).toBeA(Stack);
      expect(stack.head.toString()).toEqual(new SLL(1));
    });
  });

  describe('Testing pop.', () => {
    it('Should remove the last node.', () => {
      let stack = new Stack();
      stack.push(4);
      stack.push(5);
      expect(stack.pop()).toEqual(5);
      expect(stack.pop()).toEqual(4);
    });
  });
});
