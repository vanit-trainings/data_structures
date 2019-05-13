var node = function (val)  {
    this.value = val; 
    this.prev = null;
}

var stack = function () {
 this.last = null; 
 this.length = 0; 
}

stack.prototype.isEmpty = function () {
 return this.length === 0;
}

stack.prototype.push = function (val) {
 let newNode = new node (val);
 if (!this.isEmpty()) {
     newNode.prev = this.last;
    this.last = newNode; 
 }
 else {
     this.last = newNode;
 }
 this.length++;
}
stack.prototype.top = function () {
  return this.last.value;
}

stack.prototype.pop = function () {
 if (this.isEmpty()) {
    return; 
 }
 else {
     let tempNode  = this.last; 
     let val = tempNode.value; 
     this.last = tempNode.prev;
     this.length--;
     return val; 
 }
}
stack.prototype.clear = function () {
    if(this.isEmpty()) {
        return;
    } else {  
         this.length = 0; 
         this.last = null;
        }
}

stack.prototype.size = function ()  {
  return this.length; 
}

stack.prototype.print = function ()  {
  if(this.isEmpty()) {
      return;
  }
  else {
      let tempNode = this.last; 
      for (let i = 0; i < this.length; i++) {
          console.log (tempNode.value);
          tempNode = tempNode.prev;
      }
  }
}

var queue = function ()  {
   this.stackOne = new stack();
   this.stackTwo = new stack();
   this.length = 0; 
}

queue.prototype.isEmpty = function()  {
    return this.length === 0; 
}

queue.prototype.size = function ()  {
    return this.length; 
}

queue.prototype.push = function (val) {
    this.stackOne.push(val);
    this.length++;
}

queue.prototype.clear = function () {
    this.stackOne.clear(); 
    this.stackTwo.clear(); 
}

queue.prototype.pop = function () {
    if (this.stackOne.isEmpty() && this.stackTwo.isEmpty()) {
        return; 
    }
    else if (!this.stackTwo.isEmpty())
    {
        this.length--;
        return this.stackTwo.pop();
    }
    else if (this.stackTwo.isEmpty()) {
        while (!this.stackOne.isEmpty()) {
        let node = this.stackOne.pop();
        this.stackTwo.push(node);
    }
    this.length--; 
    return this.stackTwo.pop();
    }
}
    queue.prototype.print = function () {
     this.stackThree = new stack (); 
     let tempNode;
     while (!this.stackTwo.isEmpty())
     {
         tempNode = this.stackTwo.pop();
         console.log (tempNode);
         this.stackThree.push (tempNode);
     }
     while (!this.stackOne.isEmpty()) {
         this.stackTwo.push (this.stackOne.pop());
     }
     while (!this.stackTwo.isEmpty())
     {
         tempNode = this.stackTwo.pop();
         console.log (tempNode);
         this.stackThree.push (tempNode);
     }
     while (!this.stackThree.isEmpty()) {
        this.stackOne.push (this.stackThree.pop());
    }
    }
    let test = new queue ();
    test.push (14);
    test.push (5);
    test.print (); 
    console.log(test.isEmpty()); 
    test.pop ();
    test.push (7909);
    test.print ();
    console.log(test.size()); 
    test.clear (); 
    test.print (); 
