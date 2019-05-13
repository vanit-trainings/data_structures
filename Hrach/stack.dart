class node {
  node(value) {
    _prev = null;
    _value = value;
  }

  node _prev;
  var _value;
}

class stack {
  stack() {
    _vertex = null;
    _length = 0;
  }

  void push(var value) {
    node tmp = node(value);
    if (isEmpty()) {
      _vertex = tmp;
    } else {
      tmp._prev = _vertex;
      _vertex = tmp;
    }
    _length++;
  }

  dynamic pop() {
    if (isEmpty()) {
      return null;
    }
    var val = _vertex._value;
    _vertex = _vertex._prev;
    _length--;
    return val;
  }

  dynamic top() {
    return isEmpty() ? null : _vertex._value;
  }

  void erase() {
    _vertex = null;
    _length = 0;
  }

  bool isEmpty() {
    return _length == 0;
  }

  void printAll() {
    node tmp = _vertex;
    while (tmp != null) {
      print(tmp._value);
      tmp = tmp._prev;
    }
  }

  get length => _length;
  node _vertex;
  int _length;
}
