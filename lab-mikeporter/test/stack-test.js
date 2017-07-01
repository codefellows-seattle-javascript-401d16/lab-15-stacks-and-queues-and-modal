'use strict';

const expect = require('expect');
const SLL = require('../singleLinkedList.js');
const Stack = require('../stack.js');

describe('testing stack.js', () => {
  describe('testing push value', () => {
    it('should push a single node into Stack when given a value', () => {
      let zeroStack = new Stack();
      let miniStack = zeroStack.push(3);
      expect(miniStack.head.value).toEqual(3);
    });
    it('should push two nodes into Stack when given a many pushes', () => {
      let zeroStack = new Stack();
      let miniStack = zeroStack.push(3).push(4);
      expect(miniStack.head.value).toEqual(4);
      expect(miniStack.head.next.value).toEqual(3);
    });
    it('should push many nodes into Stack when given a many pushes', () => {
      let zeroStack = new Stack();
      let miniStack = zeroStack.push(3).push(4).push(5).push(6);
      expect(miniStack.head.value).toEqual(6);
      expect(miniStack.head.next.value).toEqual(5);
      expect(miniStack.head.next.next.value).toEqual(4);
      expect(miniStack.head.next.next.next.value).toEqual(3);
    });
  });
  describe('testing push value', () => {
    it('should pop a single node off the Stack', () => {
      let zeroStack = new Stack();
      let miniStack = zeroStack.push(3).push(4).push(5);
      let bigStack = miniStack.push(6);
      expect(miniStack.head.value).toEqual(6);
      expect(miniStack.head.next.value).toEqual(5);
      expect(miniStack.head.next.next.value).toEqual(4);
      expect(miniStack.head.next.next.next.value).toEqual(3);
      let minusStack = miniStack.pop();
      expect(minusStack.value).toEqual(6);
      expect(bigStack).toEqual(miniStack);
    });
  });
});
