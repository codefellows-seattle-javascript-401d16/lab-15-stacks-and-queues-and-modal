'use strict';

const expect = require('expect');
const Queue = require('../model/queue.js');

describe('testing queue methods', () => {
  let queue = new Queue();
  describe('testing enqueue', () => {
    it('should add nodes to the queue', () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue[2]).toEqual(1);
      console.log(queue);
    });
  });
  describe('testing dequeue', () => {
    it('should remove nodes from the queue ', () => {
      queue.dequeue();
      queue.dequeue();
      expect(queue[0]).toEqual(3);
      console.log(queue);
    });
  });
});
