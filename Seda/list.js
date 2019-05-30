var node = function (val, next = null, previous = null) {
	this.value = val;
	this.next = next;
	this.prev = previous;
}

var list = function () {
	this.first = null;
	this.last = null;
	this.length = 0;
}

list.prototype.push_front = function (val) {
	this.first = new node(val, this.first) 
	if (this.isEmpty()) {
		this.last = this.first;
	}
	this.length++;
}

list.prototype.push_back = function (val) {
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
		push_back(val);
	}
	else {
		let n = this.find(index);
		if (n !== undefined) {
			if (index === 0) {
				this.push_front(val);
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

list.prototype.pop_front = function () {
	if (this.isEmpty()) {
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
	let tmp = this.first;
	for (let i = 0; i < index; i++) {
		tmp = tmp.next;
	}
	return tmp;
}

list.prototype.remove = function (index) {
	let n = this.find(index);
	if (n !== undefined && this.length > 0) {
		if (index !== 0 && index !== this.length - 1) {
			n.prev.next = n.next;
			n.next.prev = n.prev;
		}
		if (index === 0) {
			this.pop_front();
		}
		if (index === this.length -1) {
			this.pop_back();
		}
	}
}

list.prototype.isEmpty = function () {
	return this.length === 0;
}

list.prototype.size = function () {
	return this.length;
}

list.prototype.print = function () {
	let tnode = this.first;
	while (tnode !== null) {
		console.log(tnode.value);
		tnode = tnode.next;
	}
}

list.prototype.clear = function () {
	this.first = null;
	this.last = null;
	this.length = 0;
}
