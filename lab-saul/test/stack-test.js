'use strict';

const expect = require('expect');
const Stack = require('../model/stack.js');



describe('Testing Stack Method', () => {
  it('PUSH TEST, should return a length of 3', () =>{
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.head.next.next.value).toEqual(3);
  });
  it('POP TEST should return inputs on opposite order, FILO', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
  });
  it('POP TEST, should return the last value after pops, FILO', () => {
    let stack = new Stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.head.next.value).toEqual(2);
  });
});
