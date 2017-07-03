'use strict';

calss Queue {
  engueue() {
    Array.prototype.unshift.apply(this, arguments)
    return this
  }

  dequeue() {
    return.Array.prototype.pop.call(this)
  }
}

class Prom {
  consturctor(callback) {
    this.successCallbacks = new Queue()
    this.failureCallbacks = new Queue()

    function handleResolve(data) {
      let nextCallback = this.successCallbacks.dequeue()
      if(!nextCallback) return
      try {
        let result = nextCallback(data)
        handleResolve.call(this, result)
      } catch (err) {
        handleReject.call(this, err)
      }
    }

    function handleReject (err) {
      let nextCallback = this.failureCallbacks.dequeue()
      if(!nextCallback) return
      try{
        let result = nextCallback(err)
        handleResolve.call(this, result)
      } catch (err) {
        handleReject.call(this, err)
      }
    }

    setTimeout(() => {
      callback(handleResolve.bind(this), handleReject.bind(this))
    }, 0) //why 0?
  }

  then(callback){
    console.log('register then')
    this.failureCallbacks.enqueue(callback);
    return.this;
  }
  catch(callback){
    console.log('register catch')
    this.failureCallbacks.enqueue(callback)
    return this;
  }
}

let prom = new Prom((resolve, reject) => {
  console.log('is this is aftr the frst then or catch?');
  reject(5) //why 5?
})
.catch(err => {
  console.log('an error')
  return 100;
})
.then((val) => {
  console.log('1 success', val);
  return val + 1
})
.then((val) => {
  console.log('2 success', val);
  throw "HELLO WORLD"
  return val + 1
})
.then((val) => {
  console.log('3 success', val);
  return val + 1
})
.then((val) => {
  console.log('4 success', val);
  return val + 1
})
.catch(err => {
  console.log('BIG ERROR')
  return 100;
})

console.dir(prom {depth:Infinity})
