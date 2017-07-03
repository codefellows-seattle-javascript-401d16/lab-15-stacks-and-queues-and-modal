'use strict';

module.exports = class SLL {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  appendNode(node) {
    if(!(node instanceof SLL))
      return null;
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  removeNode(node) {
    if(!(node instanceof SLL))
      return null;
    let prev = this;
    let current = prev.next;
    while(prev) {
      if(current === node) {
        prev.next = current.next;
        return;
      }
      prev = current;
      if(current.next)
        current = current.next;
      else
        return;
    }
  }

  reverseList() {
    let lastNode;
    let list;
    let current = this;
    while(current) {
      lastNode = new SLL(current.value);
      current = current.next;
      lastNode.appendNode(list);
      list = lastNode;
    }
    return list;
  }

  findNthNode(n) {
    let counter = 0;
    let nthNode = null;
    this.forEach(node => {
      if(counter === n)
        nthNode = node;
      counter++;
    });
    return nthNode;
  }

  findMiddleNode() {
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }


  forEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }
};
