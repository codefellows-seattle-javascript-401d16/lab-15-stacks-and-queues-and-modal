'use strict';
//all funtions are O(n)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  appendNode(node) {
    if (!(node instanceof LinkedList)) return null;
    if (!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  removeNode(value) {
    let node = this;
    let pre = null;
    while (node) {
      if (node.value === value) {
        pre.next = node.next;
        return;
      } else {
        pre = node;
        node = node.next;
      }
    }
  }

  ForEach(callback) {
    let current = this;
    while (current) {
      callback(current, this);
      current = current.next;
    }
  }

  reverseNodes() {
    let node = this;
    let pre = null;
    while (node) {
      let save = node.next;
      node.next = pre;
      pre = node;
      node = save;
    }
    return pre;
  }

  findMiddle() {
    let slow, fast;
    slow = fast = this;
    while (fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

module.exports = LinkedList;
