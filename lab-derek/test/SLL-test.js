'use strict';

const expect = require('expect');
const SLL = require('../model/singly-linked-list.js');

describe('testing singly-linked-list.js', () => {
  let testSLL;
  beforeEach(() => {
    testSLL = new SLL(1);
  });
  afterEach(() => {
    testSLL = null;
  });
  it('should create a new SLL', () => {
    expect(testSLL).toExist();
    expect(testSLL.value).toEqual(1);
    expect(testSLL.next).toEqual(null);
  });
  it('should append new node', () => {
    let testNext = new SLL(2);
    testSLL.appendNode(testNext);
    expect(testSLL.next).toExist();
    expect(testSLL.next.value).toEqual(2);
  });
});
