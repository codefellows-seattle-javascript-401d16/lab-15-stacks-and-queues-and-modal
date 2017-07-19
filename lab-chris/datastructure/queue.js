'use strict';

module.exports = class Queue {
  // O(1)
  enqueue(){
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  // O(1)
  dequeue(){
    return Array.prototype.pop.call(this);
  }
};
