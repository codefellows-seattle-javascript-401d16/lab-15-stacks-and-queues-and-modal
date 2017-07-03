'use strict';

const expect = require('expect');
const Stack = require('./stack.js');
const Queue = require('./queue.js');

describe('testing queue methods', () => {
  describe('testing enqueue', () => {
    it('should ', () => {
      expect();
    });
  });
  describe('testing dequeue', () => {
    it('should ', () => {
      expect();
    });
  });
});

describe('testing stack methods', () => {
  let stack = new Stack();
  describe('testing push', () => {
    stack.push(1).push(2).push(3);
    it('should equal 1', () => {
      expect(stack[0]).toEqual(1);
    });
  });
  describe('testing pop', () => {
    stack.pop.pop;
    it('should equal 3', () => {
      expect(stack[0]).toEqual(3);
    });
  });
});
