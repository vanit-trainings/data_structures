'use strict';

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  put(item) {
    const last = this.last;
    const element = { next: null, item };
    if (last) {
      last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
  }
  pick() {
    const element = this.first;
    if (!element) return null;
    if (this.last === element) {
      this.first = null;
      this.last = null;
    } else {
      this.first = element.next;
    }
    return element.item;
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };
const obj4 = { name: 'fourth' };
const obj5 = { name: 'fifth' };

const queue = new Queue();
queue.put(obj1);
queue.put(obj2);
queue.put(obj3);
queue.put(obj4);
queue.put(obj5);

console.log(queue.pick());
console.log(queue.pick());
console.log(queue.pick());
console.log(queue);
