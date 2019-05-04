class Queue {
  constructor() {
	this.storage = {};
    this.head = null;
    this.tail = null;
  }
  
  enqueue(element) {
	  this.storage[this.tail] = element;
	  this.tail++;
  }
  
  dequeue() {
	  let removed = this.storage[this.head];
	  delete this.storage[this.head];
	  this.head++;
	  return removed;
  }
  
  const queue = new Queue();
  
  queue.enqueue('dog');
  queue.enqueue('cat');
  queue.enqueue('bear');
  
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();