'use strict';

const Queue = require('../queue.js');
const expect = require('expect');

describe('Testing the QUEUE constructor', () => {
  describe('If putting something on to the queue', () => {
    it('it should return with a 5 at the beginning of the array', () => {
      let newQueue = new Queue();
      newQueue.enqueue(5);
      expect(newQueue[0]).toEqual(5);
    })
  });
});
