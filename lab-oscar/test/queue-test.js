'use strict';

const expect = require('expect');
const Queue = require('../Queue.js');

describe('testing Queue and Stack functions', () => {
  describe('testing Queue', () => {
    it('should instantiante a new Queue', () => {
      let newQ = new Queue();
      newQ.enqueue({name: 'oscar'});
      newQ.enqueue({name: 'jorge'});
      expect(newQ[1]).toEqual({name: 'oscar'});
    });
    it('should remove firs instance of object added to Queue', () => {
      let newQueue = new Queue();
      newQueue.enqueue({name: 'oscar'});
      newQueue.enqueue({name: 'jorge'});
      newQueue.enqueue({name: 'luis'});

      newQueue.dequeue();
      expect(newQueue[1]).toEqual({name: 'jorge'});
    });
  });
});
