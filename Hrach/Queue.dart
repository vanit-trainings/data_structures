import 'stack.dart';

class Queue {
  Queue() {
    _container1 = new stack();
    _container2 = new stack();
  }

  void push(value) {
    _container1.push(value);
  }

  dynamic top() {
    if (_container1.isEmpty() && _container2.isEmpty()) {
      return null;
    }
    if (_container2.isEmpty()) {
      transfer();
      return _container2.top();
    } else {
      return _container2.top();
    }
  }

  dynamic pop() {
    if (_container1.isEmpty() && _container2.isEmpty()) {
      return null;
    }
    if (_container2.isEmpty()) {
      transfer();
      return _container2.pop();
    } else {
      return _container2.pop();
    }
  }

  void clear() {
    if (!isEmpty()) {
      _container1.erase();
      _container2.erase();
    }
  }

  bool isEmpty() {
    return _container1.isEmpty() && _container2.isEmpty();
  }

  void print() {
    if (!_container2.isEmpty()) {
      _container2.printAll();
    }
    if (!_container1.isEmpty()) {
      _container1.printAll();
    }
  }

  void transfer() {
    while (!_container1.isEmpty()) {
      _container2.push(_container1.pop());
    }
  }

  stack _container1;
  stack _container2;
}

