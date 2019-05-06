//var stack = require("./stack");

function queue() {
    var stack1 = new stack();
    var stack2 = new stack();
    this.length = 0;
}

function enqueue(value) {
    this.stack1.push(value);
}

function swap(stack1, stack2) {
    while (stack1.size > 0) {
        var elem = stack1.pop();
        this.stack2.push(elem);
    }
}

function dequeue() {
    if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
    }
    if (stack2.size === 0) {
        swap(stack1, stack2);
        return this.stack2.pop();
    }
    return this.stack2.pop();
}

function topp() {
    if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
    }
    if (stack2.size === 0) {
        swap(stack1, stack2);
        return this.stack2.last();
    }
    return this.stack2.last();
}

function isEmpty() {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
}

function clear() {
    this.stack1.clear();
    this.stack2.clear();
}

function print() {
    let stack3 = new stack();
    swap(stack2, stack3);
    swap(stack1, stack2);
    swap(stack3, stack2);
    stack2.print();
}




	
	
	

