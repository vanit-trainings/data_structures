var node = function(val, pr = null) {
	this.prev = pr;
	this.value = val;
}

var stack = function() {
	this.length = 0;
	this.last = null;
}

stack.prototype.push = function(data) {
	this.last = new node(data, this.last);
	this.length++;
}

stack.prototype.pop = function() {
    if (this.length > 0) {
        let n = this.last;    
        this.last = n.prev;
        n.prev = null;
        this.length--;
        return n.value;
    }
    else {
        return ;
    }
}

stack.prototype.isEmpty = function() {
	return this.length === 0;
}

stack.prototype.print = function() {
    if (this.length > 0) {
	    let n = this.last;
	    while (n !== null) {
            console.log(n.value);
	    	n = n.prev;
        }
    }
}

stack.prototype.clear = function() {
    this.last = null;
    this.length = 0;
}

stack.prototype.top = function() {
    return this.last.value;
}

stack.prototype.size = function() {
    return this.length;
}

let s = new stack();
s.push(12);
s.push(1);
s.push(2);
s.print();
console.log(s.top());
console.log('\n')
console.log(s.pop());
console.log('\n')
s.print();
console.log(s.isEmpty());
s.clear();
s.print();
console.log(s.isEmpty());