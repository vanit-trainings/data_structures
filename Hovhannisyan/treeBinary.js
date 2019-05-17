class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
};

class tree {
    constructor() {
        this.root = null;
        this.length = 0;
    }
    insertNode(node, tmpNode) {

        if (node.value < tmpNode.value) {
            if (node.right == null) {
                node.right = tmpNode;
            }
            else
                this.insertNode(node.right, tmpNode);
        }
        else {

            if (node.left == null) {
                node.left = tmpNode;
            }
            else
                this.insertNode(node.left, tmpNode);
        }
    }

    insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        }
        else
            this.insertNode(this.root, node);
    }
    isEmpty() {
        if (this.root !== null) {
            return false;
        }
        return true;
    }

    remove() {
        if (!this.isEmpty()) {
            this.root = null;
            this.length = 0;
        }
    }
    
    printLevel() {
        if (!this.root) {
            return console.log('No root node found');
        }
        let newline = new Node('|');
        let queue = [this.root, newline];
        let string = '';
        while (queue.length) {
            let node = queue.shift();
            string += node.value.toString() + ' ';
            if (node === newline && queue.length) queue.push(newline);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log(string.slice(0, -2).trim());
    }

    search(node, value) {
        if (node === null)
            return null;

        else if (value > node.value)
            return this.search(node.right, value);

        else if (value < node.value)
            return this.search(node.left, value);

        else
            return node;
    }
    findRoot() {
        return this.root;
    }
    printString() { }
    getMin(node) {
        if (!node) node = this.root;
        while (node.left) {
            node = node.left;
        }
        return node.value
    };
    removeNode(node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            // no children
            if (!node.left && !node.right) return null;
            // one child and it’s the right
            if (!node.left) node.right;
            // one child and it’s the left
            if (!node.right) node.left;

            // two kids
            const temp = this.getMin(node.right);
            node.value = temp;
            node.right = this.removeNode(node.right, temp);
            return node;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else {
            node.right = this.removeNode(node.right, value);
            return node;
        }
    };
    removeN(value) {
        this.root = this.removeNode(this.root, value);
    };
    printLeftToRight(node) {
        if (node === null) {
            return;
        }
        else {
            this.printLeftToRight(node.left);
            console.log(node.value);
            this.printLeftToRight(node.right);
        }
    }

    printRightToLeft(node) {
        if (node === null) {
            return;
        }
        else {
            this.printRightToLeft(node.right);
            console.log(node.value);
            this.printRightToLeft(node.left);
        }
    }
}
// a = new Node(15);
// t = new tree();
// t.insert(15);
// t.insert(11);
// t.insert(4);
//t.insert(5);
// t.insert(15); 
// t.insert(25); 
// t.insert(10); 
// t.insert(7); 
// t.insert(22); 
// t.insert(17); 
// t.insert(13);
// t.insert(35);
// t.insert(40);
// t.insert(42);
// t.insert(50);
// t.insert(55);
// t.insert(60);
// t.insert(62);
// t.insert(56);
// t.insert(54);
// t.insert(47);
// t.insert(46);
//t.remove()
var root = t.findRoot();
//t.printLeftToRight(root);
//console.log(t.search(40))
t.printRightToLeft(root);
//t.printNodesAtLevelK(root)
//t.removeN(42),
t.removeN(47)
t.removeN(42)
console.log("dfsfsdfdsfdf")
t.printRightToLeft(root);
//t.printLevel()
//console.log(t.findRoot())
//t.printLeftToRight(11);
