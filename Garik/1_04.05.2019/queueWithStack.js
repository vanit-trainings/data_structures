class QueueWithStack{
    constructor(){
        this.backStack = null;
        this.frontStack = null;
        this.queueWithStackLength = 0;
    }
    front(){
        if(this.frontStack !== null){
            let element = this.frontStack;
            while(element){
                if(element.prev === null){
                    return element.value;
                }
                element = element.prev;
            }
        }else if(this.backStack !== null){
            return this.backStack.value;
        }else{
            return undefined;
        }
    }
    back(){
        if(this.backStack !== null){
            return this.backStack.value;
        }else if(this.frontStack !== null){
            return this.frontStack.value;
        }else{
            return undefined;
        }
    }
    enQueue(value){
        const newNode = {
            value,
            prev : this.backStack
        }
        this.backStack = newNode;
        this.queueWithStackLength++
        return this;
    }
    deQueue(){
        if(this.frontStack === null && this.backStack === null){
            return undefined;
        }
        let findElement;
        if(this.frontStack !== null){
            findElement = this.frontStack.value;
            this.frontStack = this.frontStack.prev;
            return findElement;
        }
        this.frontStack = this.backStack;
        this.backStack = null;
        findElement = this.frontStack.value;
        this.frontStack = this.frontStack.prev;
        this.queueWithStackLength--;
        return findElement;
    }
    isEmpty(){
        return this.frontStack === null && this.backStack === null;
    }
    get length(){
        return this.queueWithStackLength;
    }
    clear(){
        this.frontStack = null;
        this.backStack = null;
        this.queueWithStackLength = 0;
        return this;
    }
}
let queueWithStack = new QueueWithStack();
queueWithStack.enQueue(1)
queueWithStack.enQueue(2)
queueWithStack.enQueue(3)
queueWithStack.enQueue(4)
queueWithStack.enQueue(5)
queueWithStack.deQueue()
queueWithStack.deQueue()
queueWithStack.enQueue(11)
console.log(queueWithStack.front())
console.log(queueWithStack)