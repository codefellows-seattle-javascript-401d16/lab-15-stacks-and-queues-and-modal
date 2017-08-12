module.exports = class SLL {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
};
