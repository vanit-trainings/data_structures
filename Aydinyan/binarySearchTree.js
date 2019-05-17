let queue =new (require('./queueViaList'))();

class node {
    constructor (val, l = null, r = null, p = null) {
        this.value = val;
        this.left = l;
        this.right = r;
        this.parent = p;
    }
}

class tree {
    constructor () {
        this._root = null;
        this._length = 0;
    }

    isEmpty() {
        return this._length === 0;
    }

    size() {
        return this._length;
    }

    clear() {
        this._root = null;
        this._length = 0;
    }

    insert (val, nod = this._root) {        
        if (this.isEmpty()) {
            this._root = new node(val);
            this._length++;
        }
        else {
            if (val > nod.value) {
                if (nod.right != null) {
                    return this.insert(val, nod.right)
                }
                else {
                    nod.right = new node(val, null, null, nod);
                    this._length++;
                }
            }
            else if (val < nod.value) {
                if (nod.left != null) {
                    return this.insert(val, nod.left)
                }
                else {
                    nod.left = new node(val, null, null, nod);
                    this._length++;
                }
            }
            else {
                nod.value = val;
            }
        }
    }

    find(val, node = this._root) {
        if (this.isEmpty()) {
            return ;
        }
        else {
            if (val === node.value) {
                return node;
            }
            else if (val > node.value) {
                if (node.right) {
                    return this.find(val, node.right)
                }
                else {
                    return ;
                }
            }
            else if (val < node.value) {
                if (node.left) {
                    return this.find(val, node.left)
                }
                else {
                    return ;
                }
            }
        }
    }

    getMaxElement(node = this._root) {
        if (this.isEmpty()) {
            return ;
        }
        else {
            if (node.right) {
                return this.getMaxElement(node.right);
            }
            else {
                return node;
            }
        }
    }

    getMinElement(node = this._root) {
        if (this.isEmpty()) {
            return ;
        }
        else {
            if (node.left) {
                return this.getMinElement(node.left);
            }
            else {
                return node;
            }
        }
    }

    printDescending(node = this._root) {
        if (!node) {
            return ;
        }
        else {
            this.printDescending(node.right);
            console.log(node.value);
            this.printDescending(node.left);
        }
    }

    printAscending(node = this._root) {
        if (!node) {
            return ;
        }
        else {
            this.printAscending(node.left);
            console.log(node.value);
            this.printAscending(node.right);
        }
    }

    printLevels() {
        if (this._root == null) {
           return ;
        }
        queue.push(this._root);
        while (!queue.isEmpty()) {
            let tmp = queue.pop();
            console.log(tmp.value);
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }
    }

    getLevelsCount(node = this._root) {
        if(!node) {
            return 0;
        }
        return 1 + (this.getLevelsCount(node.left) <= this.getLevelsCount(node.right) ? this.getLevelsCount(node.right) : this.getLevelsCount(node.left));
    }

    getLeavesCount(node = this._root) {
        if (!node) {
            return 0;
        }
        if (!node.left && !node.right) {
            return 1 ;
        }
        return this.getLeavesCount(node.left) + this.getLeavesCount(node.right);
    }

    _moveNode (node1, node2) {
        if (node2.parent !== node1) {
            if (node1.left) {
                node1.left.parent = node2;
            }
            node1.right.parent = node2;
            node2.left = node1.left;
            if (node2.right) {
                node2.parent.left = node2.right;
                node2.right.parent = node2.parent;
            }
            else {
                node2.parent.left = null;
            }
            node2.right = node1.right;
            if (node1 == this._root) {
                this._root = node2; 
            }
            else {
                if (node1.parent.value > node1.value) {
                    node1.parent.left = node2;
                }
                else {
                    node1.parent.right = node2;
                }
            }
            node2.parent = node1.parent;
        }
        else {
            node2.left = node1.left;
            if (node1 == this._root) {
                this._root = node2;
                node2.parent = null;
            }
            else {
                node1.parent.right = node2;
                node2.parent = node1.parent;
            }
            if (node1.left) {
                node1.left.parent = node2;
            }
        }
        this._length--;
    }

    remove(val) {
        let nod = this.find(val);
        if(!nod) {
            return ;
        }
        if (node == this._root && this.size() == 1) {
            this._root = null;
            this._length--;
            return node.value;
        }
        if (!nod.left && !nod.right) {
            if (nod.value < nod.parent.value) {
                nod.parent.left = null;
                this._length--;
                return node.val;
            }
            else {
                nod.parent.right = null;
                this._length--;
                return node.val;
            }
        }
        else if (!nod.right) {
            if (nod.value < nod.parent.value) {
                nod.parent.left = nod.left;
            }
            else {
                nod.parent.right = nod.left;
            }
            if (nod.left) {
                nod.left.parent = nod.parent;
            }
            return nod.val;
        }
        else {
            this._moveNode(nod, this.getMinElement(nod.right));
            return nod.val;
        }
    }
}

let t = new tree();
t.insert(30);
t.insert(45);
t.insert(25);
t.insert(16);
t.insert(28);
t.insert(26)
t.insert(18);
t.insert(17);
t.insert(35);
t.insert(50);
t.insert(38);
t.insert(48);
t.insert(60);
t.insert(37);
t.insert(40);
t.insert(65);


//console.log(t.size());
//t.printDescending();
//console.log('xxxxxxxxx');
//t.printAscending();
//console.log('xxxxxxxxx');
//t.remove(65);
//console.log(t.size());
//console.log('xxxxxxxxx');
//t.printDescending();
//console.log('xxxxxxxxx');
//t.printAscending();
//console.log('xxxxxxxxx');
t.printLevels();
// console.log('xxxxxxxxx');
// console.log(t.getLevelsCount())
// console.log('xxxxxxxxx');
// console.log(t.getLeavesCount());