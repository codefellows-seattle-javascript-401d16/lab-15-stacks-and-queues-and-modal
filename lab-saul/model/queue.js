
'use strict'


class Queue {
  dequeue(){
    return Array.prototype.pop.call(this)
  }
  enqueue(){
    Array.prototype.unshift.apply(this, arguments)
    return this
  }
}

module.exports = Queue;
