'use strict';

module.exports = class Queue {
  // big O of 1
  enqueue() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }
// big O of 1
  dequeue() {
    return Array.prototype.shift.call(this);
  }
};
