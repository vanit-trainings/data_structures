var stack1 = new stack();
var stack2 = new stack();

function enqueue(value) {
	stack1.push(value);
}

function dequeue() {
	if (stack2.size === 0) {
		if (stack1.size === 0) { 
			console.log ("Queue is empty.");
			return;
		}
		while (stack1.size > 0) {
			var elem = stack1.pop();
			stack2.push(elem);
		}
	}
	return stack2.pop();
}

