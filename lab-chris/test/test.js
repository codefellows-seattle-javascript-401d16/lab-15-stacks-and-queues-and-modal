'use strict';

const expect = require('expect');
const Queue = require('../datastructure/queue.js');
const SLL = require('../datastructure/sll.js');
const Stack = require('../datastructure/stack.js');

describe('Testing queue', () => {
  describe('Testing enqueue', () => {
    it('should add a node to the queue', () => {
      let queue = new Queue();
      queue.enqueue('cat');
      expect(queue).toExist();
      expect(queue[0]).toEqual('cat');
      expect(queue[1]).toNotExist();
    });
  });
  describe('Testing dequeue', () => {
    it('should remove a node from the queue', () => {
      let queue = new Queue();
      queue.enqueue('cat');
      expect(queue).toExist();
      expect(queue[0]).toEqual('cat');
      queue.dequeue();
      expect(queue[0]).toNotExist();
    });
  });
});


describe('Singly Linked List', () => {
  describe('SLL Constructor', () => {
    it('Should create a single node', () => {
      let node = new SLL('cat');
      expect(node).toExist();
      expect(node.value).toEqual('cat');
      expect(node.next).toEqual(null);
    });
  });
});

describe('Testing stack', () => {
  describe('Testing push', () => {
    it('should add a node to the stack', () => {
      let stack = new Stack();
      stack.push('cat');
      stack.push('dog');
      expect(stack).toExist();
      expect(stack.head.value).toEqual('cat');
      expect(stack.head.next.value).toEqual('dog');
    });
  });
  describe('Testing pop', () => {
    it('should remove a node from the stack', () => {
      let stack = new Stack();
      stack.push('cat');
      stack.push('dog');
      expect(stack).toExist();
      expect(stack.head.value).toEqual('cat');
      expect(stack.head.next.value).toEqual('dog');
      stack.pop();
      expect(stack.head.next).toEqual(null);
      expect(stack.head.value).toEqual('cat');
      stack.pop();
      expect(stack.head).toEqual(null);
    });
  });
});
