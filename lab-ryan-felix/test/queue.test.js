const expect = require('expect');

const Queue = require('../lib/queue.js');

describe('a Queue', () => {

  let testQueue = null;

  it('should construct successfully', () => {
    testQueue = new Queue(1);
    expect(testQueue).toExist();
  });

  it('should enqueue values', () => {
    testQueue.enqueue(2).enqueue(3);
  });

  it('should dequeue values', () => {
    expect(testQueue.dequeue()).toEqual(1);
    expect(testQueue.dequeue()).toEqual(2);
    expect(testQueue.dequeue()).toEqual(3);
    expect(testQueue.dequeue()).toEqual(undefined);
  });

});
