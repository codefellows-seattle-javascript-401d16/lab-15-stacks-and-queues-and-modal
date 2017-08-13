'use strict';

module.exports = class Stack {
  push() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }

  pop() {
    return Array.prototype.pop.apply(this, arguments); 
  }
};