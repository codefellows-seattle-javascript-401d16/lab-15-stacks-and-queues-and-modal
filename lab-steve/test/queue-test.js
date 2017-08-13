'use strict';

const expect  = require('expect');
const Queue = require('../queue.js');

describe('Testing queue methods...', () => {
  let queue;
  it('should add an item to the queue, then head and tail values should be equal', () => {
    queue = new Queue(1);
    expect(queue.head.value).toEqual(queue.tail.value).toEqual(1);
  });
  it('should enqueue an item', () => {
    queue.enqueue(2);
    expect(queue.head.value).toEqual(1);
    expect(queue.head.next.value).toEqual(2);
    expect(queue.tail.value).toEqual(2);
  });
  it('should dequeue an item', () => {
    queue.dequeue();
    expect(queue.head.value).toEqual(2);
    expect(queue.head.next).toEqual(null);
    expect(queue.tail.value).toEqual(2);
  });
});
