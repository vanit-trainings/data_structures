class Stack{
    constructor(){
        this.element = null;
        this.stackLength = 0;
    }
    add(value){
        const newNode = {
            value,
            prev : this.element
        }
        this.element = newNode;
        this.stackLength++
        return this;
    }
    pop(){
        const findElement = this.stack.prev;
        this.stack = this.stack.prev;
        this.stackLength--;
        return findElement;
    }
    isEmpty(){
        return this.element === null;
    }
    get length(){
        return this.stackLength;
    }
    remove(){
        this.stack = null;
        this.stackLength = 0;
    }
}
let stack = new Stack();
stack.add(1)
stack.add(2)
stack.add(3)
stack.add(4)
stack.add(5)
console.log(stack)