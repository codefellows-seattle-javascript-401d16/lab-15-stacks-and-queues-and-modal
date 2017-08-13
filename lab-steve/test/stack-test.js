'use strict';

const expect = require('expect');
const Stack = require('../stack.js');

describe.only('Testing stack methods...', () => {
  let stack;
  it('should add an item to the stack', () => {
    stack = new Stack(1);
    expect(stack.head.value).toEqual(1);
    expect(stack.head.next).toEqual(null);
  });
  it('should add another item to the stack, then head value should be the new value, and the first should be the next value', () => {
    stack.push(2);
    expect(stack.head.value).toEqual(2);
    expect(stack.head.next.value).toEqual(1);
  });
  it('should pop an item from the top of the stack', () => {
    stack.pop();
    expect(stack.head.value).toEqual(1);
    expect(stack.head.next).toEqual(null);
  });
});
