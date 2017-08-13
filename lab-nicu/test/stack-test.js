'use strict';

const expect = require('expect');

const Stack = require('../lib/stack.js');

describe('testing stack', () => {
  let tempStack;
  it('should create a stack', () => {
    tempStack = new Stack();
    expect(tempStack).toExist();
  });

  it('should push 3 elements ', ()=>{
    tempStack = new Stack();
    tempStack.push(1);
    tempStack.push(2);
    tempStack.push(3);

    expect(tempStack.length).toEqual(3);
    expect(tempStack['0']).toEqual(1);
  });

  it('should pop the top element ', ()=>{
    tempStack = new Stack();
    tempStack.push(1);
    tempStack.push(2);
    tempStack.push(3);
    expect(tempStack.length).toEqual(3);
    let poppedItem = tempStack.pop();
    expect(poppedItem).toEqual(3);
    expect(tempStack.length).toEqual(2);
  });
});