'use strict';

function Queue () {
  this.pushS = new Stack();
  this.popS = new Stack();
}

Queue.prototype.enqueue = function (val) {
  this.pushS.push(val);
};

Queue.prototype.dequeue = function () {
  var poping = this.popS;
  var pushing = this.pushS;

  if (poping.top) {
    var deq = poping.pop();
    console.log('Dequeing ' + deq + ' from stack.');
    return deq;
  }

  while (pushing.top) {
    poping.push(pushing.pop());
  }
};


var q1 = new Queue();
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.dequeue();
q1.dequeue();
q1.dequeue();
console.log('Current stat of the Queue is stored saved in the popS.');
console.log(q1);