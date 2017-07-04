'use strict';

const expect = require('expect');
const Stack = require('../stack.js');

describe('testing Stack function', () => {
  describe('testing adding a stack item', () => {
    it('should add a item to the Stack', () => {
      let newStack = new Stack();
      newStack.add({name: 'Oscar'});
      expect(newStack[0]).toEqual( {name: 'Oscar'});
    });
    it('should add two items', () => {
      let newStack = new Stack();
      newStack.add({name: 'Oscar'});
      newStack.add({name: 'Jorge'});

      expect(newStack[0]).toEqual({name: 'Oscar'});
    });
    it('should remove last item added', () => {
      let newStack = new Stack();
      newStack.add({name: 'Oscar'});
      newStack.add({name: 'Jorge'});
      newStack.add({name: 'Luis'});

      newStack.remove();

      expect(newStack.length).toEqual(2);
      expect(newStack[1]).toEqual({name: 'Jorge'});
    });
  });
});
