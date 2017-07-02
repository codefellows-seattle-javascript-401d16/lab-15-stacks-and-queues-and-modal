
'use strict';


class Queue {
  // this is a BIG O of n
  dequeue(){
    return Array.prototype.pop.call(this);
  }
  // this is a BIG O of n
  enqueue(){
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }
}

module.exports = Queue;
