import '/home/vanit/data_structures/Hrach/list.dart';
import 'dart:math';
import '/home/vanit/data_structures/Hrach/quickSort.dart';

main() {
  List l = new List();
  list ll = new list();
  Random r = new Random();
  
  //  pushBack /////
  for (int i = 0; i < 20; ++i) {
    var n = r.nextDouble();
    l.add(n);
    ll.pushBack(n);
  }
  for (int i = 0; i < l.length; ++i) {
    assert(l[i] == ll[i]);
  }
/////////////////////////////////////

// isEmpty ///////////////////////
  l.clear();
  ll.clear();
  assert(l.isEmpty && ll.isEmpty());
////////////////////////////////////

  l.clear();
  ll.clear();

//  pushFront  /////////
  for (int i = 0; i < 20; ++i) {
    var n = r.nextDouble();
    l.insert(0, n);
    ll.pushFront(n);
  }
  for (int i = 0; i < l.length; ++i) {
    assert(l[i] == ll[i]);
  }
////////////////////////////////////

  l.clear();
  ll.clear();

//  insertOfIndex  //////////////
  for (int i = 0; i < 20; ++i) {
    var n = r.nextDouble();
    l.insert(i, n);
    ll.insertByIndex(i, n);
  }
  for (int i = 0; i < l.length; ++i) {
    assert(l[i] == ll[i]);
  }
////////////////////////////////

  l.clear();
  ll.clear();

// remove ////////////////////
  for (int i = 0; i < 20; ++i) {
    var n = r.nextInt(100);
    l.insert(i, n);
    ll.insertByIndex(i, n);
  }
  for (int i = 0; i < l.length ~/ 2; ++i) {
    l.removeAt(i);
    ll.remove(i);
  }
  for (int i = 0; i < l.length; ++i) {
    assert(l[i] == ll[i]);
  }
// ///////////////////////////////

// sort /////////////////////////
  l.sort();
  quick(ll, ll.vertex, ll.tale);
  for (int i = 0; i < l.length; ++i) {
    assert(l[i] == ll[i]);
  }
///////////////////////////////
}
