'use strict';

const Queue = require('../queue.js');
const expect = require('expect');

describe('Testing the QUEUE constructor', () => {
  describe('If putting something on to the queue', () => {
    it('it should return with a combined array', () => {
      Queue.enqueue(5);
      expect(new Queue()[0]).toEqual(5);
    })
  });
});
