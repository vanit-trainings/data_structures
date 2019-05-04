import 'list.dart';

class queue {

  queue() {
    _container = new list();
  }

  dynamic push(var value) {
    _container.pushBack(value);
  }

  dynamic pop() {
    if(isEmpty()) {
      return null;
    }
    var rm = _container.vertex.value;
    _container.remove(0);
    return rm;
  }

  dynamic top() {
    if(isEmpty()) {
      return null;
    }
    return _container.vertex.value;
  }

  void erase() {
    if(!isEmpty()) {
      _container.clear();
    }
  }

  bool isEmpty() {
    return _container.length <= 0;
  }

  void print() {
    _container.printFront();
  }

  list _container;
}
