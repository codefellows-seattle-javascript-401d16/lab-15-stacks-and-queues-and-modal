'use strict';

const expect = require('expect');
const SLL = require('./SLL.js');
const Stack = require('./stack.js');
const Queue = require('./queue.js');

describe('testing stack-queue.js', () => {
  describe('testing Stack', () => {
    it('should return a new stack', () => {
      let testStack = new SLL(1);
      expect(testStack).toExist;
      expect(testStack.head).toEqual(null);
    });
  });
});
