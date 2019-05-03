import 'list.dart';

class queue{
  list q;
  queue(){
    q = new list();
  }
  dynamic push(value){
   return q.pushBack(value).value;
  }
  dynamic pop(){
    var tmp = q.vertex.value;
    q.remove(0);
    return tmp;
  }
  bool isEmpty(){
    return q.isEmpty();
  }
  void clear(){
    q.clear();
  }
  dynamic top(){
    return q.vertex.value;
  }
  void print(){
    q.printFront();
  }
}