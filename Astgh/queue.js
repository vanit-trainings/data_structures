var node = function (val) {
	this.prev = null;
	this.value = val;
}

var stack = function () {
	this.last = null;
	this.length = 0;
}

stack.prototype.push = function (val) {
	let newNode = new node(val);
	if (this.length !== 0) {
		newNode.prev = this.last;
		this.last = newNode;
	} else {
		this.last = newNode;
	}
	this.length++;
}

stack.prototype.top = function () {
	if (!isEmpty()) {
		return this.last.value;
	}
}

stack.prototype.pop = function () {
	if (this.length === 0) {
		return;
	}
	let tnode = this.last;
	let val = tnode.value;
	this.last = tnode.prev;
	this.length--;
	return val;
}

stack.prototype.clear = function () {
	let tnode = this.last;
	while (this.length !== 0) {
		tnode = tnode.prev;
		this.pop();
	}
}

stack.prototype.size = function () {
	return this.length;
}

stack.prototype.isEmpty = function () {
	return this.length === 0;
}

stack.prototype.print = function () {
	if (this.length !== 0) {
		let tnode = this.last;
		for (let i = 0; i < this.length; ++i) {
			console.log(tnode.value);
			tnode = tnode.prev;
		}
	}
}

var queue = function () {
	this.container1 = new stack();
	this.container2 = new stack();
	this.length = 0;
}

queue.prototype.push = function (val) {
	this.container1.push(val);
	this.length++;
}

queue.prototype.pop = function () {
	if (this.container1.length === 0 && this.container2.length === 0) {
		return null;
	}
	if (this.container2.length !== 0) {
		this.length--;
		return this.container2.pop();
	}
	if (this.container1.length !== 0) {
		while (this.container1.length > 0) {
			let node = this.container1.pop();
			this.container2.push(node);
		}
		this.length--;
		return this.container2.pop();
	}
}

queue.prototype.clear = function () {
	while (this.container2.length > 0) {
		this.container2.pop();
		this.length--;
	}
	while (this.container1.length > 0) {
		this.container1.pop();
		this.length--;
	}
}

queue.prototype.size = function () {
	return this.length;
}

queue.prototype.isEmpty = function () {
	return this.length === 0;
}

queue.prototype.print = function () {
	let helperStack = new stack();
	while (this.container2.length > 0) {
		let node = this.container2.pop();
		helperStack.push(node);
		console.log(node);
	}
	while (this.container1.length > 0) {
		let node = this.container1.pop();
		this.container2.push(node);
	}
	while (this.container2.length > 0) {
		let node = this.container2.pop();
		helperStack.push(node);
		console.log(node);
	}
	while (helperStack.length > 0) {
		let tnode = helperStack.pop();
		this.container2.push(tnode);
	}
}
