'use strict';

module.export = class Queue {
  enqueue() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }

  dequeue() {
    return Array.prototype.shift.call(this);
  }
};
