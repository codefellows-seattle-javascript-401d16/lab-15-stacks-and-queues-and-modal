'use strict';

module.exports = class Queue {

  enqueue(){
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  dequeue(){
    return Array.prototype.pop.call(this);
  }
};

// let queue = new Queue();

// queue.enqueue(4).enqueue(5).enqueue(6);

// console.log('dequeued', queue.dequeue());
// console.log('dequeued', queue.dequeue());
// console.log('dequeued', queue.dequeue());
// console.log('dequeued', queue.dequeue());
// console.log('dequeued', queue.dequeue());
