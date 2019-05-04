var stack = require("stack.js");
var stack1 = new stack();
var stack2 = new stack();

function enqueue(value) {
	stack1.push(value);
}

function swap(stack1, stack2) {
	while (stack1.size > 0) {
		var elem = stack1.pop();
		stack2.push(elem);
	}
}

function dequeue() {
	if (stack2.size === 0 && stack1.size === 0) {
		console.log("Queue is empty.");
		return;
	}
	if (stack2.size === 0) {
		swap(stack1, stack2);
		return stack2.pop();
	}
	return stack2.pop();
}

function top() {
	if (stack2.size === 0 && stack1.size === 0) {
		console.log("Queue is empty.");
		return;
	}
	if (stack2.size === 0) {
		swap(stack1, stack2);
		return stack2.top();
	}
	return stack2.top();
}

function isEmpty() {
	return stack1.isEmpty() && stack2.isEmpty();
}

function clear() {
	stack1.clear();
	stack2.clear();
}

function print() {
	let stack3 = new stack();
	swap(stack2, stack3);
	swap(stack1, stack2);
	swap(stack3, stack1);
	stack2.print();
}

