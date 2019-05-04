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
		return this.top;
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

let r = new Stack();
r.push(45);
r.push(46);
r.push(47);






// console.log(r,"lriv");
// console.log(r.pop(),"jnjvac@");
// console.log(r,"jnjveluc heto");



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