'use strict';

const expect = require('expect');
const Queue = require('../queue.js');

describe('testing queue implementation', () => {
  describe('testing enqueue method', () => {
    it('should append a node to the queue', () => {
      let queue = new Queue();
      queue.enqueue('something');
      expect(queue[0]).toEqual('something');
    });
    it('should not add anything', () => {
      let queue = new Queue();
      queue.enqueue();
      expect(queue[0]).toEqual(undefined);
    });
  });
  describe('testing dequeue method', () => {
    it('should remove the first node that was added to the queue', () => {
      let queue = new Queue();
      queue.enqueue('first node');
      queue.enqueue('second node');
      queue.dequeue();
      expect(queue[0]).toEqual('second node');
    });
    it('should return undefined, as there is nothing in queue', () => {
      let queue = new Queue();
      expect(queue.dequeue()).toEqual(undefined);
    });
  });
});
