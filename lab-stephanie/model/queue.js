'use strict';
//all funtions are O(n)
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
