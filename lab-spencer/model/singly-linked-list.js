'use strict';

module.exports = class SLL {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  // Big O: O(n)
  appendNode(node) {
    if(!(node instanceof SLL))
      throw new Error('Must be an instance of SLL');
    if(!this.next) {
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  // Big O: O(n)
  removeNode(node) {
    if(!(node instanceof SLL))
      throw new Error('Must be an instance of SLL');
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

  // Big O: O(n)
  reverseList() {
    let latestNode;
    let newList;
    let cur = this;
    while(cur) {
      latestNode = new SLL(cur.value);
      cur = cur.next;
      latestNode.appendNode(newList);
      newList = latestNode;
    }
    return newList;
  }


  forEach(callback) {
    let current = this;
    while(current) {
      callback(current, this);
      current = current.next;
    }
  }

  // Big O: O(n)
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

  // Big O: O(n/2)
  findMiddleNode() {
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
};
