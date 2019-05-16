var node = function (value) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.data = value;
}

var tree = function () {
    this.root = null;
    this.length = 0;
}

tree.prototype.isEmpty = function () {
    return this.length === 0;
}

tree.prototype.clear = function () {
    this.root = null;
    this.length = 0;
}

tree.prototype.find = function (value) {
    if (!this.root) {
        return;
    } else {
        var tmp = this.root;
        for (tmp; tmp !== null; ) {
            if (tmp.data < value) {
                tmp = tmp.right;
            } else if (tmp.data > value) {
                tmp = tmp.left;
            } else {
                return tmp;
            }
        }
        return;
    }
}

tree.prototype.exist = function (value) {
    return this.find(value) !== undefined;
}

tree.prototype.insert = function (value) {
    let newNode = new node(value);
    if (!this.root) {
        this.root = newNode;
    } else {
        let tmp = this.root;
        while (true) {
            if (tmp.data > newNode.data) {
                if (tmp.left !== null) {
                    tmp = tmp.left;
                } else {
                    tmp.left = newNode;
                    break;
                }
            } else if (tmp.data < newNode.data) {
                if (tmp.right !== null) {
                    tmp = tmp.right;
                } else {
                    tmp.right = newNode;
                    break;
                }
            } else {
                return tmp;
            }
        }
        newNode.parent = tmp;
    }
    this.length++;
    return newNode;
}

tree.prototype.biggestNode = function () {
    
}

/*tree.prototype.remove = function (value) {
    if (!this.root) {
        return;
    }
    let deletedNode = this.find(value);
    if (!deletedNode) {
        return;
    }
    if () {

    }
}*/

tree.prototype.printInOrder = function (node) {
    if (!node) {
        return;
    }
    if (node === this.root) {
        console.log(this.root.data)
    }
    if (node.left !== null) {
        console.log(node.left.data);
    }
    if (node.right !== null) {
        console.log(node.right.data);
    }
    this.printInOrder(node.left);
    this.printInOrder(node.right);
}

tree.prototype.printInAscendingOrder = function (node) {
    if (!node) {
        return;
      }
    this.printInAscendingOrder(node.right);
    console.log(node.data);
    this.printInAscendingOrder(node.left);
}

tree.prototype.printInDescendingOrder = function (node) {
    if (!node) {
        return;
    }
    this.printInDescendingOrder(node.left);
    console.log(node.data);
    this.printInDescendingOrder(node.right);
}

tree.prototype.depth = function (node) {
    if (!node) {
        return 0;
    }
    return 1 + Math.max(this.depth(node.left), this.depth(node.right));
}

tree.prototype.leafCount = function (node) {
    if (!node) {
        return 0;
    }
    if (node.left === null && node.right === null) {
        return 1;
    }
    return this.leafCount(node.left) + this.leafCount(node.right);
}

var bst = new tree();
bst.insert(30);
bst.insert(45);
bst.insert(25);
bst.insert(16);
bst.insert(28);
bst.insert(26);
bst.printInDescendingOrder(bst.root);
console.log(bst.leafCount(bst.root));
console.log(bst.depth(bst.root))