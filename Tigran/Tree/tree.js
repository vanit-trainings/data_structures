class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}
class Tree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    insert(value){
        if (!this.root) {
            this.root = new Node(value);
            this.size++;
            return;
        }
        let tempNode = this.root;
        while (tempNode) {
            if (value < tempNode.value) {
                if (!tempNode.left) {
                    tempNode.left = new Node(value);
                    this.size++;
                    return;
                }
                tempNode = tempNode.left;
            }
            else if(value > tempNode.value){
                if (!tempNode.right) {
                    tempNode.right = new Node(value);
                    this.size++;
                    return;
                }
                tempNode = tempNode.right;
            }
            else{
                return;//havasar element ka
            }
        }
    }
    find(value){
        if(this.size === 0){
            return;
        }
        let temp = this.root;
        let parent;
        while (temp.value !== value) {
            if (value > temp.value) {
                if (temp.right) {
                    parent = temp;
                    temp = temp.right;
                    continue;
                }
                return;
            }else if (value < temp.value) {
                if (temp.left) {
                    parent = temp;
                    temp = temp.left;
                    continue;
                }
                return;
            }
        }
        // console.log(parent,"parent");
        return {temp,parent};
    }
    printInorder(node = this.root){//achman kargov
        if(node !== null) {
            this.printInorder(node.left);
            console.log(node.value);
            this.printInorder(node.right);
        }
    }
    printPastorder(node = this.root){//nvazman kargov
        if(node !== null) {
            this.printPastorder(node.right);
            console.log(node.value);
            this.printPastorder(node.left);
        }
    }
    remove(value){
        let wasDeletingNode = this.find(value).temp;
        let parentNode = this.find(value).parent;
        //console.log(wasDeletingNode, parentNode);
        if (!wasDeletingNode.left && !wasDeletingNode.right) {
            if (parentNode.left === wasDeletingNode) {
                parentNode.left = null;
                this.size--;
            }
            parentNode.right = null;
            this.size--;
            return wasDeletingNode;
        }else if (!wasDeletingNode.left) {

        }
    }
}


let testTree = new Tree();
testTree.insert(5);
testTree.insert(4);
testTree.insert(12);
testTree.insert(1);
testTree.insert(50);
testTree.insert(40);
testTree.insert(120);
testTree.insert(10);

//          5
//        /  \
//       4   12
//     /    / \
//    1   10  50
//           / \
//         40  120
//
//
