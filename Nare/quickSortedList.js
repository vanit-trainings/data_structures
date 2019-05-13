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
		if (node) {
		if(node2 === null) {
			if(this.length === 0) {
				this.first = node;
				this.last = node;
				node.prev = null;
				node.next = null;
			}
			else {
				this.first.prev = node;
				node.next = this.first;
				node.prev = null;
				this.first = node;
			}
	}
	else if (node2 === this.last) {
		this.last.next = node;
		node.prev = this.last;
		node.next = null;
		this.last = node;
	}
	else {
		node2.next.prev = node;
		node.next = node2.next; 
		node.prev = node2;
		node2.next = node;
	}
  this.length++; 
  } 
}
list.prototype.remove = function (node) {
	if (!this.isEmpty()) {
		if(node === this.first) {
			this.popFront();
					}
		else if (node === this.last) {
			this.popBack();
					}
		else {
			node.prev.next = node.next; 
			node.next.prev = node.prev;
			this.length--;
					}
	}
}

list.prototype.swaping = function (begin, end) {	
	if (begin == null || begin === end) {
		return;
	}
		let pivot = begin;
	let current = begin.next;
	while (current != end.next) {
		let tmp = current.next;
		if (current.value < pivot.value) {
			if (current === end) {
				end = end.prev;
			}
			let tmp2 = Object.assign({}, current);
			this.insert(tmp2, begin.prev);
			this.remove(current);
			begin = begin.prev;
		}
		current = tmp;
	}
	return { pivot: pivot, begin: begin, end: end };
}

list.prototype.quick_sort = function (b, e) {
	if (b === null || e === null || b === e) {
			return;
	}
	let pi = this.swaping(b, e);
	let p = pi.pivot;
	b = pi.begin;
	e = pi.end;
		if (p === null ) {
		return;
	}
	if (p.prev != b && b != p ) {		
		this.quick_sort(b, p.prev);
	}
	if (p!= e && p.next != e) {		
		this.quick_sort(p.next, e);
	}
}

list.prototype.sort = function () {
	this.quick_sort(this.first, this.last);
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
test.sort();
console.log('xxxxxxxx');
 test.print();






