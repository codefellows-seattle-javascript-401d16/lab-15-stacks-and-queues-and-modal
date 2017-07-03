'use strict';

const expect = require('expect');
const Stack = require('../model/stack.js');
const LinkedList = require('../model/linkedlist.js');

describe('testing stack methods', () => {
  let stack = new Stack();
  describe('testing push', () => {
    stack.push(1);
    it('should equal 1', () => {
      console.log(stack);
      expect(stack.head).toEqual(new LinkedList(1));
    });
  });
  describe('testing pop', () => {
    let tempStack = new Stack();
    tempStack.push(1);
    tempStack.pop();
    it('should equal null', () => {
      expect(tempStack.head).toEqual(null);
    });
  });
});
