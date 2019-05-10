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

var test = new list();
test.pushBack(13);
test.pushBack(26);
test.pushBack(43);
test.pushBack(123);
test.pushBack(134);
test.print();
console.log ('swap');
test.swap(test.last, test.first);
test.print();
