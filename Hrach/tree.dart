import 'dart:io';

class node {
  node(value) {
    _left = null;
    _right = null;
    _value = value;
    _parent = null;
  }

  get left => _left;
  get right => _right;
  get parent => _parent;
  get value => _value;

  set left(node l) => _left = l;
  set right(node r) => _right = r;
  set parent(node p) => _parent = p;
  set value(var v) => _value = v;

  node _left;
  node _right;
  node _parent;
  var _value;
}

class tree {
  tree() {
    _root = null;
    _length = 0;
  }
  node insert(var value) {
    node newNode = new node(value);
    if (isEmpty()) {
      _root = newNode;
    } else {
      node tmp = _root;
      ;
      while (true) {
        if (newNode.value < tmp.value) {
          if (tmp.left != null) {
            tmp = tmp.left;
          } else {
            tmp.left = newNode;
            break;
          }
        } else if (newNode.value > tmp.value) {
          if (tmp.right != null) {
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
    _length++;
    return newNode;
  }

  dynamic remove(var value) {
    if (isEmpty()) {
      return null;
    }
    node tmp = find(value);
    node tmp1;

    if(tmp == null) {
      return null;
    }
    if (tmp.left != null) {
       tmp1 = biggestNode(tmp.left);
      if(tmp1.left !=null) {
        tmp1.left.parent = tmp1.parent;
        tmp1.parent.right = tmp1.left;
      }
      else {
        tmp1.parent.right = null;
      }
      tmp.parent?.right = tmp1;
      tmp1.parent = tmp.parent;
      tmp.right?.parent = tmp1;
      tmp1.right = tmp.right;
      tmp.left.parent = tmp1;
      tmp1.left = tmp.left;


    }
    else {
        tmp.right.parent = tmp.parent;
        tmp.parent?.right = tmp.right;
    }
    if(tmp == root){
      _root = tmp1;
    }
    _length--;
  }

  bool isEmpty() {
    return _length == 0;
  }

  void clear() {}

  node find(var value) {
    node tmp = _root;
    for (tmp; tmp != null;) {
      if (tmp.value == value) {
        return tmp;
      }
      if (tmp.value > value) {
        tmp = tmp.left;
      } else {
        tmp = tmp.right;
      }
    }
    return null;
  }
  node biggestNode (node root) {
    if (root == null) {
      return null;
    }
    if (root.right == null) {
      return root;
    }
    return biggestNode(root.right);
  //  node tmp = root;
  //  while(tmp.right != null) {
  //    tmp = tmp.right;
  //  }
  //  return tmp;
  }

  void printa() {}

  void printt(node r) {
    if (r == null) {
      return;
    }
    printt(r.right);
    stdout.write(r.value);
    printt(r.left);
  }

  get root => _root;
  get length => _length;

  set root(node r) => _root = r;
  //set length(int l) => _length = l;

  node _root;
  int _length;
}

main(List<String> args) {
  tree t = new tree();
  t.insert(4);
  t.insert(6);
  t.insert(7);
  t.insert(2);
  t.insert(3);
  t.insert(1);
  t.insert(9);
  t.insert(10);
  t.insert(20);
  t.printt(t.root);

  print(t.find(8));
  print(t.find(9));
  t.remove(2);
  t.printt(t.root);
}
