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
			this.popBack();
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

// swap first element with the last element

list.prototype.swapFirstLastElements = function () {
if(!this.isEmpty() && this.first !== this.last) {
    let tempNode = this.first;
    let tempNode2 = this.last; 
    pushBack(tempNode);
    pushFront(tempNode2);
    remove(tempNode.next);
    remove (tempNode2.prev);
}
return list;
}
// swap first element with the middle element
list.prototype.swapFirstMiddleElements = function (index) {
    if(!this.isEmpty() && this.length > 2) {
        let tempNode = this.first;
        let tempNode2 = this.find(index); 
        pushFront(tempNode2);
        insert(tempNode, index);
        remove(tempNode.next);
        remove (tempNode2.prev);
    }
    return list;
}
// swap last element with the middle element
list.prototype.swapLasttMiddleElements = function (index) {
    if(!this.isEmpty() && this.length > 2) {
        let tempNode = this.last;
        let tempNode2 = this.find(index); 
        pushBack(tempNode2);
        insert(tempNode, index);
        remove(tempNode.prev);
        remove (tempNode2.prev);
    }
    return list;
}
// swap two middle elements
list.prototype.swapTwotMiddleElements = function (index1, index2) {
    if(!this.isEmpty() && this.length > 3) {
        let tempNode = this.find (index1)
        let tempNode2 = this.find(index2); 
        insert(tempNode2, index1);
        insert(tempNode, index2);
        remove(tempNode.prev);
        remove (tempNode2.prev);
    }
    return list; 
} 