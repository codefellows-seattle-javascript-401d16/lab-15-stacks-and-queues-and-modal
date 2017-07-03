'use strict';

const expect = require('expect');
const Stack = require('../stack.js');
const SLL = require('../sll.js');

describe('testing stack', () => {
  describe('testing push method', () => {
    it('should add a node to the stack', () => {
      let stack = new Stack();
      stack.push('first node');
      expect(stack.head).toEqual(new SLL('first node'));
    });
    it('should not add anything to the stack', () => {
      let stack = new Stack();
      stack.push();
      expect(stack[0]).toEqual(undefined);
    });
  });
  describe('testing pop method', () => {
    it('should pop a method off the stack', () => {
      let stack = new Stack();
      stack.push('first node');
      stack.push('second node');
      stack.pop();
      expect(stack.head.val).toEqual('first node');
    });
    it('should not pop anything, and return undefined as stack is empty', () => {
      let stack = new Stack();
      expect(stack.pop()).toEqual(undefined);
    });
  });
});
