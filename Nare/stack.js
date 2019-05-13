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
      this.length = 0; 
      this.last = null; 
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
  let test = new stack ();
  test.push (10);
  test.push (25);
  test.print (); 
  console.log(test.isEmpty()); 
  test.pop ();
  console.log(test.top());
  test.push (7909);
  test.print ();
  console.log(test.size()); 
  test.clear (); 
  test.print (); 