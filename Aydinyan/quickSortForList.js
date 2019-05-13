const readline = require('readline-sync');

class node {
    constructor (val, p = null, n = null) {
        this.value = val;
        this.prev = p;
        this.next = n;
    }
}

class list {
    constructor () {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push_back(data) {
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

    push_front(data) {
        this.first.prev = new node(data, null, this.first);
        this.first = this.first.prev;
        if (this.length === 0) {
            this.last = this.first;
        }
        this.length++;
    }

    insert(val, ind) {
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

    isEmpty() {
        return this.length === 0;
    }

    find(ind) {
        if (isNaN(Number(ind)) || ind >= this.length || ind < 0) {
            return;
        }
        let tmp = this.first;
        for (let i = 0; i < ind; i++) {
            tmp = tmp.next;
        }
        return tmp;
    }

    remove(ind) {
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

    pop_front() {
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

    pop_back() {
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

    print() {
        if (this.length > 0) {
            let n = this.first;
            while (n !== null) {
                console.log(n.value);
                n = n.next;
            }
        }
        console.log("");
    }

    rprint() {
        if (this.length > 0) {
            let n = this.last;
            while (n !== null) {
                console.log(n.value);
                n = n.prev;
            }
        }
        console.log("");
    }

    clear() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    insertNode(node, pr) {
        if (node){
            if(pr === null) {
                this.first.prev = node;
                node.next = this.first;
                node.prev = null;
                this.first = node;
            }
            else {
                if (this.last.prev == pr.prev) {
                    this.last.next = node;
                    node.next = null;
                    node.prev = this.last;
                    this.last = node;
                }
                else {
                    pr.next.prev = node;
                    node.next = pr.next;
                    pr.next = node;
                    node.prev = pr;
                    this.length++;
                }
            }
        }
    }

    removeNode (node) {
        if (node && this.length > 0) {
            if (node !== this.first && node !== this.last) {
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.length--;
            }
            else {
                if(node == this.first) {
                    this.pop_front();
                }
                else {
                    this.pop_back();
                }
            }
        }
    }
}

function partSort (lis, begin, end) {
    let pivot = begin;
    let curr = begin.next;
    while (curr && curr != end.next) {
        let tmp1 = Object.assign({}, curr);
        if (curr.value < pivot.value) {
            let tmp2 = Object.assign({}, curr);
            if(curr == end) {
                end = end.prev;
            }
            lis.removeNode(curr);
            lis.insertNode(tmp2, begin.prev);
            begin = begin.prev;
        }
        curr = tmp1.next;
    }
    return { pivot: pivot, begin: begin, end: end };
}

function QSort (lis, begin, end) {
    if (!begin || !end || begin == end) {
        return lis;
    }
    let pivObj = partSort (lis, begin, end);
    let piv = pivObj.pivot;
    begin = pivObj.begin;
    end = pivObj.end;
    if (!piv) {
        return lis;
    }
    if (begin != piv.prev && begin != piv) {
        QSort(lis, begin, piv.prev);
    }
    if (piv.next != end && piv != end) {
        QSort(lis, piv.next, end);
    }
}

let count = NaN;
let lis = new list();

while (isNaN(Number(count))) {
    count = readline.question("Enter list element count\n");    
}

for (let i = 0; i < count; i++) {
    lis.push_back(Math.floor(Math.random()* 100));
}

lis.print();
QSort (lis, lis.first, lis.last);
console.log('xxxxxxxxxxxxxxxx');
lis.print();