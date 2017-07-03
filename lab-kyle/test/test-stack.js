'use strict';

const expect = require('expect');
const Stack = require('../stack.js');

describe('testing stack.js', () => {
  describe('testing push', () => {
    it('should contain the values 3, 2, 1', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack[0]).toEqual(1);
      expect(stack[1]).toEqual(2);
      expect(stack[2]).toEqual(3);
    });
  });

  describe('testing pop', () => {
    it('should return the values 3, 2, 1', () => {
      let stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).toEqual(3);
      expect(stack.pop()).toEqual(2);
      expect(stack.pop()).toEqual(1);
    });
  });
});
