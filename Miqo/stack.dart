import 'list.dart';

class stack {
  list l;
  stack() {
    l = new list();
  }
  void push(value) {
    l.pushBack(value);
  }

  dynamic top() {
    if (!l.isEmpty()) {
      return l.tale.value;
    }
    return null;
  }

  dynamic pop() {
    if (!l.isEmpty()) {
      var deleted_value = l.tale.value;
      l.remove(l.length - 1);
      return deleted_value;
    }
    return null;
  }

  void clear() {
    l.clear();
  }

  bool isEmpt() {
    return l.isEmpty();
  }

  void printBack() {
    l.printBack();
  }
  void printFront(){
    l.printFront();
  }
}


