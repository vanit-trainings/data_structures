class LinkedList{
    constructor(){
        this.element = null;
        this.LinkedListLength = 0;
    }
    add(value){
        const newElement = {
            value,
            next : this.element
        }
        this.element = newElement;
        this.LinkedListLength++;
        return this;
    }
    get length(){
        return this.LinkedListLength
    }
    removeLaslElement(){
        const findElement = this.element;
        this.element = this.element.next
        this.LinkedListLength--;
        return findElement;
    }
    removeElement(value){///????sxala
        let newElement = null;
        if(this.element === null){
            return undefined;
        }
        if(this.element.value === value){
            const findElement = this.element;
            this.element = this.element.next;
            this.LinkedListLength--;
            return findElement;
        }
        while(this.element){
            if(this.element.next.value === value){
                const findElement = this.element.next;
                // this.element.next = this.element.next.next;
                newElement.next = this.element.next.next
                this.element = newElement;
                this.LinkedListLength--
                return findElement;
            }
            const newNode = {
                value : this.element.value,
                next : newElement
            }
            newElement = newNode;
            this.element = this.element.next;
        }
        return undefined;
    }
    find(value){
        if(this.element === null){
            return undefined;
        }
        while(this.element){
            if(this.element.value === value){
                return this.element;
            }

            this.element = this.element.next;
        }
        return undefined;
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
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
console.log(linkedList.find(5))
// linkedList.removeElement(1);
console.log(linkedList)