'use strict';

class Stack {
  push() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }

  pop() {
    return Array.prototype.pop.call(this);
  }
}

module.exports = Stack;
