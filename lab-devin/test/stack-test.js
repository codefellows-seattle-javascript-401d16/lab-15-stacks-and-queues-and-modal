'use strict';

const expect = require('expect');
const Stack = require('../stack.js');

describe('Stack testing', () => {

  describe('push test', () => {
    it('should add new val to stack', () => {
      let stack = new Stack;

      stack.push('go');
      stack.push('set');
      stack.push('ready');

      expect(stack[0]).toEqual('go');
      expect(stack[1]).toEqual('set');
      expect(stack[2]).toEqual('ready');

    });
  });

  describe('pop test', () => {
    it('should remove last added val from stack', () => {
      let stack = new Stack;

      stack.push('melting');
      stack.push('am');
      stack.push('I');

      expect(stack.pop()).toEqual('I');
      expect(stack.pop()).toEqual('am');
      expect(stack.pop()).toEqual('melting');
    });
  });
});
