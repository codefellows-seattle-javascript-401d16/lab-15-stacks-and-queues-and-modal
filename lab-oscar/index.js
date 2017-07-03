'use strict';

class Queue {
  enqueue() {
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }

  dequeue() {
    return Array.prototype.pop.call(this);
  }
}

// class Stack {
//
// }
let newQ = new Queue();

newQ.enqueue({name: 'oscar'});
newQ.enqueue({name: 'jorge'});
newQ.dequeue();
console.log(newQ);

class Stack {
  add() {
    Array.prototype.push.apply(this, arguments);
    return this;
  }
  remove() {
    return Array.prototype.pop.call(this);
  }
}

let newS = new Stack();
newS.add({name: 'Oscar'})
newS.add({name: 'Jorge'})
newS.add({name: 'Luis'})
console.log(newS);
