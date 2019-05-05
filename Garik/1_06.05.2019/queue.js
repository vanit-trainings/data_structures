class Queue{
    constructor(){
        this.element = null;
        this.queueLength = 0;
        this.Node = function(value, next = null){
            this.value = value;
            this.next = next
        }
    }
    front(){
        if(this.isEmpty()){
            return undefined;
        }
        while(this.element.next !== null){
            this.element = this.element.next;
        }
        return this.element.value;
    }
    back(){
        return this.isEmpty() ? undefined : this.element.value;
    }
    enQueue(value){
        this.element = new this.Node(value, this.element);
        this.queueLength++;
        return this;
    }
    top(){
        return this.isEmpty() ? undefined : this.element.value;
    }
    deQueue(){
        if(this.isEmpty()){
            return;
        }
        const deleted = this.top();
        this.element = this.element.next;
        this.queueLength--;
        return deleted;
    }
    get length(){
        return this.queueLength;
    }
    isEmpty(){
        return this.element === null;
    }
    clear(){
        this.element = null;
        this.queueLength = 0;
        return this;
    }
}
let queue = new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.deQueue();
console.log(queue.clear())