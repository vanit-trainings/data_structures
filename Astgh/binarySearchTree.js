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
        for (tmp; tmp !== null;) {
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

tree.prototype.isExist = function (value) {
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

tree.prototype.biggestNode = function (node) {
    if (!node) {
        return;
    }
    if (node.right === null) {
        return node;
    }
    return this.biggestNode(node.right);
}

tree.prototype.smallestNode = function (node) {
    if (!node) {
        return;
    }
    if (node.left === null) {
        return node;
    }
    return this.smallestNode(node.left);
}

tree.prototype.remove = function (value) {
    let deletedNode = this.find(value);
    if (!deletedNode) {
        return;
    }
    let tmp;
    if (value === this.root.data) {
        tmp = this.biggestNode(this.root.left);
        if (!tmp) {
            this.root.right.parent = null;
            this.root = this.root.right;
        } else if (tmp === deletedNode.left) {
            tmp.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
            this.root = tmp;
        } else {

            if (tmp.left) {

                tmp.left.parent = tmp.parent;
            }
            tmp.parent.right = tmp.left;
            deletedNode.left.parent = tmp;
            tmp.left = deletedNode.left;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
            tmp.right = deletedNode.right;
            this.root = tmp;
        }
    } else if (deletedNode === deletedNode.parent.left) {
        tmp = this.biggestNode(deletedNode.left);
        if (!tmp) {
            deletedNode.parent.left = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = deletedNode.parent;
            }
        } else if (tmp === deletedNode.left) {
            tmp.parent = deletedNode.parent;
            deletedNode.parent.left = tmp;
            tmp.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
        } else {
            tmp.parent.right = tmp.left;
            if (tmp.left) {
                tmp.left.parent = tmp.parent;
            }
            tmp.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
            deletedNode.parent.left = tmp;
            tmp.parent = deletedNode.parent;
            tmp.left = deletedNode.left;
            deletedNode.left.parent = tmp;
        }
    } else {
        tmp = this.biggestNode(deletedNode.left);
        if (!tmp) {
            deletedNode.parent.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = deletedNode.parent;
            }
        } else if (tmp === deletedNode.left) {
            deletedNode.parent.right = deletedNode.left;
            deletedNode.left.parent = deletedNode.parent;
            tmp.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
        } else {
            tmp.parent.right = tmp.left;
            if (tmp.left) {
                tmp.left.parent = tmp.parent;
            }
            tmp.right = deletedNode.right;
            if (deletedNode.right) {
                deletedNode.right.parent = tmp;
            }
            deletedNode.parent.right = tmp;
            tmp.parent = deletedNode.parent;
            tmp.left = deletedNode.left;
            deletedNode.left.parent = tmp;
        }
    }
}

tree.prototype.printLeaf = function (node) {
    if (!node) {
        return;
    }
    if (!node.left && !node.right) {
        console.log(node.data);
    } else {
        this.printLeaf(node.left);
        this.printLeaf(node.right);
    }
}

tree.prototype.print = function (root, level) {
    if (!root) {
        return;
    }
    if (level === 1) {
        console.log(root.data);
    } else if (level > 1) {
        this.print(root.left, level - 1);
        this.print(root.right, level - 1);
    }
}

tree.prototype.printInOrder = function (root) {
    let height = this.depth(root);
    for (let i = 1; i <= height; ++i) {
        this.print(root, i);
    }
}

tree.prototype.printInDescendingOrder = function (node) {
    if (!node) {
        return;
    }
    this.printInDescendingOrder(node.right);
    console.log(node.data);
    let level = this.depth(node);
    this.printInDescendingOrder(node.left);
}

tree.prototype.printInAscendingOrder = function (node) {
    if (!node) {
        return;
    }
    this.printInAscendingOrder(node.left);
    console.log(node.data);
    this.printInAscendingOrder(node.right);
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
bst.insert(18);
bst.insert(17);
bst.insert(35);
bst.insert(50);
bst.insert(38);
bst.insert(48);
bst.insert(60);
bst.insert(37);
bst.insert(40);
bst.insert(65);
console.log('printInOrder');
bst.printInOrder(bst.root);
bst.remove(40);
console.log('printLeaf');
bst.printLeaf(bst.root);
console.log('printInOrder after remove(40)');
bst.printInOrder(bst.root);
console.log('printInDescendingOrder');
bst.printInDescendingOrder(bst.root);
console.log('printInAscendingOrder');
bst.printInAscendingOrder(bst.root);
console.log('leafCount');
console.log(bst.leafCount(bst.root));
console.log('depth');
console.log(bst.depth(bst.root));
console.log('smallestNode(data)');
console.log(bst.smallestNode(bst.root).data);
console.log('isExist(32)');
console.log(bst.isExist(32));