class Stack {
	constructor(){
		this._top = null;
		this._size = 0;
	}
	push(data){
		let node = {
			data : data,
			previous : this._top
		};
		this._top = node;
		this._size++;
		return node;
	}
	pop(){
		if (!this.isEmpty()) {
			let deleted = this._top;
			this._top = deleted.previous;
			this._size--;
			return deleted;
		}
		return;
	}
	isEmpty(){
		return this._size === 0;
	}
	clear(){
		this._top = null;
		this._size = 0;
	}
}

class QueueWithStack {
	constructor(){
		this._size = 0;
		this.back = new Stack();//stack:{_top : null, size : 0}
		this.front = new Stack();
	}
	enqueue(data){
		this.back.push(data);
		this._size++;
	}
	dequeue(){
		if (this.front.isEmpty()) {
            if (this.back.isEmpty()) {
            	return;
            }
            while (!this.back.isEmpty()) {
                let step = this.back.pop();
                this.front.push(step);
            }
        }
        this._size--;
        return this.front.pop().data;
	}
	isEmpty(){
        return this._size === 0;
    }
    first(){
    	if (!this.front.isEmpty()) {
    		return this.front._top;
    	}
		//front is isEmpty
		if (this.back.isEmpty()) {return};
		// back is not empty
		let _first = this.back._top;
		while (_first.previous !== null) {
			_first = _first.previous;
		}
		return _first.data;
    }
	clear(){
		this._size = 0;
		this.back = new Stack();//stack:{_top : null, size : 0}
		this.front = new Stack();//stack:{_top : null, size : 0}
	}
}
