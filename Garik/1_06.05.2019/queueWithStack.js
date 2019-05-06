//stack
class Stack{
    constructor(){
        this.element = null;
        this.stackLength = 0;
        this.Node = function(value, prev = null){
            this.value = value;
            this.prev = prev
        }
    }
    push(value){
        this.element = new this.Node(value, this.element);
        this.stackLength++
        return this;
    }
    top(){
        return this.isEmpty() ? undefined : this.element.value;
    }
    pop(){
        if(this.isEmpty()){
            return
        }
        const deleted = this.top();
        this.element = this.element.prev;
        this.stackLength--;
        return deleted;
    }
    isEmpty(){
        return this.element === null;
    }
    get length(){
        return this.stackLength;
    }
    remove(){
        this.element = null;
        this.stackLength = 0;
    }
    buttom(){
        if(isEmpty())
        while(this.element.prev !== null){
            this.element = this.element.prev;
        }
        return this.element.value;
    }
}
//queue with stack
class QueueWithStack{
    constructor(){
        this.backStack = new Stack();
        this.frontStack = new Stack();
        this.queueWithStackLength = 0;
    }
    front(){
        if(!this.frontStack.isEmpty()){
            return this.frontStack.top();
        }else if(!this.backStack.isEmpty()){
            return this.backStack.buttom();
        }else{
            return undefined;
        }
    }
    back(){
        if(!this.backStack.isEmpty()){
            return this.backStack.top();
        }else if(!this.frontStack.isEmpty()){
            return this.frontStack.buttom();
        }else{
            return;
        }
    }
    enQueue(value){
        this.backStack = this.backStack.push(value);
        this.queueWithStackLength++
        return this;
    }
    deQueue(){
        if(this.isEmpty()){
            return;
        }
        let deleted;
        if(!this.frontStack.isEmpty()){
            deleted = this.frontStack.top();
            this.frontStack.pop();
            return deleted;
        }
        while(!this.backStack.isEmpty()){
            this.frontStack.push(this.backStack.pop());
        }
        deleted = this.frontStack.top();
        this.frontStack.pop();
        this.queueWithStackLength--;
        return deleted;
    }
    isEmpty(){
        return this.frontStack.isEmpty() && this.backStack.isEmpty();
    }
    get length(){
        return this.queueWithStackLength;
    }
    clear(){
        this.frontStack = new Stack();
        this.backStack = new Stack();
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
console.log(queueWithStack.front())