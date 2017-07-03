'use strict';

const expect = require('expect');
const Stack = require('../model/stack.js');

describe('testing stack methods', () => {
  let stack = new Stack();
  describe('testing push', () => {
    stack.push(1).push(2).push(3);
    it('should equal 1', () => {
      expect(stack.value).toEqual(1);
      expect(stack.next.value).toEqual(2);
      expect(stack.next.next.value).toEqual(3);
    });
  });
  describe('testing pop', () => {
    stack.pop.pop;
    it('should equal 3', () => {
      expect(stack.value).toEqual(3);
    });
  });
});
