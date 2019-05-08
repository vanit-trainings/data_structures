const readline = require('readline-sync');

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

list.prototype.find = function (ind) {
	if (isNaN(Number(ind)) || ind >= this.length || ind < 0) {
		return;
	}
	let tmp = this.first;
	for (let i = 0; i < ind; i++) {
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

function swap(list, i, j) {
    console.log('swap');
    console.log('j =   ' + j.value);
    console.log('i =   ' + i.value);

    if (i !== j) {
        if (i.next === j) {

        }
        let tmp = new node(j.value, j.prev, j.next);
        if (i.prev === null && j.next === null) {
            //i.prev.next = j;
            i.next.prev = j;
            //j.next.prev = i;
            j.prev.next = i;
            j.next = i.next;
            j.prev = i.prev;
            i.next = tmp.next;
            i.prev = tmp.prev;
            list.first = j;
            list.last = i;
        }
        else {
            if (j.prev === null) {
                    i.prev.next = j;
                    i.next.prev = j;
                    j.next.prev = i;
                    //j.prev.next = i;
                    j.next = i.next;
                    j.prev = i.prev;
                    i.next = tmp.next;
                    i.prev = tmp.prev;
                    list.first = i;                
            }
            if (j.next === null) {
                    i.prev.next = j;
                    i.next.prev = j;
                    //j.next.prev = i;
                    j.prev.next = i;
                    j.next = i.next;
                    j.prev = i.prev;
                    i.next = tmp.next;
                    i.prev = tmp.prev;
                    list.last = i;  
            }
            else {
                if (i.prev === null) {
                    //i.prev.next = j;
                    i.next.prev = j;
                    j.next.prev = i;
                    j.prev.next = i;
                    j.next = i.next;
                    j.prev = i.prev;
                    i.next = tmp.next;
                    i.prev = tmp.prev;
                    list.first = j; 
                }
                else {
                    i.prev.next = j;
                    i.next.prev = j;
                    j.next.prev = i;
                    j.prev.next = i;
                    j.next = i.next;
                    j.prev = i.prev;
                    i.next = tmp.next;
                    i.prev = tmp.prev;
                }
            }
        }
    }
}

function partition (list, f, l) {
    let piv = l;
    let i = f.prev;
    for (var j = f; j.next.next !== null; /*j = j.next*/) {
        let J = new node(j.value, j.prev, j.next);
        console.log('for piv = ' + piv.value)
        console.log('for j = ' + j.value)
        if (j.value >= piv.value) {
            console.log('if')
            if(i === null) {
                i = f;
            }
            else {
                i = i.next;
            }
            console.log('for i = ' + i.value)
            swap(list, i, j);
        }
        j = J.next;
    }
        if(i === null) {
            i = f;
        }
        else {
        i = i.next;}
    let ind = new node(i.val, i.prev, i.next);
    swap(list, i, piv);
    return ind;
}

function quickSortForList(list, f, l) {
    console.log('q')
    if (f !== l) {
        let piv = partition(list, f, l);
        if (piv.prev !== null && piv.prev !== f) {
            quickSortForList(list, f, piv.prev);
        }
        if (piv.next !== null && piv.next !== l) {
            quickSortForList(list, piv.next, l);
        }
    }
}

let count = NaN;
let l = new list();
while (isNaN(Number(count))) {
    count = readline.question("Enter list element count\n");    
}

for (let i = 0; i < count; i++) {
    l.push_back(Math.floor(Math.random()* 100));
}

l.print();

quickSortForList(l, l.first, l.last);

//l.print();


