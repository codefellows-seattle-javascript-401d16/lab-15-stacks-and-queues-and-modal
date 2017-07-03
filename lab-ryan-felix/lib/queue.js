const Node = require('./node.js');

class Queue {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  // O(1)
  enqueue(value) {
    this.tail.next = new Node(value);
    this.tail = this.tail.next;
    return this;
  }

  // O(1)
  dequeue() {
    if(!this.head) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = Queue;
