var node = function(val) {
    this.prev = null;
    this.next = null;
    this.value = val;
}

var list = function() {
    this.first = null;
    this.last = null;
    this.length = 0;
}

list.prototype.push_front = function(val) {
    let newNode = new node(val);
    if(this.first === null && this.last === null) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.prev = newNode;
        this.next = this.first;
        this.first = newNode; 
    }
    this.length++;
}

list.prototype.push_back = function(val) {
    let newNode = new node(val);
    if(this.first === null && this.last === null) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.prev = this.last;
        this.next = newNode;
        this.last = newNode;
    }
    this.length++;
}

list.prototype.insert = function(val, index) {
    if(index > this.length - 1 || index < 0) {
        return;
    }
    let newNode = new node(val);
    if(index === length - 1) {
        list.push_back(val);
    }
    if(index === 0) {
        list.push_front(val);
    } else {
        let tnode = this.first;
        for (let i = 0; i < index; ++i) {
            tnode = tnode.next;
            tnode.next.prev = newNode;
            newNode.next = tnode.next;
            tnode.next = newNode;
            newNode.prev = tnode;
        }   
    }
    this.length++;
}

list.prototype.pop_front = function() {
    if(this.length === 0) {
        return;
    } else {
        let firstNode = this.first;
        let val = firstNode.value;
        this.first = firstNode.next;
        this.first.prev = null;
        firstNode.next = null;
        firstNode.value = null;
        this.length--;
        return val;
    }
}

list.prototype.pop_back = function() {
    if(this.lentgh === 0) {
        return;
    } else {
        let lastNode = this.last;
        let val = lastNode.last;
        this.last = lastNode.prev;
        this.last.next = null;
        lastNode.prev = null; 
        lastNode.value = null;
        this.length--;
        return val;
    }
}

list.prototype.remove = function(index) {
    if(index > this.length - 1 || index < 0) {
        return;
    }
    if(index === length - 1) {
        list.pop_back(val);
    }
    if(index === 0) {
        list.pop_front(val);
    }
    else {
        let tnode = this.first;
        for (let i = 0; i < index; ++i) {
            tnode = tnode.next;
            let val = tnode.value;
            tnode.next.prev = tnode.next;
            tnode.prev.next = tnode.prev;
            tnode.prev = null;
            tnode.next = null;
            tnode.value = null;
            this.length--;
            return val;
        }
    }   
}

list.prototype.clear = function(anyList) {
    if (this.length !== 0) {
        let tnode = this.first;
        while (this.length !== 0) {
            tnode.next.prev = tnode.next;
            tnode.prev.next = tnode.prev;
            tnode.prev = null;
            tnode.next = null;
            tnode.value = null;
            tnode = tnode.next;
            this.length--;
        }
    }
}

list.prototype.isEmpty = function(anyList) {
    if (this.length === 0) {
        return true;
    } else {
        return false;
    }
}

list.prototype.print = function(anyList) {
    if (this.length !== 0) {
        let tnode = this.first;
        for (let i = 0; i < this.length; ++i) {
            console.log(tnode.value);
            tnode = tnode.next;
        }
    }
}