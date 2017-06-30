'use strict';

class LinkedList {
  constructor(value, next=null){
    this.value = value
    this.next=next
  }

  appendNode(node){
    if(!(node instanceof LinkedList))
      throw new Error('Do not forget the LinkedList')
    if(!this.next){
      this.next = node;
      return
    }

    this.next.appendNode(node)
  }
}


class Stack {
  constructor(){
    this.head = null;
  }

  push(value){
    let next = new LinkedList(value)
    if(!this.head){
      this.head = next;
      return this;
    }

    this.head.appendNode(next)
    return this
  }

  pop(){
    if(!this.head)
      return
    let result = this.head;
    if(!result.next){
      this.head = null;
      return result.value
    }

    let tail = this.head
    result = result.next

    while(result.next){
      tail = tail.next;
      result = result.next
    }LinkedList

    tail.next = null
    return result.value
  }
}

let stack = new Stack()
function testPushPop(first, second) {
  stack.push(first).push(second)
  try {
    console.assert(stack.pop() === second)
    console.log('Success');
  } catch (e){
      console.error('failed', e);
  }
}

console.log(testPushPop(4, 6));
