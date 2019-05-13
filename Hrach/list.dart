import 'dart:io';

class node {
  node(value) {
    _prev = null;
    _next = null;
    _value = value;
  }

  get prev => _prev;
  get next => _next;
  get value => _value;

  set prev(node p) => _prev = p;
  set next(node n) => _next = n;
  set value(var v) => _value = v;

  node _prev;
  node _next;
  var _value;
}

class list {
  list() {
    _vertex = null;
    _tale = null;
    _length = 0;
  }

  node pushBack(value) {
    var nodes = node(value);
    if (isEmpty()) {
      _vertex = nodes;
      _tale = nodes;
    } else {
      nodes._prev = _tale;
      _tale._next = nodes;
      _tale = nodes;
    }
    _length++;
    return nodes;
  }

  node pushFront(value) {
    var front = node(value);
    if (isEmpty()) {
      _vertex = front;
      _tale = front;
    } else {
      front._next = _vertex;
      _vertex._prev = front;
      _vertex = front;
    }
    _length++;
    return front;
  }

  node pushNodeByFront(node n) {
    if (isEmpty()) {
      _vertex = n;
      _tale = n;
    } else {
      n.next = _vertex;
      _vertex._prev = n;
      _vertex = n;
    }
    _length++;
    return _vertex;
  }

  node insertBeforeWithNode(node n, node before) {
    if (isEmpty() || before == null || n == null) {
      return null;
    }
    if (before == _vertex) {
      return pushNodeByFront(n);
    }
    n.prev = before.prev;
    before.prev.next = n;
    n.next = before;
    before.prev = n;
    _length++;
    return n;
  }

  node insertBefore(node ins, int value) {
    if (ins == null) {
      return null;
    }
    node tmp = node(value);

    tmp.prev = ins.prev;
    ins.prev.next = tmp;
    tmp.next = ins;
    ins.prev = tmp;

    _length++;
    return tmp;
  }

  node insertAfter(node ins, int value) {
    if (ins == null) {
      return null;
    }
    node tmp = node(value);

    tmp.next = ins.next;
    ins.next.prev = tmp;
    tmp.prev = ins;
    ins.next = tmp;

    _length++;
    return tmp;
  }

  node insertByIndex(index, value) {
    if (index < 0 ||
        (!isEmpty() && index >= length + 1) ||
        (isEmpty() && index != 0)) {
      return null;
    }
    if (index == 0) {
      return pushFront(value);
    }
    if (index == _length) {
      return pushBack(value);
    }
    var ins = node(value);
    node tmp = _vertex;
    for (var i = 0; i < index; i++) {
      tmp = tmp._next;
    }
    tmp._prev._next = ins;
    ins._prev = tmp._prev;
    tmp._prev = ins;
    ins._next = tmp;
    _length++;
    return ins;
  }

  node remove(index) {
    if (index < 0 || index >= _length) {
      return null;
    }
    node tmp = _vertex;
    if (index == 0) {
      _vertex._next?._prev = null;
      _vertex = _vertex._next;
    } else if (index == _length - 1) {
      _tale._prev?._next = null;
      tmp = _tale;
      _tale = _tale._prev;
    } else {
      for (var i = 0; i < index; i++) {
        tmp = tmp._next;
      }
      tmp._next._prev = tmp._prev;
      tmp._prev._next = tmp._next;
    }
    _length--;
    return tmp;
  }

  node removeNode(node lost) {
    if (lost == null) {
      return null;
    }
    if (lost == _vertex) {
      return remove(0);
    } else if (lost == _tale) {
      return remove(this.length - 1);
    } else {
      node tmp = _vertex;
      //insurance,  complexity = O(n)
      while (tmp != null) {
        if (tmp == lost) {
          tmp.prev.next = tmp.next;
          tmp.next.prev = tmp.prev;
          length--;
          return tmp;
        }
        tmp = tmp._next;
      }
      return null;
    }
  }

  void printFront() {
    node tmp = _vertex;
    while (tmp != null) {
      var y = tmp._value;
      stdout.write('$y ');
      tmp = tmp._next;
    }
    print('');
  }

  void printBack() {
    node tmp = _tale;
    while (tmp != null) {
      var y = tmp._value;
      stdout.write('$y ');
      tmp = tmp._prev;
    }
    print('');
  }

  bool isEmpty() {
    return _length == 0;
  }

  void clear() {
    if (isEmpty()) {
      return;
    }
    while (_vertex._next != null) {
      _vertex = _vertex._next;
      _vertex._prev = null;
    }
    _vertex = null;
    _tale = null;
    _length = 0;
  }

  void intersection(node n) {
    if (n == null) {
      return;
    }
    var tmp = n;
    _tale._next = n;
    n._prev = _tale;
    length++;
    while (tmp._next != null) {
      length++;
      tmp = tmp._next;
    }
    _tale = tmp;
  }

  dynamic operator [](index) {
    if (index < 0 || index >= _length) {
      return null;
    }
    node tmp = _vertex;
    for (int i = 0; i < index; i++) {
      tmp = tmp._next;
    }
    return tmp._value;
  }

  get vertex => _vertex;
  get tale => _tale;
  get length => _length;

  set length(l) => _length = l;
  set vertex(v) => _vertex = v;
  set tale(t) => _tale = t;
  node _vertex;
  node _tale;
  int _length;
}
