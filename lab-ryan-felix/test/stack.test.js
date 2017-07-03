const expect = require('expect');
const Stack = require('../lib/stack.js');

describe('a Stack', () => {

  let testStack = null;

  it('should construct successfully', () => {
    testStack = new Stack(1);
    expect(testStack).toExist();
  });

  it('should push values', () => {
    testStack.push(2).push(3);
  });

  it('should pop values', () => {
    expect(testStack.pop()).toEqual(3);
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);
    expect(testStack.pop()).toEqual(undefined);
  })

})
