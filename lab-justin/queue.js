'use strict';

class Queue {
  enqueue(){
    // adds to front of array
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  dequeue(){
    // removes from end of array
    return Array.prototype.pop.call(this);
  }
}

module.exports = Queue;
