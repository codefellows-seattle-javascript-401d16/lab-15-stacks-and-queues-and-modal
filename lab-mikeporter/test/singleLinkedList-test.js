'use strict';

const expect = require('expect');
const SLL = require('../singleLinkedList.js');

describe('testing singleLinkedList.js', () => {
  describe('testing append', () => {
    it('should append a node of numbers', () => {
      let firstSLL = new SLL(3);
      let secondSLL = new SLL(4);
      let thirdSLL = new SLL(5);
      let allSLL = firstSLL.prependNode(secondSLL).prependNode(thirdSLL);
      expect(allSLL).toEqual(thirdSLL);
      expect(allSLL.next).toEqual(secondSLL);
      expect(allSLL.next.next).toEqual(firstSLL);
    });
    it('should append a node of strings and numbers', () => {
      let firstSLL = new SLL('apple');
      let secondSLL = new SLL(4);
      let thirdSLL = new SLL('banana');
      let allSLL = firstSLL.prependNode(secondSLL).prependNode(thirdSLL);
      expect(allSLL).toEqual(thirdSLL);
      expect(allSLL.next).toEqual(secondSLL);
      expect(allSLL.next.next).toEqual(firstSLL);
    });
  });
});
