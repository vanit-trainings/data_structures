class stack {
    constructor(){
        this.container = new Array();
    }
        isEmpty (){
            if(this.container.length !== 0){
            return false;
            }   
            return true;

        };
         push  ( value ){
            this.container.push(value);
        };
         pop (){
            if(!this.isEmpty()){
                this.container.pop()
            }
            return Number.MIN_VALUE;
        };
        top (){
            if(!this.isEmpty()){
                let value = this.container.last.value;
                return value;
            }
            return Number.MIN_VALUE;
        };  
        clear (){
            while(! this.isEmpty()){
                this.container.shift();
                this.container.length--;
            }
        };
        print (){
            for(let i = this.container.length-1 ;i >= 0 ;i--){
                console.log(container[i]);
            }
        };
        
};

let s = new stack();


class Queue {
    constructor() {
        this.container = new Array();
    }
    isEmpty (){
        if(this.container.length !== 0){
        return false;
        }   
        return true;
    }
    clear() {
        while(!this.container.isEmpty()){
            this.container.shift();
            this.container.length--;
        }
        
    }
    enqueue(node) {
        this.container.push(node);
    }
    dequeue() {
         if(!this.container.isEmpty()){
          return this.container.shift()
         }
    }
    first() {
        if(!this.container.isEmpty()) 
        return  this.container[0];
    }

    print() {
        for(i = 0;i<this.container.length;i++)
        {
            console.log(this.container[i]);
        }
    }
}
let q = new Queue();





class QueuewithStack {
    constructor() {
        this.container1 = new stack();
        this.container2 = new stack();
    }
    isEmpty() {//+++
        if (this.container1.length !== 0 || this.container2.length !== 0) {
            return false;
        }
        return true;
    }
    clear() {
        while (!this.container1.isEmpty()) {
            this.container1.shift();
            this.container1.length--;
        }
        while (!this.container2.isEmpty()) {
            this.container2.shift();
            this.container2.length--;
        }

    }
    enqueue(node) {//+++
        this.container.push(node);
    }
    dequeue() {//+++
        if (this.container2.isEmpty()) {
            if (!this.container1.isEmpty()) {
                while (!this.container1.isEmpty()) {
                    var add = this.container1.pop();
                    this.container2.push(add);
                }
            }
            else {
                const emp = "Queue is empty";
                return emp;
            }
        }
        return this.container2.pop();
    }
}


const q_s = new QueuewithStack();
