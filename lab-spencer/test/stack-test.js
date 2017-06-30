'use strict';

const expect = require('expect');
const Stack = require('../model/stack.js');
const SLL = require('../model/singly-linked-list.js');

describe('Stack', () => {
  describe('push', () => {
    it('Should add a node to the stack', () => {
      let stack = new Stack();
      expect(stack.head).toEqual(null);
      stack.push(2);
      expect(stack).toBeA(Stack);
      expect(stack.head).toEqual(new SLL(2));
    });
    it('Should add nothing', () => {
      let stack = new Stack();
      stack.push();
      expect(stack).toEqual(new Stack());
      expect(stack.head).toEqual(null);
    });
  });
  describe('pop', () => {
    it('Should remove the last node that was pushed in', () => {
      let stack = new Stack();
      stack.push(4);
      stack.push(5);
      expect(stack.pop()).toEqual(5);
      expect(stack.pop()).toEqual(4);
    });
    it('Should return undefined', () => {
      let stack = new Stack();
      expect(stack.pop()).toNotExist();
    });
  });
});
