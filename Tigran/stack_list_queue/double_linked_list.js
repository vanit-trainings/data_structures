class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    isEmpty(){
        return this.length === 0;
    }
    push_front(value){
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
            newNode.prev = null;

        }else{
            newNode.prev = null;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
        this.length++;
        return newNode;//erevi
    };
    push_back(value){
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
            newNode.prev = null;
        }else{
            newNode.prev = this.head;
            newNode.next = null;
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return newNode;//erevi
    }
    pop_back(){
        let node = this.tail;
        if (!this.isEmpty()) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return node;
    }
    pop_front(){
        let node = this.head;
        if (!this.isEmpty()) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return node;
    }
    find(index){
        if (index > this.length || index < 0) {
            return;
        }
        let temp = 0;
        let node = this.head;
        while (temp !== index) {
            temp++;
            node = node.next;
        }
        return node;
    }
    remove(index){
        if (index > this.length || index < 0) {
            return;
        }
        let node = this.find(index);
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return node;
    }
    insert(index,value){
        if (this.isEmpty()) {
            this.push_back(value)
        }
        let temp = this.find(index);
        if (temp === undefined) {
            return;
        }
        let node = new Node(value);
        temp.prev.next = node;
        temp.prev = node;
        node.next = temp;
        node.prev = temp.prev;
        this.length++;
        return node;
    }
    print(){
        let end = this.head;
        while (end !== null) {
            console.log(end);
            end = end.next;

        }
        return;
    }
    first(){
        return this.head;
    }
    last(){
        return this.tail;
    }
};



let tr = new List();
tr.push_front("mek");
tr.push_front("erku");
tr.push_front("ereq");
tr.push_front("chors");

console.log("tr");
console.log(tr);
