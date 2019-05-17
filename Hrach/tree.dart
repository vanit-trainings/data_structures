import 'dart:io';
import 'dart:math';

import 'Queue.dart';

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
    node delete = find(value);
    node tmp;
    if (delete == null) {
      return null;
    }

    if (delete == _root) {
      tmp = biggestNode(_root.left);

      if (tmp == null) {
        _root.right.parent == null;
        _root = _root.right;
      } else if (tmp == delete.left) {
        tmp.right = delete.right;
        delete.right?.parent = tmp;
        _root = tmp;
      } else {
        tmp.parent.right = tmp.left;
        tmp.left?.parent = tmp.parent;
        delete.left.parent = tmp;
        tmp.left = delete.left;
        delete.right?.parent = tmp;
        tmp.right = delete.right;
        _root = tmp;
      }
    } else {
      tmp = biggestNode(delete.left);

      if (delete == delete.parent.right) {
        if (tmp == null) {
          delete.parent.right = delete.right;
          delete.right?.parent = delete.parent;
        } else if (tmp == delete.left) {
          delete.parent.right = tmp;
          tmp.parent = delete.parent;
          delete.right?.parent = tmp;
          tmp.right = delete.right;
        } else {
          tmp.parent.right = tmp.left;
          tmp.left?.parent = tmp.parent;
          delete.left.parent = tmp;
          tmp.left = delete.left;
          delete.parent.right = tmp;
          tmp.parent = delete.parent;
          delete.right?.parent = tmp;
          tmp.right = delete.right;
        }
      } else {
        if (tmp == null) {
          delete.parent.left = delete.right;
          delete.right?.parent = delete.parent;
        } else if (tmp == delete.left) {
          delete.parent.lrft = tmp;
          tmp.parent = delete.parent;
          delete.right?.parent = tmp;
          tmp.right = delete.right;
        } else {
          tmp.parent.right = tmp.left;
          tmp.left?.parent = tmp.parent;
          delete.left.parent = tmp;
          tmp.left = delete.left;
          delete.parent.left = tmp;
          tmp.parent = delete.parent;
          delete.right?.parent = tmp;
          tmp.right = delete.right;
        }
      }
    }
    _length--;
  }

  bool isEmpty() {
    return _length == 0;
  }

  void clear() {
    _root = null;
    _length = 0;
  }

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

  node biggestNode(node root) {
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

  int leafQuantity(node r) {
    if (r == null) {
      return 0;
    }
    if (r.left == null && r.right == null) {
      return 1;
    }
    return leafQuantity(r.left) + leafQuantity(r.right);
  }

  int depth(node r) {
    if (r == null) {
      return 0;
    }
    return 1 + max(depth(r.left), depth(r.right));
  }

  void printLevel(node r) {
    if (r == null) {
      return;
    }
    Queue q = new Queue();
    q.push(r);
    node tmp;
    while (!q.isEmpty()) {
      tmp = q.top();
      print(tmp.value);
      q.pop();
      if (tmp._left != null) {
        q.push(tmp._left);
      }
      if (tmp._right != null) {
        q.push(tmp._right);
      }
    }
  }

  void printt(node r) {
    if (r == null) {
      return;
    }
    printt(r.right);
    print(r.value);
    printt(r.left);
  }

  get root => _root;
  get length => _length;

  set root(node r) => _root = r;

  node _root;
  int _length;
}

main(List<String> args) {
  tree t = new tree();
  t.insert(30);
  t.insert(45);
  t.insert(25);
  t.insert(16);
  t.insert(28);
  t.insert(26);
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

  t.printLevel(t.root);
  //print(t.leafQuantity(t.root));
  //print(t.depth(t.root));

  // print(t.find(8));
  // print(t.find(9));
  // t.remove(4);
  // t.remove(t.root.value);
  // print(t.root.value);
}
