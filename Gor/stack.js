class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.isEmpty() ? `Underflow` : this.items.pop()
    }
    get length() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printStack() {
        let print = "";
        for(item of this.items) {
            print += `${item} `;
        }
        return print;
    }
    clear() {
        while(!this.isEmpty()) {
            this.items.pop();
        }
    }
}

const stack = new Stack();

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.isEmpty() ? `Underflow` : this.items.shift()
    }
    front() {
        return this.isEmpty() ? `Queue is empty` : this.items[0]
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        let print = "";
        for(item of this.items) {
            print += `${item} `;
        }
        return print;
    }
}

const queue = new Queue();

class QueueUsingStack {
    constructor() {
        this.items = new Stack();
        this.items1 = new Stack();
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.items1.isEmpty()) {
            if (this.items.isEmpty()) { return `Queue is empty`; }
            while (!this.items.isEmpty()) {
                var p = this.items.pop();
                this.items1.push(p);
            }
        }
        return this.items1.pop();
    }
    isEmpty() {
        return (this.items.isEmpty() && this.items1.isEmpty());
    }
    front() {
        if (this.items1.items.length !== 0) {
            return this.items1.items[this.items1.items.length - 1];
        }
        if (this.items.items.length !== 0) {
            return this.items.items[0];
        }            
        return `Queue is empty`;
    }
}

const queue1 = new QueueUsingStack();