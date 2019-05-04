class Queue{
    constructor(){
        this.element = null;
        this.queueLength = 0;
    }
    front(){
        let element = this.element;
        if(this.element === null){
            return undefined;
        }
        while(element){
            if(element.next === null){
                return element.value;
            }
            element = element.next;
        }
        return undefined;
    }
    back(){
        if(this.element !== null){
            return this.element.value;
        }else{
            return undefined;
        }
    }
    enQueue(value){
        const newNode = {
            value,
            next : this.element
        }
        this.element = newNode;
        this.queueLength++;
        return this;
    }
    deQueue(){
        const findElement = this.element.value;
        this.element = this.element.next;
        this.queueLength--;
        return findElement;
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
queue.enQueue(5);
console.log(queue.front())