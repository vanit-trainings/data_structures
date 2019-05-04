class Queue {
    constructor() {
        this.first = null;
        this.size = 0;
    }
    enqueue(data){
        let newNode = {};
        newNode.data = data;
        newNode.next = null;
        if (this.first === null) {//if queue is empty, new node = first
            this.first = newNode;
            this.size++;
            return newNode;
        }
        let node = this.first;
        while(node.next !== null){
            node = node.next;
        }
        node.next = newNode;
        this.size++;
        return newNode;
    };
    dequeue(){//delete first node(element) from queue
        let deleted = this.first;
        this.first = this.first.next;
        this.size--;
        return deleted;
    }
    get isEmpty(){
        return (this.size === 0) ?  true : false;
    }
}
