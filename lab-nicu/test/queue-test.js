'use strict';

const expect = require('expect');

const Queue = require('../lib/queue');


describe('testing queue', () => {
  let tempQueue;
  it('should create a queue', () => {
    tempQueue = new Queue();
    expect(tempQueue).toExist();
  });

  it('should enqueue 3 items', () => {
    tempQueue = new Queue();
    tempQueue.enqueue('first');
    tempQueue.enqueue('second');
    tempQueue.enqueue('third');
    expect(tempQueue.length).toEqual(3);
    expect(tempQueue['2']).toEqual('first');
  });

  it('should dequeue the first element that got added in the queue', () => {
    tempQueue = new Queue();
    tempQueue.enqueue('first');
    tempQueue.enqueue('second');
    tempQueue.enqueue('third');
    expect(tempQueue.dequeue()).toEqual('first');
    expect(tempQueue.length).toEqual(2);
  });
});