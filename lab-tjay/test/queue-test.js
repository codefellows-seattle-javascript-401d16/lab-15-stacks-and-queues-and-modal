'use strict';

const expect = require('expect');
const Queue = require('../model/queue.js');

describe('Testing Queue', () => {
  
  describe('enqueue', () => {
    it('Should add a node to the queue', () => {
      let queue = new Queue();
      queue.enqueue(3);
      expect(queue).toBeA(Queue);
      expect(queue[0]).toEqual(3);
      expect(queue[1]).toNotExist();
    });
    it('Should add nothing', () => {
      let queue = new Queue();
      queue.enqueue();
      expect(queue.dequeue()).toNotExist();
    });
  });

  describe('dequeue', () => {
    it('Should remove the first node that was pushed in', () => {
      let queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).toEqual(1);
      expect(queue.dequeue()).toEqual(2);
    });
    it('Should return undefined', () => {
      let queue = new Queue();
      expect(queue.dequeue()).toNotExist();
    });
  });
});
