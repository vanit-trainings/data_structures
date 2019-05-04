import 'list.dart';

class stack {
  stack() {
    _container = new list();
  }

  void push(value) {
    _container.pushBack(value);
  }

  dynamic top() {
    if (!_container.isEmpty()) {
      return _container.tale.value;
    }
    return null;
  }

  dynamic pop() {
    if (!_container.isEmpty()) {
      var rm = _container.tale.value;
      _container.remove(_container.length - 1);
      return rm;
    }
    return null;
  }

  void clear() {
    if(!isEmpty()) {
    _container.clear();
    }
  }

  bool isEmpty() {
    return _container.isEmpty();
  }

  void printBack() {
    _container.printBack();
  }

  void printFront() {
    _container.printFront();
  }

  list _container;
}
