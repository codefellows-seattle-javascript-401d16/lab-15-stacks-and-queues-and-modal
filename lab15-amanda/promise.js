'use strict';

require('./queue.js');

class Promise {
  constructor(callback) {
    this.successCallbacks = new Queue();
    this.failureCallbacks = new Queue();

    function handleResolve(data) {
      let nextCallback = this.successCallbacks.dequeue();
      if(!nextCallback) return;
      try {
        let result = nextCallback(data);
        handleResolve.call(this, result);
      } catch (err) {
        handleReject.call(this, err);
      }
    }

    function handleReject (err) {
      let nextCallback = this.failureCallbacks.dequeue();
      if(!nextCallback) return;
      try{
        let result = nextCallback(err);
        handleResolve.call(this, result);
      } catch (err) {
        handleReject.call(this, err);
      }
    }

    setTimeout(() => {
      callback(handleResolve.bind(this), handleReject.bind(this));
    }, 0); //why 0?
  }

  then(callback){
    console.log('register then');
    this.failureCallbacks.enqueue(callback);
    return this;
  }
  catch(callback){
    console.log('register catch');
    this.failureCallbacks.enqueue(callback);
    return this;
  }
}
