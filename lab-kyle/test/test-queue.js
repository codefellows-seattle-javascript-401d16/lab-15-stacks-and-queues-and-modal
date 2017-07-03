'use strict';

const expect = require('expect');
const Queue = require('../queue.js');

describe('testing queue.js', () => {
  describe('testing enqueue', () => {
    it('should contain the values 1, 2, 3', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue[0]).toEqual(3);
      expect(queue[1]).toEqual(2);
      expect(queue[2]).toEqual(1);
    });
  });

  describe('testing dequeue', () => {
    it('should return the values 1, 2, 3', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(3);
    });
  });
});
