'use strict';

module.exports = class Queue {
  // Big O: O(1)
  enqueue() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }

  // Big O: O(1)
  dequeue() {
    return Array.prototype.shift.call(this);
  }
};
