class List {
    constructor() {
        this._head = null;
        this._length = 0;
    };
    addToHead(value){
        const newNode = {
            value : value,
            next : this._head
        };
        this._head = newNode;
        this._length++;
    };
    find(value){
        let founded = this._head;
        while(founded.value !== value){
            founded = founded.next;
        }
        return founded;
    };
    removeElement(value){
        if (this.isEmpty()) {
            return;
        }
        let deleted = this._head;
        while(deleted.next.value !== value){
            deleted = deleted.next;
        }
        deleted.next = deleted.next.next;
        this._length--;
        return;
    };
    removeHead(){
        let node = this._head;
        this._head = node.next;
        this._length--;
        return node;
    };
    isEmpty(){
        return this._length === 0;
    };
    remove(){
        this._head = null;
        this._length = 0;
    };
    head(){
        return this._head;
    }
};


//const list = {
//    head: {
//        value: "chors"
//        next: {
//            value: "ereq"
//            next: {
//                value: "erku"
//                next: {
//                  value: "mek"
//                  next: null
//                }
//            }
//        }
//    }
//};


let list = new List();
list.addToHead("mek");
list.addToHead("erku");
list.addToHead("ereq");
list.addToHead("chors");