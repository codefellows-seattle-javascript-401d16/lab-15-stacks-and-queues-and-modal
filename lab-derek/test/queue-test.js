'use strict';

const expect = require('expect');
const Queue = require('../model/queue.js');

describe('testing queue.js', () => {
  let testQueue;
  beforeEach(() => {
    testQueue = new Queue();
  });
  afterEach(() => {
    testQueue = null;
  });
  it('should return a new Queue', () => {
    expect(testQueue).toExist();
    expect(testQueue.head).toEqual(null);
  });
  it('should enqueue a new value', () => {
    testQueue.enqueue(1);
    expect(testQueue.head.value).toEqual(1);
  });
  it('should return a queue with two nodes', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    expect(testQueue.head.value).toEqual(1);
    expect(testQueue.head.next.value).toEqual(2);
  });
  it('should return the former head node, the "first in"', () => {
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);
    let result = testQueue.dequeue();
    expect(result).toEqual(1);
    expect(testQueue.head.value).toEqual(2);
    expect(testQueue.head.next.value).toEqual(3);
  });
});
