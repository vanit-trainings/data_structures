class Stack {
	constructor(){
		this.top = null;
		this.size = 0;
	}
	push(data){
		let node = {};
		node.data = data;
		node.previous = this.top;
		this.top = node;
		this.size++;
		return node;
	}
	pop(){
		if (this.size !== 0) {
			let deleted = this.top;
			this.top = deleted.previous;
			this.size--;
			return deleted;
		}
		return undefined
		
	}
	get isEmpty(){
		return (this.size === 0) ?  true : false;
	}
	clear(){
		this.top = null;
		this.size = 0;
	}

}

class QueueWithStack {
	constructor(){
		this.size = 0;
		this.stack = new Stack();//stack:{top : null, size : 0}
		this.list = new Stack();
	}
	

	enqueue(data){
		this.stack.push(data);
		this.size++;
		return this.stack.top;
	}
	dequeue(){
		if (this.list.size === 0 && this.stack.size === 0) {
			return undefined;
		}
		if (this.stack.size === 0) {
			return this.list.pop();
		}
		while(this.stack.size !== 0){
			this.list.push(this.stack.pop());
		}
		this.size--;
		return this.list.pop();
	}
	get isEmpty(){
        return (this.size === 0) ?  true : false;
    }
    get first(){
    	if (this.list.size !== 0) {
    		return this.list.top
    	}
    	let _first = this.stack.top;
    	while(_first.previous === null){
    		_first = _first.previous
    	}
    	return _first.previous;    	
    }
}