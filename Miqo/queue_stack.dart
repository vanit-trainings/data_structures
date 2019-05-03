import 'stack.dart';
class queue{
  stack s1;
  stack s2;
  queue(){
    s1 = new stack();
    s2 = new stack();
  }
  dynamic push(value){
    return s1.push(value);
  }
  dynamic pop(){
    if(s2.isEmpt() && s1.isEmpt()){
      return null;
    }
    else if(s2.isEmpt()){
      while(!s1.isEmpt()){
        s2.push(s1.pop());
      }
      return s2.pop();
    }
    else{
      return s2.pop();
    }
  }
  dynamic top(){
    if(s2.isEmpt() && s1.isEmpt()){
      return null;
    }
    else if(s2.isEmpt()){
      while(!s1.isEmpt()){
        s2.push(s1.pop());
      }
      return s2.top();
    }
    else{
      return s2.top();
    }
  }
  bool isEmpty(){
    return s1.isEmpt() && s2.isEmpt();
  }
  void clear(){
    if(!isEmpty()){
    s1.clear();
    s2.clear();
    }
  }
  void print(){
    s2.printBack();
    s1.printFront();
  }
}