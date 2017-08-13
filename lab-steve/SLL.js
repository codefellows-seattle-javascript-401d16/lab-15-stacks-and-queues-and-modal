module.exports = class SLL {  // O(1)
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
};
