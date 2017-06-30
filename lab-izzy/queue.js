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

class Promise {
  constructor(callback) {
    this.successCallbacks = new Queue();
    this.failureCallbacks = new Queue();

    function handleResolve(data) {
      let nextCallback = this.successCallbacks.dequeue();
      if(!nextCallback)
        return;
      try {
        let result = nextCallback(data);
        handleResolve.call(this, result);
      } catch (err) {
        handleReject.call(this, err);
      }
    }

    function handleReject(err) {
      let nextCallback = this.failureCallbacks.dequeue();
      if(!nextCallback)
        return;
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
    console.log('register THEN()');
    this.successCallbacks.enqueue(callback);
    return this;
  }

  catch(callback) {
    console.log('register CATCH()');
    this.failureCallbacks.enqueue(callback);
    return this;
  }
}

let promise = new Promise((resolve, reject) => {
  console.log('is this after the first then or catch???');
  reject(5);
})
.catch(err => {
  console.log('YAAAAAAS ERROR', err);
  return 100;
})
.then((val) => {
  console.log('FIRST SUCCESS YAAAAS', val);
  return val + 1;
})
.then((val) => {
  console.log('SECOND SUCCESS YAAAAAAS', val);
  throw 'HELLO WORLD';
  return val + 1;
})
.then((val) => {
  console.log('THIRD SUCCESS YAAAAAAAAAAAAS', val);
  return val + 1;
})
.then((val) => {
  console.log('FOURTH SUCCESS YAAAAAAAAAS KWEEEEN', val);
  return val + 1;
})
.catch(err => {
  console.log('NOT TODAY SATAN, ERROR!!!!', err);
});

console.dir(promise, {depth: Infinity});
