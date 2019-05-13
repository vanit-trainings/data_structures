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

list.prototype.insertByIndex = function (val, index) {
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
                return;
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
        } else {//case when 1 element.
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

list.prototype.removeByIndex = function (index) {
        let n = this.find(index);
        if (n !== undefined && this.length > 0) {
                if (index !== 0 && index !== this.length - 1) {
                        n.prev.next = n.next;
                        n.next.prev = n.prev;
                }
                if (index === 0) {
                        this.pop_front();
                }
                if (index === this.length - 1) {
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

list.prototype.insert = function (node, previous) {
	if (node !== null) {
		if (this.last === previous) {
			this.last.next = node;
			node.prev = this.last;
			node.next = null;
			this.last = node;
		} else if (previous === null) {
			this.first.prev = node;
			node.prev = null;
			node.next = this.first;
			this.first = node;
		} else {
			previous.next.prev = node;
			node.prev = previous;
			node.next = previous.next;
			previous.next = node;
		}
	}
	this.length++;
}

list.prototype.remove = function (node) {
        if (node !== null && this.length > 0) {
                if (node === this.first) {
                        this.pop_front();
                } else if (node === this.last) {
                        this.pop_back();
                } else {
                        node.prev.next = node.next;
                        node.next.prev = node.prev;
                        this.length--;
                }
        }
}

list.prototype.swaping = function (l, begin, end) {
        if (begin == null || begin === end) {
		return;
	}	
	let pivot = begin;
        let current = begin.next;
        while (current != end.next) {
                let tmp = current.next;
                if (current.value < pivot.value) {
                        if (current == end) {
                                end = end.prev;
                        }
                        l.remove(current);
                        l.insert(current, begin.prev);
                        begin = begin.prev;
                }
                current = tmp;
        }
        return { pivot: pivot, begin: begin, end: end };
}

list.prototype.sort = function (l, begin, end) {
        if (begin === null || end === null || begin === end) {
                return l;
        }
        let piv = this.swaping(l, begin, end);
        let p = piv.pivot;
        begin = piv.begin;
        end = piv.end;
        if (p === null) {
                return;
        }
        if (p.prev !== begin && p !== begin) {
                this.sort(l, begin, p.prev);
        }
        if (p.next !== end && p != end) {
                this.sort(l, p.next, end);
        }
}


let l = new list();

for (let i = 0; i < 10; i++) {
        l.push_back(Math.floor(Math.random() * 100));
}

l.print();
l.sort(l, l.first, l.last);

console.log('Sorted list');
l.print();
