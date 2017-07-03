'use strict';

module.exports = class Queue{
  enqueue(){
    Array.prototype.push.apply(this, arguments);
    return this;
  }

  dequeue(){
    return Array.prototype.shift.call(this);
  }
};
