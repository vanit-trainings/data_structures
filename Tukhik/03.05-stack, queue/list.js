var node = function (val, n = null, p = null) {
	this.value = val;
	this.next = n;
	this.prev = p;
}

var list = function () {
	this.first = null;
	this.last = null;
	this.length = 0;
}

list.prototype.push_front = function (val) {
	this.first = new node(val, this.first) 
	if (isEmpty()) {
		this.last = this.first;
	}
	this.length++;
}

list.prototype.push_back = function (val) {
	this.last = new node(val, null, this.last);
	if (isEmpty()) {
		this.first = this.last;
	}
	this.length++;
}

list.prototype.insert = function (val, index) {
	let n = this.find(index);
	if (n === undefined) {
		return;
	}
	let np = n.next;
	n.next = new node(val, n.next, n);
	np.prev = n.next;
	this.length++;
}

list.prototype.pop_front = function () {
	if (isEmpty()) {
		return;
	}
	let val = this.first.value;
	this.first = this.first.next;
	if (this.first !== null) {
		this.first.prev = null;
	} else {
		this.last = null;
	}
	this.length--;
	return val;
}

list.prototype.pop_back = function () {
	let lastNode = this.last;
	let val = lastNode.val;
	if (isEmpty()) {
		return;
	} 
	if (this.length === 1) {
		this.first = null;
		this.last = null;
	} else {
		this.last = lastNode.prev;
		this.last.next = null;
		lastNode = null;
	}
	this.length--;
	return val;
}
list.prototype.find = function (index) {
	if (index >= this.length || index < 0) {
		return;
	}
	let tmp = this.first;
	for (let i = 0; i < index; i++) {
		tmp = tmp.next;
	}
	return tmp;
}
list.prototype.remove = function (index) {
	let n = this.find(index);
	if (n === undefined) {
		return;
	}
	this.n.prev.next = this.n.prev;
	this.n.prev = this.n.next.prev;
	this.length--;
	return n;

}
list.prototype.isEmpty = function () {
	return this.length === 0;
}

list.prototype.size = function () {
	return this.length;
}




