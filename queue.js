'use strict';

class Queue {
  enqueue() {
    Array.prototype.unshift.apply(this, arguments);
    return this;
  }
  dequeue() {
    return Array.prototype.pop.call(this);
  }
}

class Prom {
  constructor(callback) {
    this.successCallbacks = new Queue();
    this.failureCallbacks = new Queue();

    function handleResolve(data) {
      let nextCallbacks = this.successCallbacks.dequeue();
      if (!nextCallbacks) return;
      try {
        let result = nextCallbacks(data);
        handleResolve.call(this, result);
      } catch (err) {
        handleReject.call(this, err);
      }
    }

    function handleReject(err) {
      let nextCallback = failureCallbacks.dequeue();
      if (!nextCallback) return;
      try {
        let result = nextCallback(err);
        handleResolve.call(this, result);
      } catch (err) {
        handleReject.call(this, err);
      }
    }

    setTimeout(() => {
      callback(handleResolve.bind(this), handleReject.bind(this));
    }, 0);
  }

  then(callback) {
    this.successCallbacks.enqueue(callback);
    return this;
  }
  catch(callback) {
    this.failureCallbacks.enqueue(callback);
    return this;
  }
}

const Que = (module.exports = {});
