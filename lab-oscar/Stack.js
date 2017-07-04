'use strict';

class Stack {
  add() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }
  remove() {
    return Array.prototype.pop.call(this);
  }
}

module.exports = Stack;
