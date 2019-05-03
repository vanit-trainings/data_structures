'use strict';

class QueueUsingTwoStacks {
  constructor() {
    this._s1 = [];
    this._s2 = [];
  }
  
  add(value) {
    this._s1.push(value);
  }
  
  remove() {
    this._shift();
    return this._s2.pop();
  }
  
  peek() {
    this._shift();
    return this._s2[this._s2.length - 1];
  }
  
  _shift() {
    if (this._s2.length > 0) {
      return;
    }
    while (this._s1.length > 0) {
      this._s2.push(this._s1.pop());
    }
  }
}


const q = new QueueUsingTwoStacks();
q.add(10);
q.add(12);
q.add(15);
q.add(17);
// 10
console.log(q.remove());
// 12
console.log(q.remove());