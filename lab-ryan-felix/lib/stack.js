const Node = require('./node.js');

class Stack {
  constructor(value) {
    this.head = new Node(value);
  }

  // O(1)
  push(value) {
    this.head = new Node(value, this.head);
    return this;
  }

  // O(1)
  pop() {
    if(!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = Stack;
