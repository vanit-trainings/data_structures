class list {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
        this.node = function (value, next = null, prev = null) {
            this.value = value;
            this.next = next;
            this.prev = prev;
            //console.log(value);
            // console.log(next+":"+prev);

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
            // this.last.next = a;
            // this.last = a;
        }
        this.length++;
    }
    /*pushBack(value){
        if(this.length !== 0) {
        let a =  new this.node(value,this.last,null);
        this.last.next = a;
        this.last = this.last.next;
        }
        else{
            this.last = this.node(value,null,null);
            this.first = this.last;
        }
        this.length++;
    }*/
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
        let tmp = this.first;
        while (tmp !== null) {
            console.log(tmp.value);
            tmp = tmp.next;

        }
    }
};
l = new list();
l.pushFront(15);
l.pushBack(2);
l.insert(15, 12);
l.pushBack(21);
l.find(1);
l.popFront();
l.popBack();
l.clear();
l.print();
module.exports = router;
