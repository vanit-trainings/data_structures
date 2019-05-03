'use strict';

class Stack {
  constructor() {
    this.last = null;
  }
  push(item) {
    const prev = this.last;
    const element = { prev, item };
    this.last = element;
  }
  pop() {
    const element = this.last;
    if (!element) return null;
    this.last = element.prev;
    return element.item;
  }
}

// Usage

const obj1 = { name: 'first' };
const obj2 = { name: 'second' };
const obj3 = { name: 'third' };
const obj4 = { name: 'fourth' };
const obj5 = { name: 'fifth' };

const list = new Stack();
list.push(obj1);
list.push(obj2);
list.push(obj3);
list.push(obj4);
list.push(obj5);

console.log(list.pop());
console.log(list);
