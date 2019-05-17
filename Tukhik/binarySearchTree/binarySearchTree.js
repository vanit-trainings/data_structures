function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}

BinarySearchTree.prototype.insert = function(val){
   let root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   let currentNode = root;
   let newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }

}

let bst = new BinarySearchTree();

bst.insert(3);
bst.insert(2);
bst.insert(4);
bst.insert(15);
bst.insert(5);

BinarySearchTree.prototype.minMax = function(node){
  if(node){
      this.minMax(node.left);
      console.log(node.value);
      this.minMax(node.right);
   }
}

BinarySearchTree.prototype.maxMin = function(node){
  if(node){
      this.maxMin(node.right);
      console.log(node.value);
      this.maxMin(node.left);
   }
}

 BinarySearchTree.prototype.height = function(node){
   if(!node) return 0;
   let leftHeight = this.height(node.left);
   let rightHeight = this.height(node.right);
   return Math.max(leftHeight, rightHeight) + 1;
}


console.log(bst);
console.log(bst.minMax(bst.root));
console.log(bst.maxMin(bst.root));
console.log(bst.height(bst.root));


