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
            console.log('insert' + node.value)
            console.log('last: = ' + this.last.value);
            if (pr !== null) {
                console.log('pr: = ' + pr.value);
            }
            if(pr === null) {
                this.first.prev = node;
                node.next = this.first;
                node.prev = null;
                this.first = node;
                console.log('1')
                //this.push_front(node.value);
            }
            else {
                if (this.last.prev == pr.prev) {
                    this.last.next = node;
                    node.next = null;
                    node.prev = this.last;
                    this.last = node;
                    console.log('2')
                    //this.push_back(node.value);
                }
                else {
                    console.log('3')
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
            console.log('remove');
            console.log(node.value);
            if (node !== this.first && node !== this.last) {
                console.log('1');
                node.prev.next = node.next;
                node.next.prev = node.prev;
                this.length--;
            }
            else {
                if(node == this.first) {
                    console.log('2');
                    this.pop_front();
                }
                else {
                    console.log('3');
                    this.pop_back();
                }
            }
        }
    }
}

function QSort (lis, begin, end) {
    if (begin === null || end === null || begin === end) {
        return lis;
    }
    let pivot = begin;
    let curr = begin.next;
    while (curr != end) {
        if (curr.value < pivot.value) {
            let tmp = curr.next;
            lis.remove(curr);
            curr.next = pivot;
            if (list.first !== pivot) {
                pivot.prev.next = curr;
                curr.prev = pivot.prev;
                pivot.prev = curr;
            }
            else {
                lis.first.prev = curr;
                curr.next = lis.first;
                curr.prev = null;
                lis.first = curr;
            }
        }
    }
}


function quickSort(lis) {
    let low, hii;
    low = lis.first;
    hii = lis.last;
    lis = sub_qs(lis, low, hii);

  
    function sub_qs(lis, lo, hi) {
        if (lis.size()<=1) {
            return lis;
        }
        if (lo !== hi) {
          var p = partition(lis, lo, hi);
          if (p.prev !== null && p.prev !== lo) {
          sub_qs(lis, lo, p.prev);
          }
          if (p.next !== null && p.next !== hi) {
          sub_qs(lis, p.next, hi);
          }
        }
        return lis;
    }
  
    var z = 0;
    /*function Swap(lis, i, j) {
        if (i != j){
            z++;
            let jp = j.prev;
            let ip = i.prev;
            let J, I;
            if (j.prev != null ) {
                J = Object.assign({}, j.prev);
            }
            else {
                J = null;
            }
            if (i.prev != null){
            I = Object.assign({}, i.prev);}
            else {
                I = null
            }
            lis.removeNode(i);
            lis.removeNode(j);
            lis.insertNode(i, J);
            lis.insertNode(j, I);
        }
    }*/

    function partition(lis, l, h) {
        let pivot = h.prev.next;
        let i = l;
        //let j = l;
        console.log('+++++++pivotValue++++');
        console.log(pivot.value);
        console.log('+++++++ j Value++++');
        console.log(l.value);

      for (let j = l ; j.next != h ; j = j.next) {
        let J = Object.assign({}, j);
        if (j.value < pivot.value) {
            let I = Object.assign({}, i);
            console.log('i == ' + i.value);
            Swap(lis, i, j);
            i = I.next;
        }
            j = J;
            if(j.next == null){
                break;
            }
      }
      console.log('swap: i = ' + i.value + '  piv = ' + pivot.value);
      Swap(lis, i, pivot);
      console.log('++++ list ++++')
      lis.print()
      console.log('++++ list fist last ++++')
      console.log('first =' + lis.first.value)
      console.log('last =' + lis.last.value)
      return pivot;
    }


    return array;
}

let count = NaN;
let lis = new list();
/*
while (isNaN(Number(count))) {
    count = readline.question("Enter list element count\n");    
}

for (let i = 0; i < count; i++) {
    lis.push_back(Math.floor(Math.random()* 100));
}
*/
function Swap(lis, i, j) {
    if (i != j && i != null && j != null) {
        let J, I;
        I = Object.assign({}, i);
        J = Object.assign({}, j);
        lis.insertNode(I, j);
        lis.insertNode(J, i);
        lis.removeNode(I.prev);
        lis.removeNode(J.prev);
    }
}

lis.push_back(47);
lis.push_back(78);
lis.push_back(38);
lis.push_back(31);
lis.push_back(14);
lis.print();

Swap(lis, lis.first, lis.last);
lis.print();

Swap(lis, lis.first, lis.last);
lis.print();

Swap(lis, lis.first.next, lis.first.next.next);
lis.print();

Swap(lis, lis.first, lis.first.next.next.next);
//quickSort(lis);

console.log('x');
lis.print();
//lis.rprint();
console.log('x');
console.log(lis.first.value);
console.log(lis.last.value);