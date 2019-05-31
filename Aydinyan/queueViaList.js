let node = function(val, pr = null, ne = null) {
	this.prev = pr;
	this.next = ne;
	this.value = val;
}

let list = function() {
	this.length = 0;
	this.first = null;
	this.last = null;
}

list.prototype.push_back = function(data) {
    if (this.length === 0) {
        this.last = new node(data, null, null);
        this.first = this.last;
    }
    else {
        this.last.next = new node(data, this.last, null);
        this.last = this.last.next;
    }
	this.length++;
}

list.prototype.push_front = function(data) {
    this.first = new node(data, null, this.first);
	if (this.length === 0) {
        this.last = this.first;
	}
	this.length++;
}

list.prototype.insert = function (val, ind) {
    if (ind === this.length) {
        this.push_back(val);
        this.length++;
    }
    else {
    	let n = this.find(ind);
    	if (n !== undefined) {
            if (ind === 0) {
                this.push_front(val);
            }
            else {
                let np = n.prev;
                n.prev = new node(val, np, n);
                np.next = n.prev;

            }
            this.length++;
        }
    }
}

list.prototype.isEmpty = function() {
    return this.length === 0;
}

list.prototype.find = function (index) {
	if (isNaN(Number(ind)) || index >= this.length || index < 0) {
		return;
	}
	let tmp = this.first;
	for (let i = 0; i < index; i++) {
		tmp = tmp.next;
	}
	return tmp;
}

list.prototype.remove = function(ind) {
    let n = this.find(ind);
    if (n !== undefined && this.length > 0) {
        if (ind !== 0 && ind !== this.length - 1) {
            n.prev.next = n.next;
            n.next.prev = n.prev;
        }
        if (ind === 0) {
            this.pop_front();
        }
        if (ind === this.length -1) {
            this.pop_back();
        }
    }
}

list.prototype.pop_front = function() {
	if (this.length !== 0) {
        let val = this.first.value;
        this.first = this.first.next;
        if (this.length !== 1) {
            this.first.prev = null;
        }
        else {
            this.last = this.first;
        }
        this.length--;
		return val;
    }
    return ;
}

list.prototype.pop_back = function() {
    if (this.length !== 0) {
        let val = this.last.value;
        this.last = this.last.prev;
        if (this.length !== 1) {
            this.last.next = null;
        }
        else {
            this.first = this.last;
        }
        this.length--;
		return val;
    }
    return ;
}

list.prototype.print = function() {
    if (this.length > 0) {
	    let n = this.first;
	    while (n !== null) {
            console.log(n.value);
	    	n = n.next;
        }
    }
    console.log("");
}

list.prototype.clear = function() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

list.prototype.size = function() {
    return this.length;
}

let queue = function() {
    this.l = new list();
}

queue.prototype.size = function() {
    return this.l.size();
}

queue.prototype.push = function(data) {
    this.l.push_back(data);
}

queue.prototype.pop = function() {
    if (this.l.size() > 0) {
        return this.l.pop_front();
    }
    return ;
}

queue.prototype.top = function() {
    if (this.l.size() > 0) {
        return this.l.first.value;
    }
    return ;
}

queue.prototype.print = function() {
    let n = this.l.first;
    while (n !== null) {
        console.log(n.value);
        n = n.next;
    }
}

queue.prototype.isEmpty = function() {
    return this.l.size() === 0;
}

queue.prototype.clear = function() {
    this.l.clear();
}

// let q = new queue();
// 
// q.push(1);
// q.push(2);
// q.push(3);
// q.push(4);
// q.push(5);
// q.print();
// q.pop();
// console.log('size = ' + q.size());
// q.print();
// console.log(q.top());
// console.log(q.isEmpty());
// q.print();
// q.clear();
// console.log(q.isEmpty());
// q.print();
// console.log(q.top());
// q.pop();
// console.log('size = ' + q.size());

module.exports = queue();