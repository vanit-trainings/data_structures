var node = function(val) {
	this.prev = null;
	this.value = val;
}

var stack = function() {
	this.length = 0;
	this.last = null;
}

stack.prototype.push = function(data) {
	let n = new node(data);
	if (this.length === 0) {
        n.prev = this.last;
		this.last = n;
	}
	else {
		n.prev = this.last;
		this.last = n;
	}
	this.length++;
}

stack.prototype.pop = function() {
    if (this.length > 0) {
        let n = this.last;
        let val = n.value;    
        this.last = n.prev;
        n.prev = null;
        n.value = null;
        this.length--;
        return val;
    }
    else {
        return ;
    }
}

stack.prototype.isEmpty = function() {
	return !(this.length > 0);
}

stack.prototype.print = function() {
    if (this.length > 0) {
	    let n = this.last;
	    while (n !== null) {
            console.log(n.value);
	    	n = n.prev;
        }
    }
}

stack.prototype.clear = function() {
    let n = this.last
    while (n !== null) {
        n = n.prev;
        this.pop();
    }
}

stack.prototype.top = function() {
    return this.last.value;
}

stack.prototype.size = function() {
    return this.length;
}

let queue = function() {
    this.stackForPush = new stack();
    this.stackForPop = new stack();
    this.length = 0;
}

queue.prototype.size = function() {
    return this.length;
}

queue.prototype.push = function(data) {
    this.stackForPush.push(data);
    this.length++;
}

queue.prototype.pop = function() {
    if (this.stackForPop.size() !== 0) {
        this.length--;
        return this.stackForPop.pop();
    }
    else {
        if (this.stackForPush.size() !== 0) {
            while (this.stackForPush.size() > 0) {
                let n = this.stackForPush.pop();
                this.stackForPop.push(n);
            }
            this.length--;
            return this.stackForPop.pop();
        }
        else {
            return ;
        }
    }
}

queue.prototype.top = function() {
    if (this.stackForPop.size() !== 0) {
        return this.stackForPop.top();
    }
    else {
        if (this.stackForPush.size() !== 0) {
            while (this.stackForPush.size() > 0) {
                let n = this.stackForPush.pop();
                this.stackForPop.push(n);
            }
            return this.stackForPop.top();
        }
        else {
            return ;
        }
    }
}

queue.prototype.print = function() {
    let st = new stack();
    while (this.stackForPop.size() > 0) {
        let n = this.stackForPop.pop();
        st.push(n);
        console.log(n);
    }
    while (this.stackForPush.size() > 0) {
        let n = this.stackForPush.pop();
        this.stackForPop.push(n);
    }
    while (this.stackForPop.size() > 0) {
        let n = this.stackForPop.pop();
        st.push(n);
        console.log(n);
    }
    while (st.size() > 0) {
        let n = st.pop();
        this.stackForPop.push(n);
    }
}

queue.prototype.isEmpty = function() {
    return !(this.length > 0);
}

queue.prototype.clear = function() {
    while (this.stackForPop.size() > 0) {
        this.stackForPop.pop();
        this.length--;
    }
    while (this.stackForPush.size() > 0) {
        this.stackForPush.pop();
        this.length--;
    }
}

let q = new queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.print()
q.pop();
q.print();
q.push(5);
q.print()
console.log(q.isEmpty());
q.clear();
console.log(q.isEmpty());
q.print();