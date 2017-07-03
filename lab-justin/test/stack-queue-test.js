'use strict';

const Queue = require('../queue.js');
const Stack = require('../stack.js');
const expect = require('expect');

describe('Testing Queue methods', () => {

  describe('Testing enqueue', () => {
    it('should return a Queue', () => {
      let thisQueue = new Queue();
      expect(typeof thisQueue).toBe(typeof {});
    });
    it('should return a Queue with an an enqueued object', () => {
      let thisQueue = new Queue();
      let helloQueued = thisQueue.enqueue({hello: 'World'});
      expect(JSON.stringify(helloQueued))
      .toEqual(JSON.stringify({'0':{'hello':'World'},'length':1}));
    });
  });

  describe('Testing dequeue', () => {
    it('should dequeue the last item in the queue', () => {
      let thisQueue = new Queue();
      let helloEnqueued = thisQueue.enqueue({hello: 'World'});
      let helloDequeued = helloEnqueued.dequeue();
      expect(helloDequeued).toEqual({hello: 'World'});
    });
  });

  describe('Testing Stack push method', () => {
    it('should push item onto top of stack', () => {
      let thisStack = new Stack();
      let helloPushed = thisStack.push({hello: 'World'});
      expect(JSON.stringify(helloPushed))
      .toEqual(JSON.stringify({ 0: { hello: 'World' }, length: 1 }));
    });
  });
  describe('Testing Stack pop method', () => {
    it('should pop last item off of stack', () => {
      let thisStack = new Stack();
      thisStack.push({hello: 'Universe'});
      let helloPushed = thisStack.push({hello: 'World'});
      let helloPopped = helloPushed.pop();
      expect(JSON.stringify(helloPopped))
      .toEqual(JSON.stringify({ hello: 'World' }));
      expect(JSON.stringify(thisStack)).toEqual(JSON.stringify({ 0: { hello: 'Universe' }, length:1 }));
    });
  });
});
