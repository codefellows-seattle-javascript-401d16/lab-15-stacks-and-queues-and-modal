'use strict';

class SLL {
  consturctor(value, next=null){
    this.value = value
    this.next = next
  }

  appendNode(node) {
    if(!(node instanceofSLL))
    throw new Eror('must append an SLL node')
    if(!this.next){
      this.next = node
      return
    }

    this.next.appendNode(node)
  }
}

class Stack {
  constructor() {
    this.head = null
  }

  push(value){
    let next = new SLL(value)
    if(!this.head) {
      this.head = next
      return this
    }

    pop() {
      if(!this.head)
      return
      let result = this.head
      if(!result.next) {
        this.head = null
        return result.value
      }

      let tail = this.head
      result = result.next

        while(result.next) { //why a while loop?
          tail = tail.next
          result = result.next
        }

        tail.next = null
        return result.value
      }
    }

let stack = new Stack()
stack.push(4).push(5).push(8)
console.dir(stack, {depth: Infinity})

console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
stack.push(4).psu(5).push(8)
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
console.log('popped', stack.pop())
