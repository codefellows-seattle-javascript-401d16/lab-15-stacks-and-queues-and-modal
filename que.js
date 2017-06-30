'use strict';

class Queue {
  enqueue() {
    Array.prototype.push.apply(this, arguments)
    return this
  }

  dequeue() {
    return Array.prototype.shift.call(this)
  }
}

let queue = new Queue();

function testQueue(first, second, third) {
  queue.enqueue(first).enqueue(second).enqueue(third);
  try {
    console.assert(queue.dequeue() === first)
    console.log('success');
  } catch(e) {
    console.log('failed', e);
  }
}

testQueue(2, 4, 6)
