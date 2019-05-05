class Queue {
    constructor() {
        this._first = null;
        this._size = 0;
    }
    enqueue(data){
        let newNode = {
            data : data,
            next : null
        };
        if (this.isEmpty()) {//if queue is empty, new node = first
            this._first = newNode;
            this._size++;
            return newNode;
        }
        let node = this._first;
        while(node.next !== null){
            node = node.next;
        }
        node.next = newNode;
        this._size++;
        return newNode;
    };
    dequeue(){//delete first node(element) from queue
        let deleted = this._first;
        this._first = this._first.next;
        this._size--;
        return deleted;
    }
    isEmpty(){
        return this._size === 0;
    }
    first(){
        return this._first;
    }
    size(){
        return this.length;
    }
}
