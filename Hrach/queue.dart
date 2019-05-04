class node {
  node(value) {
    _prev = null;
    _value = value;
  }

  node _prev;
  var _value;
}

class queue {
  queue() {
    _tale = null;
    _vertex = null;
    _length = 0;
  }

  void push(var value) {
    node tmp = node(value);
    if (isEmpty()) {
      _vertex = tmp;
      _tale = tmp;
    } else {
      _tale._prev = tmp;
      _tale = tmp;
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
    _tale = null;
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

  node _tale;
  node _vertex;
  int _length;
}
