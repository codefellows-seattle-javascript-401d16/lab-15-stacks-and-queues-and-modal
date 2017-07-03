'use strict';

class Queue {
  enqueue() {
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  dequeue() {
    return Array.prototype.pop.call(this);
  }
}

module.exports = Queue;
