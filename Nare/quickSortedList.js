function node ( val, n = null, p = null) {
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

list.prototype.insert = function (node, node2) {
		if (!this.isEmpty() && this.length > 1) {
		if(node2.prev === null){
			node2.prev = node;
			node2.prev.next = node2;
			node.prev === null;
	}
	else if (node2.next === null) {
		node2.next = node;
		node2.next.prev = node2;
		node.next === null;
	}
	else {
		node2.next.prev = node;
		node.next = node2.next; 
		node.prev = node2;
		node2.next = node;
	}
  } 
  this.length++; 
}
list.prototype.remove = function (node) {
	if (!this.isEmpty() && this.length > 1) {
		if(node.prev === null) {
			node.next.prev === null; 
		}
		else if (node.next === null) {
			node.prev.next === null; 
		}
		else {
			node.prev.next = node.next; 
			node.next.prev = node.prev;
					}
	}
	this.length--;
}

list.prototype.swap = function (node, node2) {
	this.node = new node (); 
	this.node2 = new node (); 
		let tempNode = node;
		if (!this.isEmpty() && this.length > 1) {
this.insert (node2, node);
this.insert (tempNode, node2);
this.remove (node2);
this.remove (node);
    }
}

list.prototype.swaping = function (begin, end) {
	console.log("swaping1");
	if (begin == null || begin === end) {
		return;
	}
	console.log("swaping1");
	let pivot = begin;
	let current = begin.next;
	while (current != end) {
		let tmp = current.next;
		if (current.value < pivot.value) {
			if (current.next) {
				current.next.prev = current.prev;
			}
			if (current.prev) {
				current.prev.next = current.next;
			}
			current.next = begin;
			current.prev = begin.prev;
			if (begin.prev) {
				begin.prev.next = current;
			}
			begin.prev = current;
			begin = current;
		}
		current = tmp;
	}
	return pivot;
}

list.prototype.quick_sort = function (b, e) {
	if (b == null || b.next === e) {
		console.log ('quick_sort 1');
		return;
	}
	p = this.swaping(b, e);
	if (p == null) {
console.log ('quick_sort 2');
		return;
	}
console.log ('quick_sort 3');
	this.quick_sort(b, p.next);
	this.quick_sort(p.next, e);
}

list.prototype.sort = function () {
	console.log("first", this.first);
	console.log("last", this.last);
	this.quick_sort(this.first, this.last.next);
}


var test = new list();
test.pushBack(134);
test.pushBack(13);
test.pushBack(14);
test.pushBack(18);
test.pushBack(13);
test.pushBack(13);
test.pushBack(16);
test.pushBack(26);
test.pushBack(123);
test.pushBack(43);
test.print();
console.log ('sort');
test.sort();
test.print();



