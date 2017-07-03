'use strict';

const expect = require('expect');
const Queue = require('../queue.js');

describe('testing Queue.js', () => {
  describe('testing enqueue', () => {
    it('should add a single element to the queue', () => {
      let miniQueue = new Queue();
      let bigQueue = miniQueue.enqueue(3);
      expect(bigQueue.head.value).toEqual(3);
    });
    it('should add many elements to the queue', () => {
      let miniQueue = new Queue();
      let bigQueue = miniQueue.enqueue(3).enqueue(4).enqueue(5).enqueue(6);
      expect(bigQueue.head.value).toEqual(6);
      expect(bigQueue.head.next.value).toEqual(5);
      expect(bigQueue.head.next.next.value).toEqual(4);
    });
  });
  describe('testing dequeue', () => {
    it('should remove a SINGLE element from ONE in the queue', () => {
      let miniQueue = new Queue();
      let bigQueue = miniQueue.enqueue(3);
      expect(bigQueue.head.value).toEqual(3);
      let onlyElement = bigQueue.dequeue();
      expect(onlyElement.value).toEqual(3);
      expect(bigQueue).toExist();
      expect(bigQueue.head).toNotExist();
    });
    it('should remove a SINGLE element from TWO in the queue', () => {
      let miniQueue = new Queue();
      let bigQueue = miniQueue.enqueue(3).enqueue(4);
      expect(bigQueue.head.value).toEqual(4);
      let removedElement = bigQueue.dequeue();
      expect(removedElement.value).toEqual(3);
      expect(bigQueue).toExist();
      expect(bigQueue.head.value).toEqual(4);
    });
    it('should remove a SINGLE element MANY times from MANY in the queue', () => {
      let miniQueue = new Queue();
      let bigQueue = miniQueue.enqueue(3).enqueue(4).enqueue(5).enqueue(6);
      expect(bigQueue.head.value).toEqual(6);
      let removedElement = bigQueue.dequeue();
      expect(removedElement.value).toEqual(3);
      expect(bigQueue).toExist();
      expect(bigQueue.head.value).toEqual(6);
      removedElement = bigQueue.dequeue();
      expect(removedElement.value).toEqual(4);
      expect(bigQueue).toExist();
      expect(bigQueue.head.value).toEqual(6);
      removedElement = bigQueue.dequeue();
      expect(removedElement.value).toEqual(5);
      expect(bigQueue).toExist();
      expect(bigQueue.head.value).toEqual(6);
      removedElement = bigQueue.dequeue();
      expect(removedElement.value).toEqual(6);
      expect(bigQueue).toExist();
      expect(bigQueue.head).toNotExist();
    });
  });
});
