'use strict';

class Stack {
  constructor(...items){
    this._items = []

    if(items.length>0)
      items.forEach(item => this._items.push(item) )
  }

  push(...items){
    //push item to the stack
     items.forEach(item => this._items.push(item) )
     return this._items;

  }

  pop(count=0){
    //pull out the topmost item (last item) from stack
    if(count===0)
      return this._items.pop()
     else
       return this._items.splice( -count, count )
  }

  peek(){
    // see what the last item in stack
    return this._items[this._items.length-1]
  }

  size(){
    //no. of items in stack
    return this._items.length
  }

  isEmpty(){
    // return whether the stack is empty or not
    return this._items.length==0
  }

  toArray(){
    return this._items;
  }
}

let my_stack = new Stack(1,24,4);
// [1, 24, 4]
console.log(my_stack.push(23))
//[1, 24, 4, 23]
my_stack.push(1,2,342);
//[1, 24, 4, 23, 1, 2, 342]
console.log(my_stack.pop());
//[1, 24, 4, 23, 1, 2]
console.log(my_stack.pop(3));
//[1, 24, 4]
console.log(my_stack.isEmpty());
// false
console.log(my_stack.size());
//3
