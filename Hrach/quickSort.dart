import 'list.dart';
//import 'dart:math';

//import 'dart:io';
node piv = null;
node piv0 = null;
list l = list();
bool isOne = true;
void quick(list l, node vertex, node tale) {
  if (vertex != tale) {
    l.printFront();
    quickSort(l, vertex, tale);
    //print(tmp.value);
    if (piv.prev != null) {
      print('object');
      quick(l, l.vertex, piv.prev);
    }
    if (isOne) {
      if (piv0.next != null) {
        isOne = false;
        quick(l, piv0.next, l.tale);
      } else {
        if (piv.next != null) {
          quick(l, piv.next, l.tale);
        }
      }
    }
  }
}

node quickSort(list l, node vertex, node tale) {
  if (vertex == null && tale == null) {
    return null;
  }
  if (vertex == null) {
    return tale;
  }
  if (tale == null) {
    return vertex;
  }
  print("ver:" + vertex.value.toString());
  print("tale:" + tale.value.toString());
  node pivot = tale;
  node index = vertex;
  for (node i = vertex; i != tale; i = i.next) {
    if (i.value <= pivot.value) {
      print("i :" + i.value.toString());
      print("pivot :" + pivot.value.toString());
      swap(l, index, i);
      node tmp = index;
      index = i;
      i = tmp;
      index = index.next;
    }
  }
  swap(l, index, pivot);

  //print("//////////////////////////////////");
  //l.printFront();
  piv = pivot;
  piv0 ??= pivot;
  return piv;
}

void swap(list l, node n1, node n2) {
  if (n1 == null || n2 == null || n1 == n2) {
    return;
  }
  if (n1.next == n2) {
    n1.prev?.next = n2;
    n2.next?.prev = n1;

    n1.next = n2.next;
    n2.prev = n1.prev;
    n1.prev = n2;
    n2.next = n1;
  } else {
    n1.next?.prev = n2;
    n1.prev?.next = n2;
    n2.next?.prev = n1;
    n2.prev?.next = n1;

    node tmp = n1.prev;
    n1.prev = n2.prev;
    n2.prev = tmp;
    tmp = n1.next;
    n1.next = n2.next;
    n2.next = tmp;
  }

  if (n1 == l.vertex && n2 == l.tale) {
    // print("n1 : " + n1.value.toString());
    // print("n2 : " + n2.value.toString());
    // print("vertex : " + l.vertex.value.toString());
    // print("tale : " + l.tale.value.toString());

    node tmp = l.vertex;
    l.vertex = l.tale;
    l.tale = tmp;
  } else if (n1 == l.vertex) {
    l.vertex = n2;
  } else if (n2 == l.tale) {
    l.tale = n1;
  }
}

main(List<String> args) {
  // var rng = new Random();
  // for (int i = 0; i < 5; i++) {
  //   //l.pushBack(rng.nextInt(100));
  //   l.pushBack(i);
  //   l.pushBack(2);
  // }
  l.pushBack(45);
  l.pushBack(37);
  l.pushBack(98);
  l.pushBack(39);
  l.pushBack(89);
  l.pushBack(60);
  l.pushBack(25);
  l.pushBack(40);

  //l.printFront();
  quick(l, l.vertex, l.tale);
  l.printFront();
  // swap(l, l.vertex, l.tale);
  // print("ver :"+ l.vertex.value.toString());
  // print("tale :"+ l.tale.value.toString());

  //l.printFront();
}
