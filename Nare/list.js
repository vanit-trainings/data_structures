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

list.prototype.isEmpty = function () {
	return this.length === 0;
}

list.prototype.size = function () {
	return this.length;
}

list.prototype.pushFront = function (val) {
	this.first = new node(val, this.first) 
	if (this.isEmpty()) {
		this.last = this.first;
	}
	this.length++;
}

list.prototype.pushBack = function (val) {
	if (this.isEmpty()) {
		this.last = new node(val, null, null);
		this.first = this.last;
	}
	else {
		this.last.next = new node(val, null, this.last);
		this.last = this.last.next;
	}
	this.length++;
}

list.prototype.insert = function (val, index) {
	if (index === this.length) {
		pushBack(val);
	}
	else {
		let n = this.find(index);
		if (n !== undefined) {
			if (index === 0) {
				this.pushFront(val);
			}
			else {
				let np = n.prev;
				n.prev = new node(val, n, np);
				np.next = n.prev;
				this.length++;
			}
		}
		return ;
	}
}

list.prototype.popFront = function () {
	if (this.isEmpty()) {
		return;
	}
	let val = this.first.value;
	this.first = this.first.next;
	if (this.first !== null) {
		this.first.prev = null;
	} else {//case when 1 element.
		this.last = null;
	}
	this.length--;
	return val;
}

list.prototype.popBack = function () {
	if (this.isEmpty()) {
                return;
        }
	let val = this.last.value;
	this.last = this.last.prev;
	if (this.last !== null) {
		this.last.next = null;
	} else {
		this.first = null;
	}
	this.length--;
	return val;
}

list.prototype.find = function (index) {
	if (index >= this.length || index < 0) {
		return;
	}
	let temp = this.first;
	for (let i = 0; i < index; i++) {
		temp = temp.next;
	}
	return temp;
}

list.prototype.remove = function (index) {
	let n = this.find(index);
	if (n !== undefined && this.length > 0) {
		if (index !== 0 && index !== this.length - 1) {
			n.prev.next = n.next;
			n.next.prev = n.prev;
		}
		if (index === 0) {
			this.popFront();
		}
		if (index === this.length -1) {
			this.popBsack();
		}
	}
}

list.prototype.print = function () {
	let tempNode = this.first;
	while (tempNode !== null) {
		console.log(tempNode.value);
		tempNode = tempNode.next;
	}
}

list.prototype.clear = function () {
	this.first = null;
	this.last = null;
	this.length = 0;
}

var test = new list();
test.pushBack(13);
test.pushBack(23);
test.pushFront(3);
test.pushFront(4);
test.print();
test.remove(4);
test.popFront();
test.print();
test.insert(45, 5);
test.popBack();
console.log(test.size());
test.print();
console.log(test.isEmpty());
test.clear();
console.log(test.isEmpty());