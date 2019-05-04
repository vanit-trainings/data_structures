class Queue{
  constructor(...items){
    //initialize the items in queue
    this._items = []
    // enqueuing the items passed to the constructor
    this.enqueue(...items)
  }
 
   enqueue(...items){
     //push items into the queue
     items.forEach( item => this._items.push(item) )
     return this._items;
   }
 
   dequeue(count=1){
     //pull out the first item from the queue
     this._items.splice(0,count);
     return this._items;
   }
 
   peek(){
     //peek at the first item from the queue
     return this._items[0]
   }
 
   size(){
     //get the length of queue
     return this._items.length
   }
 
   isEmpty(){
     //find whether the queue is empty or no
     return this._items.length===0
   }
 }
 
 
 let my_queue = new Queue(1,24,4);
 // [1, 24, 4]
 console.log(my_queue.enqueue(23));
 //[1, 24, 4, 23]
 console.log(my_queue.enqueue(1,2,342));
 //[1, 24, 4, 23, 1, 2, 342]
 console.log(my_queue.dequeue());
 //[24, 4, 23, 1, 2, 342]
 console.log(my_queue.dequeue(3));
 //[1, 2, 342]
 console.log(my_queue.isEmpty());
 // false
 console.log(my_queue.size());
 //3