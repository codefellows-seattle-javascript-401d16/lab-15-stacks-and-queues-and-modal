'use strict';

class SinglyLinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  appendNode(node) {
    if (!(node instanceof SinglyLinkedList))
      throw new Error('must append a node');
    if (!this.next) return (this.next = node);
    this.next.appendNode(node);
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    let next = new SinglyLinkedList(value);
    if (!this.head) this.head = next;
    this.head.appendNode(next);
    return this;
  }

  pop() {
    if (!this.head) return;
    let result = this.head;
    if (!result.next) {
      this.head = null;
      return result.value;
    }
    tail = head;
    result = result.next;

    while (result.next) {
      tail = tail.next;
      result = result.next;
      tail.next = null;
      return result.value;
    }
  }
}

const SLL = (module.exports = {});
