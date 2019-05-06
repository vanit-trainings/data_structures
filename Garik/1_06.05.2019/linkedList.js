class LinkedList{
    constructor(){
        this.element = null;
        this.LinkedListLength = 0;
        this.Node = function(value, next = null){
            this.value = value;
            this.next = next
        }
    }
    push(value){
        this.element = new this.Node(value, this.element);
        this.LinkedListLength++;
        return this;
    }
    get length(){
        return this.LinkedListLength
    }
    top(){
        return this.isEmpty() ? undefined : this.element.value;
    }
    removeLastElement(){
        if(this.isEmpty()){
            return;
        }
        const findElement = this.top();
        this.element = this.element.next;
        this.LinkedListLength--;
        return findElement;
    }
    find(index){
        if(this.isEmpty() || index >= this.length || index < 0){
            return;
        }
        while(index !== this.length){
            this.element = this.element.next;
            index++;
        }
        return this.element;
    }
    isEmpty(){
        return this.element === null;
    }
    remove(){
        this.element = null;
        this.LinkedListLength = 0;
        return this;
    }
}
let linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
console.log(linkedList.find(3))
// linkedList.removeElement(1);
linkedList.removeLastElement()
// console.log(linkedList)