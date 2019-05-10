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
        this.first = new node(data, null, this.first);
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

    clear() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }
}

function swapForNeighbors (list, i, j)
{
    //let tmp = Object.create(j);
    //let tmp = j;
    let tmp = new node(j.value, j.prev, j.next);
    if (i.prev === null && j.next === null) {
        j.next = i;
        j.prev = null;
        i.next = null;
        i.prev = j;
        list.first = j;
        list.last = i;
    }
    else {
        if (i.prev === null) {
            j.next.prev = i;
            i.prev = j;
            j.prev = null;
            j.next = i;
            i.next = tmp.next;
            list.first = j;
        }
        else {
            if (j.next === null) {
                i.prev.next = j;
                j.prev = i.prev;
                i.prev = j;
                i.next = null;
                j.next = i;
                list.last = i;
            }
            else {
                i.prev.next = j;
                j.next.prev = i;
                j.next = i;
                j.prev = i.prev;
                i.prev = j;
                i.next = tmp.next;
            }
        }
    }
}

function swap(lis, i, j) {
    console.log('++++swap++++')
    console.log(i);    
    console.log('++++++')
    console.log(j);
    console.log('++++++swap-verj+++++')


    if (i !== j && i && j) {
        if (i.next === j) {

            swapForNeighbors(lis, i, j);
        }
        if (j.next === i)
        {
            swapForNeighbors(lis, j, i);            
        }
        else {
            //let tmp = Object.create(j);
            //let tmp = j;
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
                lis.first = j;
                lis.last = i;
            }
            else {
                if (j.prev === null && i.next === null){
                    i.prev.next = j;
                    //i.next.prev = j;
                    j.next.prev = i;
                    //j.prev.next = i;
                    j.next = i.next;
                    j.prev = i.prev;
                    i.next = tmp.next;
                    i.prev = tmp.prev;
                    lis.first = i;
                    lis.last = j;
                }
                else if (j.prev === null) {
                        i.prev.next = j;
                        i.next.prev = j;
                        j.next.prev = i;
                        //j.prev.next = i;
                        j.next = i.next;
                        j.prev = i.prev;
                        i.next = tmp.next;
                        i.prev = tmp.prev;
                        lis.first = i;                
                }
                else if (j.next === null) {
                        i.prev.next = j;
                        i.next.prev = j;
                        //j.next.prev = i;
                        j.prev.next = i;
                        j.next = i.next;
                        j.prev = i.prev;
                        i.next = tmp.next;
                        i.prev = tmp.prev;
                        lis.last = i;  
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
                        lis.first = j; 
                    }
                    else {
                        if (i.next === null){
                            i.prev.next = j;
                            j.next.prev = i;
                            j.prev.next = i;
                            j.next = i.next;
                            j.prev = i.prev;
                            i.next = tmp.next;
                            i.prev = tmp.prev;
                            lis.last = j;
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
    }
}

function quickSort(lis) {
//    console.log(lis.first);
//    console.log('+++++++');
//    console.log(lis.last);
    let low, hii;
    low = lis.first;
    hii = lis.last;
//    console.log(low);
//    console.log('+++++++');
//    console.log(hii);

    array = sub_qs(lis, low, hii);
  
    function sub_qs(lis, lo, hi) {
        //console.log(lis.first);
        //console.log('+++++++');
        //console.log(lis.last);
        //console.log('+++++++');
        //console.log('+++++++');
        //console.log(low);
        //console.log('+++++++');
        //console.log(hi);

        if (lis.size()<=1) {
            return lis;
        }
        if (lo !== hi) {
          var p = partition(lis, lo, hi);
          sub_qs(lis, lo, p.prev);
          sub_qs(lis, p.next, hi);
        }
        return lis;
    }
  
    function partition(lis, l, h) {
        //console.log(lis.first);
        //console.log('+++++++');
        //console.log(lis.last);
        //console.log('+++++++');
        //console.log('+++++++');
        //console.log(l);
        //console.log('+++++++');
        //console.log(h);

      let pivot = h;
      let i = l;
      let j = l;
        //console.log('+++++++');
        //console.log(pivot);
        //console.log('+++++++');
        //console.log(i);

      for (let z = 0 ;j.next != null; z++) {
        console.log('+++++++PIVOT+++++++');
        console.log(pivot);
        console.log('+++++++J++++++');
        console.log(j);
        console.log('+++++++I+++++');
        console.log(i);
        var J = j.next;
        //var J = j;
        //var J = new node(j.value, j.prev, j.next);
        if (j.value < pivot.value) {
            var I = i.next;
            //var I = i;
          swap(lis, i, j);
          i = I;
        }
        j = J;
        //j = new node(J.next.value, J, J.next.next);
        console.log('++++j new++++')
        console.log(j); 
      }
      let ind = i;
      swap(lis, i, pivot);
  
      return ind;
    }
    return array;
  }

/*
function partition (lis, f, l) {
    let piv = l;
    let i = f;
    let j = f;
    while ( j != l ) {
        let J = j.next;
        if (j.value < piv.value) {
            swap(lis, i, j);
            i = i.next;
        }
        j = J;
        if (j === null || i === null){
            break;
        }
    }
    let ind = i;
    swap(lis, i, piv);
    return ind;
}

function quickSortForList(lis, f, l) {

    console.log('xxx = '+lis.first.next.next.value)

    if (f !== l) {
        var piv = partition(lis, f, l);
        if (piv !== null) {
            if (piv.prev !== null && piv.prev !== f) {
                quickSortForList(lis, f, piv.prev);
            }
            if (piv.next !== null && piv.next !== l) {
                quickSortForList(lis, piv.next, l);
            }
        }
    }
    return lis;
}

*/

let count = NaN;
let lis = new list();
while (isNaN(Number(count))) {
    count = readline.question("Enter list element count\n");    
}

for (let i = 0; i < count; i++) {
    lis.push_back(Math.floor(Math.random()* 100));
}

lis.print();

function x(lis, f, l) {
    console.log(lis.first);
    console.log('+++++++++++++')
    console.log(f);
    console.log('+++++++++++++')
    console.log(l);

}
//x(lis, lis.first, lis.last)
//swap(lis, lis.first, lis.first.next);
(quickSort(lis).print());
//lis = quickSortForList(lis, lis.first, lis.last);

//lis.print();