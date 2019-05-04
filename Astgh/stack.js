var node = function(val) {
	this.prev = null;
	this.value = val;
}

var stack = function() {
	this.last = null;
	this.length = 0;
}

stack.prototype.push = function(val) {
	let newNode = new node(val);
	if (this.length !== 0) {
		newNode.prev = this.last;
		this.last = newNode;
	} else {
		this.last = newNode;
	}
	this.length++;
}

stack.prototype.top = function() {
	return this.last.value;
}

stack.prototype.pop = function() {
	if (this.length === 0) {
		return;
	} 
	let tnode = this.last;
	let val = tnode.value;
	this.last = tnode.prev;
	this.length--;
	return val;
}

stack.prototype.clear = function() {
	let tnode = this.last;
	while (this.length !== 0) {
		tnode = tnode.prev;
		this.pop();
	}
}

stack.prototype.size = function() {
	return this.length;
}

stack.prototype.isEmpty = function() {
	return this.length === 0;
}

stack.prototype.print = function() {
	if (this.length !== 0) {
		let tnode = this.last;
		for (let i = 0; i < this.length; ++i) {
			console.log(tnode.value);
			tnode = tnode.prev;
		}
	}
}
