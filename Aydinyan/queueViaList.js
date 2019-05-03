let node = function(val) {
	this.next = null;
	this.prev = null;
	this.value = val;
}

let list = function() {
	this.length = 0;
	this.first = null;
	this.last = null;
}

list.prototype.push_back = function(data) {
	let n = new node(data);
	if (this.length === 0) {
		this.last = n;
		this.first = n;
	}
	else {
		this.last.next = n;
		n.prev = this.last;
		this.last = n;
	}
	this.length++;
}

list.prototype.push_front = function(data) {
	let n = new node(data);
	if (this.length === 0) {
		this.last = n;
		this.first = n;
	}
	else {
		this.first.prev = n;
		n.prev = null;
		this.first = n;
	}
	this.length++;
}

list.prototype.remove = function(ind) {
    if (!isNaN(Number(ind)) && ind >= 0 && ind < this.length) {
        let n = this.first;
        if (ind === 0) {
            if (this.length > 1) {
                n.next.prev = null;
                this.first = n.next;
                n.prev = null;
                n.next = null;
            }
            else {
                this.first = null;
                this.last = null;
            }            
        }
        else if (ind === (this.length - 1)) {
            n = this.last;
            n.prev.next = null;
            this.last = n.prev;
            n.prev = null;
            n.next = null
        }
        else {
            for (let i = 0; i < ind; i++) {
                n = n.next;
            }
                n.prev.next = n.next;
                n.next.prev = n.prev;
                n.prev = null;
                n.next = null;        
        }
        this.length--;
    }
}

list.prototype.insert = function(data, ind) {
    let newNode = new node(data);
    if (!isNaN(Number(ind)) && ind >= 0 && ind <= this.length) {
        let n = this.first;
        if (ind === 0) {
            if (this.length > 1) {
                n.prev = newNode;
                newNode.next = n;
                newNode.prev = null;
                this.first = newNode;
            }
            else{
                this.first = newNode;
                this.last = newNode;
            }            
        }
        else if (ind === this.length) {
            n = this.last;
            n.next = newNode;
            newNode.prev = n;
            this.last = newNode;
        }
        else {
            for (let i = 1; i < ind; i++) {
                n = n.next;
            }
            n.next.prev = newNode;
            newNode.next = n.next;
            n.next = newNode;
            newNode.prev = n;
        }
        this.length++;
    }
}

list.prototype.pop_front = function() {
    let n = this.first;
    let val = n.value;
	if (this.length === 0) {
		return ;
	}
	else {
		this.first = n.next;
		this.first.prev = null;
		n.value = null;
		n.next = null;
        this.length--;
        return val;
	}
}

list.prototype.pop_back = function() {
    let n = this.last;
    let val = n.value;
	if (this.length === 0) {
		return ;
	}
	else {
		this.last = n.prev;
		this.last.next = null;
		n.value = null;
		n.prev = null;
        this.length--;
        return val;
	}
}

list.prototype.isEmpty = function() {
	if (this.length == 0) {
		return true;
	}
	else {
		return false;
	}
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
    let n = this.first;
    while (n !== null) {
        n = n.next;
        this.remove(0);
    }
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
        this.l.pop_front();
    }
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
    return !(this.l.size() > 0);
}

queue.prototype.clear = function() {
    this.l.clear();
}

let q = new queue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
q.print();
q.pop();
console.log('size = ' + q.size());
q.print();
console.log(q.top());
console.log(q.isEmpty());
q.print();
q.clear();
console.log(q.isEmpty());
q.print();
console.log(q.top());
q.pop();
console.log('size = ' + q.size());