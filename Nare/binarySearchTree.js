var node = function (val) {
    this.value = val;
    this.parent = null;
    this.right = null;
    this.left = null;

}

var tree = function () {
    this.root = null;
    this.length = 0;
}

tree.prototype.isEmpty = function () {
    return this.length === 0;
}

tree.prototype.size = function () {
    return this.length;
}

tree.prototype.insert = function (value) {
    var newNode = new node(value);
    if (this.isEmpty()) {
        this.root = newNode;
        this.length++;
    }

    else {
        this.insertNode(this.root, newNode);
    }

}
tree.prototype.insertNode = function (node, newNode) {
    if (newNode.value === node.value) {
        return;
    }
    else if (newNode.value > node.value) {
        if (node.right === null) {
            node.right = newNode;
            this.length++;
        }
        else {
            this.insertNode(node.right, newNode);
        }
    }
    else if (newNode.value < node.value) {
        if (node.left === null) {
            node.left = newNode;
            this.length++;
        }
        else {
            this.insertNode(node.left, newNode)
        }
    }
}
tree.prototype.find = function (value) {
    if (this.isEmpty()) {
        return false;
    }
    else {
        return this.findElement(value, this.root);
    }
}
tree.prototype.findElement = function (value, node) {
    if (value === node.value) {
        return true;
    }
    else if (value > node.value) {
        if (node.right !== null) {
            return this.findElement(value, node.right);
        } else return false;
    }
    else if (value < node.value) {
        if (node.left !== null) {
            return this.findElement(value, node.left);
        }
        else return false;
    }
    else return false;
}

tree.prototype.remove = function (value) {
    if (this.find(value)) {
        return this.removeNodeValue(this.root, value);
    }
    else console.log('there is no such value in a tree');
}

tree.prototype.removeNodeValue = function (node, value) {
    if (value < node.value) {
        node.left = this.removeNodeValue(node.left, value);
        return node;
    }
    else if (value > node.value) {
        node.right = this.removeNodeValue(node.right, value);
        return node;
    }
    else {
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }
        if (node.right === null) {
            node = node.left;
            return node;
        }
        else if (node.left === null) {
            node = node.right;
            return node;
        }
        var minimum = this.findMinimumValue(node.right);
        node.value = minimum.value;
        node.right = this.removeNodeValue(node.right, minimum.value);
        return node;
    }
}
tree.prototype.findMinimumValue = function (node) {
    if (node.left === null) {
        return node;
    }
    else return this.findMinimumValue(node.left);
}

tree.prototype.print = function (root) {
    return this.printAllValues(root);
}

tree.prototype.printAllValues = function (node) {
    if (node === null) {
        return;
    }
    console.log(node.value);
    this.printAllValues(node.right);
    this.printAllValues(node.left);
    return node;
}

tree.prototype.depth = function (node) {
    if (this.isEmpty()) {
        return;
    }
    else {
        return this.maximumDepth(node, 1);
    }
}

tree.prototype.maximumDepth = function (node, number) {
    if (node.left === null && node.right === null) {
        return number;
    }
    else if (node.left && node.right) {
        number++;
        return Math.max(this.maximumDepth(node.left, number), this.maximumDepth(node.right, number));
    }
    else if (node.left !== null) {
        number++;
        return this.maximumDepth(node.left, number);
    }
    else if (node.right !== null) {
        number++;
        return this.maximumDepth(node.right, number);
    }
}

var test = new tree();
test.insert(15);
test.insert(10);
test.insert(13);
test.insert(7);
test.insert(5);
test.insert(9);
test.insert(25);
test.insert(22);
test.insert(27);
test.insert(17);
test.insert(18);
test.print(test.root);
console.log(test.depth(test.root));

console.log(test.size());
console.log(test.find(11678));
console.log(test.find(27));
console.log('roots' + '=' + test.root.value);
console.log(test.remove(15));
console.log('newroot' + '=' + test.root.value);
console.log(test.root.right.value);
