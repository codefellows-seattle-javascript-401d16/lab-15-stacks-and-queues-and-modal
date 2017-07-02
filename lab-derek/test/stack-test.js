'use strict';

const expect = require('expect');
const Stack = require('../model/stack.js');


describe('testing stack.js', () => {
  let testStack;
  beforeEach(() => {
    testStack = new Stack();
  });
  afterEach(() => {
    testStack = null;
  });
  it('should return a new stack', () => {
    expect(testStack).toExist;
    expect(testStack.head).toEqual(null);
  });
  it('should return stack with pushed node', () => {
    testStack.push(1);
    expect(testStack.head).toExist();
    expect(testStack.head.value).toEqual(1);
  });
  it('should return stack with two pushed nodes', () => {
    testStack.push(1);
    testStack.push(2);
    expect(testStack).toExist();
    expect(testStack.head.value).toEqual(1);
    expect(testStack.head.next.value).toEqual(2);
  });
  it('should return popped value', () => {
    testStack.push(1);
    testStack.push(2);
    let result = testStack.pop();
    expect(result).toEqual(2);
  });
});
