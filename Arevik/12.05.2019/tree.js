function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.makeNode = function(value) {
    var node = {};
    node.value = value;
    node.left = null;
    node.right = null;
    return node;
};

BinarySearchTree.prototype.add = function(value) {
    var currentNode = this.makeNode(value);
    if (!this.root) {
        this.root = currentNode;
    } else {
        this.insert(currentNode);
    }
    return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
    var value = currentNode.value;
    var traverse = function(node) {
        if (value === node.value) {
            return;
        } else if (value > node.value) {
            if (!node.right) {
                node.right = currentNode;
                return;
            } else
                traverse(node.right);
        } else if (value < node.value) {
            if (!node.left) {
                node.left = currentNode;
                return;
            } else
                traverse(node.left);
        }
    };
    traverse(this.root);
};

BinarySearchTree.prototype.contains = function(value) {
    var node = this.root;
    var traverse = function(node) {
        if (!node) return false;
        if (value === node.value) {
            return true;
        } else if (value > node.value) {
            return traverse(node.right);
        } else if (value < node.value) {
            return traverse(node.left);
        }
    };
    return traverse(node);
};

BinarySearchTree.prototype.printByLayer = function() {
    var node = this.root;
    var queue = [node];
    var result = [];
    while (node = queue.shift()) {
        result.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return result;
};

BinarySearchTree.prototype.inOrder = function() {
    var result = [];
    var node = this.root;
    var traverse = function(node) {
        node.left && traverse(node.left);
        result.push(node.value);
        node.right && traverse(node.right);
    };
    traverse(node);
    return result;
};

BinarySearchTree.prototype.getDepth = function() {
    var node = this.root;
    var maxDepth = 0;
    var traverse = function(node, depth) {
        if (!node) return null;
        if (node) {
            maxDepth = depth > maxDepth ? depth : maxDepth;
            traverse(node.left, depth + 1);
            traverse(node.right, depth + 1);
        }
    };
    traverse(node, 0);
    return maxDepth;
};

var bst = new BinarySearchTree();
bst.add(10).add(20).add(30).add(5).add(8);
console.log(bst.getDepth()); 
console.log('BST', bst);
console.log('printByLayer', bst.printByLayer());
console.log('INORDER', bst.inOrder());
console.log(bst.contains(15));
bst.add(3).add(9).add(55).add(65).add(75);
console.log(bst.contains(55));
console.log(bst.getDepth()); 