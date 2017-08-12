'use strict';

const expect = require('expect');
const Constructor = require('../stack.js');
let StackInstance = new Constructor.Stack();

describe('Testing Stack constructor', () => {
  describe('If appending node is successful', () => {
    it('it should return with a value of 7 and next = null', () => {
      let push1 = StackInstance.push(7);
      expect(push1.head.value).toEqual(7);
      expect(push1.head.next).toEqual(null);
    });
  });
  describe('If removing node is successful', () => {
    it('it should pop a node off', () => {
      StackInstance.push(8);
      StackInstance.push(9);
      let pop = StackInstance.pop();
      expect(pop).toEqual(8);
    });
  });
});
