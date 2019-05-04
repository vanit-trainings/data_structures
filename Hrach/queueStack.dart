class node {
  node(value) {
    _prev = null;
    _value = value;
  }

  node _prev;
  var _value;
}

class queueStack {
  queueStack() {
    _container1 = stack();
    _container2 = stack();
    _vertex = null;
    _tale = null;
    _length = 0;
  }

  void push(var value) {
    _container1.push(value);
    _length++;
  }

  dynamic pop() {
    if (_container1.isEmpty() && _container2.isEmpty()) {
      return null;
    }
    if (_container2.isEmpty()) {
      _transfer(_container1, _container2);
      return _container2.pop();
    }
      return _container2.pop();
  }

  dynamic top() {
    if(_container1.isEmpty() && _container2.isEmpty()) {
      return null;
    }
    if(_container2.isEmpty()) {
      _transfer(_container1, _container2);
      return _container2.top();
    }
    return _container2.top();
  }

  void erase() {
    _container1.erase();
    _container2.erase();
  }

  bool isEmpty() {
     return _container1._length == 0 && _container2._length == 0;
  }

  void printAll() {
    stack tmp = stack();
    _transfer(_container2, tmp);
    _transfer(_container1, _container2);
    _transfer(tmp, _container2);
    _container2.printAll();
  }

  void _transfer(stack cont1, stack cont2) {
    while (!cont1.isEmpty()) {
      cont2.push(cont1.pop());
    }
  }

  stack _container1;
  stack _container2;
  node _vertex;
  node _tale;
  int _length;
}
