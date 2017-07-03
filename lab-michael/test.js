'use strict';


const expect = require('expect');

const Queue = require('./index.js');

const Stack = require('./stack.js');


const SLL = require('./sll.js');

describe('testing enqueue, dequeue, pop, peek, and bracket challenge', () => {
  describe('testing the enqueue method...', () => {
    it('should create a node equal to 4', () => {

      let queue = new Queue();
      // queue.enqueue(5);
      // queue.enqueue(6);
      // console.log(queue.value);
      expect(queue).toExist();

      queue.enqueue(4);
      expect(queue[0]).toEqual(4);
      queue.enqueue(6);
      expect(queue[0]).toEqual(6);
      // console.log(queue);
    });

  });

  describe('testing the dequeue method...', () => {
    it('should be removing the nodes...', () => {
      let queue = new Queue();

      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      console.log(queue);
      queue.dequeue();
      console.log(queue);
      expect(queue[2]).toNotExist();
      expect(queue.length).toEqual(2);
      expect(queue[1]).toEqual(5);
    });
  });


  describe('testing the push() method...', () => {
    it('should be adding nodes...', () => {
      let stack = new Stack();

      stack.push(3);
      stack.push(4);
      stack.push(5);

      expect(stack.head.value).toEqual(3);
      expect(stack.head.next.value).toEqual(4);
      expect(stack.head.next.next.value).toEqual(5);

    });
  });

  describe('testing the pop() method...', () => {
    it('should be removing the nodes...', () => {
      let stack = new Stack();

      stack.push(1);
      stack.push(2);
      stack.push(3);

      console.log(stack);
      let popOne = stack.pop();
      let popTwo = stack.pop();
      let popThree = stack.pop();


      expect(popOne).toEqual(3);
      expect(popTwo).toEqual(2);
      expect(popThree).toEqual(1);

    });
  });

});
