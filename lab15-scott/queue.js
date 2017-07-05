'use strict';

//create queue class with methods on it

module.exports = class Queue {
//big o = O(1)
  enqueue(){
    //create a new prototype on the Array constructor
    //use the unshift method to add arguments to the beginning of the Array
    //use apply that takes in a given this value and and array of arguments for the unshift method
    //it should apply the arguments to the beginning/front of the array prototype
    Array.prototype.unshift.apply(this, arguments);
    //return the combined array
    console.log('this in queue: ', this);
    return this;
  }

  //big o = O(1)
  dequeue(){
    //return the prototype array with and invoke the pop method on it
    //use the call function since you don't need to attaach an array of arguments to it
    //it will take in THIS and remove the last element and pop it off of the Queue
    return Array.prototype.pop.call(this);
  }
};
