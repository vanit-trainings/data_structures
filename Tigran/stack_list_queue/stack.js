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
	size(){
		return this._size;
	}
	top(){
		return this._top;
	}
}

let r = new Stack();
r.push(45);
r.push(46);
r.push(47);

// Stack = {
// 	size : 3,
// 	top : {
// 		data : 47
// 		previous : {
// 			data : 46
// 			previous : {
// 				data : 45
// 				previous : null
// 			}
// 		}
// 	}  
// }