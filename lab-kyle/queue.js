'use strict';

class Queue {
  enqueue() {
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  dequeue() {
    Array.prototype.pop.call(this);
    return this;
  }
}

module.exports = Queue;
