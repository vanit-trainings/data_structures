//const readline = require('readline-sync');
class list {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
        this.node = function (value, next = null, prev = null) {
            this.value = value;
            this.next = next;
            this.prev = prev;
        }

    }

    isEmpty() {
        if (this.length == 0)
            return true;
    }
    clear() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    pushFront(value) {
        this.first = new this.node(value, this.first, null)
        if (this.length === 0) {
            this.last = this.first;
        }
        else {
            this.first.next.prev = this.first;
        }
        this.length++;
    }
   pushBack(value) {
    this.last = new this.node(value, null, this.last)
    if (this.length === 0) {
        this.first = this.last
    }
    else {
        this.last.prev.next = this.last
    }
    this.length++;
}
    popFront() {
        if (!this.isEmpty()) {
            this.first = this.first.next;
            this.first.prev = null;
            this.length--;
        }
    }
    popBack() {
        if (!this.isEmpty()) {
            this.last = this.last.prev;
            this.last.next = null;
            this.length--;
        }
    }
    front() {
        if (!this.isEmpty()) {
            return this.first;
        }
    }
    back() {
        if (!this.isEmpty()) {
            return this.last;
        }
    }
    find(index) {
        if (index > this.length || index < 0) {
            return;
        }
        if (this.length === index) {
            return this.last;
        }
        else {
            let tmp = this.first;
            for (let i = 0; i < index; i++) {
                tmp = tmp.next;
            }
            return tmp;
        }
    }

    insert(value, index) {
        if (this.length === index) {
            this.pushBack(value);
        }
        else {
            let tmp = this.find(index);
            if (tmp !== undefined) {
                if (tmp === 0) {
                    this.pushBack(value);
                }
                else {
                    let t_p = tmp.prev;
                    tmp.prev = this.node(value, t_p, tmp)
                    t_p.next = tmp.prev;
                }
            }
        }
        this.length++;
    }
    print() {
        let values = new Array();
        let tmp = this.first;
        while (tmp !== null) {
            values.push(tmp.value);
            console.log(tmp.value);
            tmp = tmp.next;
        }
        return values;
    }
};
l = new list();
l.pushFront(15);
l.pushBack(2);
l.insert(15, 12);
l.pushBack(21);
l.pushFront(22);
l.pushFront(55);
a = l.print();
let i = 0;
let n = 0;
let arrObj = "";
let arr = [];
/*while(arrObj !== "q"){
    arrObj = readline.question("Enter an array element, if You have entered enough elements enter 'q' \n");    
    
    if (!isNaN(Number(arrObj))) 
    { 
        arr[i] = Number(arrObj);
        i++;
    }
}*/
function quickSort (arr, left, right){
    let i = left, j = right, pivot = arr[Math.floor((left + right)/2)];
    
    while(i <= j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        if(i <= j){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
    }
    if(left < j){
        quickSort(arr, left, j);
    } 
    if(i < right){
        quickSort(arr, i, right);
    } 
}
quickSort(a, 0, a.length-1);
l.clear();
for(let i = 0; i < a.length; i++){
    l.pushBack(a[i]);
}
console.log("Sorted list");
l.print();
