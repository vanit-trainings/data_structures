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

  node insertBefore(node ins, int value) {
    if(ins == null) {
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
    if(ins == null) {
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
    if (index < _length && index >= 0) {
      if (index == 0) {
        return pushFront(value);
      } else if (index == _length - 1) {
        return pushBack(value);
      } else {
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
    } else {
      return null;
    }
  }

  void remove(index) {
    if (index < 0 || index >= _length) {
      return;
    }
    if (index == 0) {
      _vertex._next?._prev = null;
      _vertex = _vertex._next;
    } else if (index == _length - 1) {
      _tale._prev?._next = null;
      _tale = _tale._prev;
    } else {
      node tmp = _vertex;
      for (var i = 0; i < index; i++) {
        tmp = tmp._next;
      }
      tmp._next._prev = tmp._prev;
      tmp._prev._next = tmp._next;
      tmp = null;
    }
    _length--;
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
    this.tale._next = n;
    n._prev = this.tale;
    length++;
    while (tmp._next != null) {
      length++;
      tmp = tmp._next;
    }
    this._tale = tmp;
  }

  node operator [](index) {
    if (index < 0 || index >= _length) {
      return null;
    }
    node tmp = _vertex;
    for (int i = 0; i < index; i++) {
      tmp = tmp._next;
    }
    return tmp;
  }

  get vertex => _vertex;
  get tale => _tale;
  get length => _length;

  set length(l) => _length = l;

  node _vertex;
  node _tale;
  int _length;
}

