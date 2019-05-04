var stack = function() {
	this.top = null;
	this.size = 0;
}

var node = function(value) {
	this.value = value;
	this.previous = null;
}

stack.prototype.push = function(value) {
	let newNode = new node(value);
	if (this.size !== 0) {
		newNode.previous = this.top;
		this.top = newNode;
	} else {
		newNode.previous = null;
		this.top = newNode;
	}
	this.size += 1;
}

stack.prototype.print = function() {
	if (this.size !== 0) {
		let temp = this.top;
		for (let i = 0; i < this.size; ++i) {
			console.log(temp.value);
			temp = temp.previous;
		}
	}
}

stack.prototype.pop = function() {
	if (this.size === 0) {
		return;
	} else {
		let temp = this.top;
		this.top = this.top.previous;
		this.size -= 1;
		return temp;
	}
}

stack.prototype.top = function() {
	return this.top.value;
}

stack.prototype.isEmpty = function() {
	return this.size === 0;
}

stack.prototype.clear = function() {
	let temp = this.top;
	while (this.size !== 0) {
		temp = temp.previous;
		this.pop();
	}
}
