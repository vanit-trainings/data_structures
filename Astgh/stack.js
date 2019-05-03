const list = require('../Astgh/list.js');

var node = function(val) {
    this.prev = null;
    this.value = val;
}

var stack = function(val) {
    this.last = null;
    this.length = 0;
}

stack.prototype.push = function(val) {
    let newNode = new node(val);
    if (this.length !== 0) {
        newNode.prev = this.last;
        this.last = newNode;
    } else {
        newNode.prev = null;
        this.last = newNode;
    }
    this.length++;
}

stack.prototype.top = function(anyStack) {
    if (this.length === 0) {
        return;
    } else {
        return this.last.value;
    }   
}

stack.prototype.pop = function(anyStack) {
    if (this.length === 0) {
        return;
    } else {
        let val = this.last.value;
        this.last = this.last.prev;
        this.length--;
        return val;
    }
}

stack.prototype.clear = function(anyStack) {
    if (this.length !== 0) {
        let tnode = this.last;
        while (this.length !== 0) {
            this.last = this.last.prev;
            this.prev = null;
            this.value = null;
            tnode = tnode.prev;
            this.length--;
        }
    }
}

stack.prototype.isEmpty = function(anyStack) {
    if (this.length === 0) {
        return true;
    } else {
        return false;
    }   
}

stack.prototype.print = function(anyStack) {
    if (this.length !== 0) {
        let tnode = this.last;
        for (let i = 0; i < this.length; ++i) {
            console.log(tnode.value);
            tnode = tnode.prev;
        }
    }
}