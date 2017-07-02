'use strict';

const expect = require('expect');
const Queue = require('../model/queue.js');

describe('Testing QUEUE methods', () => {
  it('TEST ENQUEUE, should add to the queue', ()=> {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.length).toEqual(5);
  });
  it('TEST ENQUEUE, should add to the queue', ()=> {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue[2]).toEqual(3);
  });
  it('TEST DEQUEUE, should remove from the queue', () => {
    let queue = new Queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.dequeue();
    expect(queue[0]).toEqual(5);
    expect(queue[4]).toEqual(null);
  });
});
