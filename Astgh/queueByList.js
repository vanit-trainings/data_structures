var node = function (val) {
	this.prev = null;
	this.next = null;
	this.value = val;
}

var list = function () {
	this.first = null;
	this.last = null;
	this.length = 0;
}

list.prototype.push_front = function (val) {
	let newNode = new node(val);
	if (this.first === null && this.last === null) {
		this.first = newNode;
		this.last = newNode;
	} else {
		newNode.next = this.first;
		this.first.prev = newNode;
		this.first = newNode;
	}
	this.length++;
}

list.prototype.push_back = function (val) {
	let newNode = new node(val);
	if (this.first === null && this.last === null) {
		this.first = newNode;
		this.last = newNode;
	} else {
		newNode.prev = this.last;
		this.last.next = newNode;
		this.last = newNode;
	}
	this.length++;
}

list.prototype.insert = function (val, index) {
	if (index < this.length || index >= 0) {
		let newNode = new node(val);
		let tnode = this.first;
		if (index === this.length - 1) {
			this.push_back(val);
		} else
			if (index === 0) {
				this.push_front(val);
			} else {
				for (let i = 0; i < index; ++i) {
					tnode = tnode.next;
				}
				tnode.next.prev = newNode;
				newNode.next = tnode.next;
				tnode.next = newNode;
				newNode.prev = tnode;
			}
		this.length++;
	}
}

list.prototype.pop_front = function () {
	let firstNode = this.first;
	let val = firstNode.value;
	if (this.length === 0) {
		return;
	} 
	if (this.length === 1){
		this.first = null;
		this.last = null;
	} else {
		this.first = firstNode.next;
		this.first.prev = null;
		firstNode = null;
	}
	this.length--;
	return val;
}

list.prototype.pop_back = function () {
	let lastNode = this.last;
	let val = lastNode.val;
	if (this.lentgh === 0) {
		return;
	} 
	if (this.length === 1) {
		this.first = null;
		this.last = null;
	}
	else {
		this.last = lastNode.prev;
		this.last.next = null;
		lastNode = null;
	}
	this.length--;
	return val;
}

list.prototype.remove = function (index) {
	if (index > this.length - 1 || index < 0) {
		return;
	}
	if (index === this.length - 1) {
		this.pop_back();
	} else
		if (index === 0) {
			this.pop_front();
		}
	else {
		let tnode = this.first;
		for (let i = 0; i < index; ++i) {
			tnode = tnode.next;
		}
		let val = tnode.value;
		tnode.next.prev = tnode.prev;
		tnode.prev.next = tnode.next;
		tnode.prev = null;
		tnode.next = null;
		tnode.value = null;
		this.length--;
		return val;
	}
}

list.prototype.isEmpty = function () {
	return this.length === 0;
}

list.prototype.size = function () {
	return this.length;
}

list.prototype.print = function () {
	if (this.length !== 0) {
		let tnode = this.first;
		while (tnode !== null) {
			console.log(tnode.value);
			tnode = tnode.next;
		}
	}
}

list.prototype.clear = function () {
	if (this.length !== 0) {
		let tnode = this.first;
		while (tnode !== null) {
			tnode = tnode.next;
			this.remove(0);
		}
	}
}

var queue = function() {
    this.container = new list();
}

queue.prototype.push = function(val) {
    this.container.push_back(val);
}

queue.prototype.pop = function() {
    if (this.container.length !== 0) {
        this.container.pop_front();
    }
}

queue.prototype.clear = function() {
    this.container.clear();
}

queue.prototype.size = function() {
    return this.container.size();
}

queue.prototype.isEmpty = function() {
    return this.container.size() === 0;
}

queue.prototype.print = function() {
    let tnode = this.container.first;
    while (tnode !== null) {
        console.log(tnode.value);
        tnode = tnode.next;
    }
}