'use strict';

const expect = require('expect');
const Queue = require('../queue.js');

describe ('testing Queue', () => {

  describe('enqueue testing', () => {
    it('should queue up a,b,c', () => {
      let queue = new Queue;
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue[0]).toEqual('c');
      expect(queue[1]).toEqual('b');
      expect(queue[2]).toEqual('a');
    });
  });

  describe('dequeue testing', () => {
    it('should dequeue starting with val first queued', () => {
      let queue = new Queue;
      queue.enqueue('a');
      queue.enqueue('b');
      queue.enqueue('c');

      expect(queue.dequeue()).toEqual('a');
      expect(queue.dequeue()).toEqual('b');
      expect(queue.dequeue()).toEqual('c');
    });
  });
});
