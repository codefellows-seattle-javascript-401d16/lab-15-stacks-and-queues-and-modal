'use strict';

const Queue = require('../queue.js');
const expect = require('expect');

describe('Testing the QUEUE constructor', () => {
  describe('If putting something on to the queue', () => {
    it('it should return with a 5 at the beginning of the array', () => {
      let classQueue = new Queue();
      classQueue.enqueue(5);
      expect(classQueue [0]).toEqual(5);
    });
  });
  describe('If removing something from the queue', () => {
    it('it should return with a 3', () => {
      let classQueue = new Queue();
      classQueue.enqueue(5);
      classQueue.enqueue(3);
      expect(classQueue.length).toEqual(2);
      expect(classQueue[0]).toEqual(3);
      expect(classQueue[1]).toEqual(5);
      let remove = classQueue.dequeue();
      expect(remove).toEqual(5);
    });
  });
});
