
import 'list.dart';
//1import 'dart:io';

class wraper {
  node n;
}

void quick(list l, node skizb, node verj) {
  if (skizb == null || verj == null || skizb == verj) {
    return;
  }
  else {
  node n = new node(2);
  node piv = quickSort(l, skizb, verj, n);

  print("piv =" +piv.value.toString());
  if (piv == null) {
    return;
  }
  quick(l, n.next, piv.prev);
  quick(l, piv.next, n.prev);
}
}
node quickSort(list l, node skizb, node verj, node newnode) {
  if (skizb == null || verj == null) {
    return null;
  }
  l.printFront();
  print("skizb = " +
      skizb.value.toString() +
      ": verj = " +
      verj.value.toString());
  if (skizb != verj) {
    node index = skizb.prev;

    for (node tmp = skizb; tmp != verj; tmp = tmp.next) {
      if (tmp != null) {
        

        if (tmp.value <= verj.value) {
          index = (index == null) ? skizb : index.next;
          swap(l, index, tmp);
          node tmp1 = index;
          index = tmp;
          tmp = tmp1;
        }
      }
    }
    index = (index == null) ? skizb : index.next;
    swap(l, index, verj);
  }
  newnode.next = l.vertex;
  newnode.prev = l.tale;
  print("newnode = "+ newnode.value.toString());
  return verj;
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
  list l = new list();
  l.pushBack(14);
  l.pushBack(35);
  l.pushBack(9);
  l.pushBack(97);
  l.pushBack(22);
  l.pushBack(28);
  l.pushBack(15);
  l.pushBack(40);
  l.pushBack(91);
  l.pushBack(80);
  l.pushBack(5);
  l.pushBack(8);
  l.pushBack(26);
  l.pushBack(75);
  l.pushBack(48);
  l.pushBack(65);
  l.pushBack(91);
  l.pushBack(47);
  l.pushBack(29);
  l.pushBack(18);
  l.pushBack(81);
  l.pushBack(30);
  l.pushBack(90);
  l.pushBack(83);
  l.pushBack(56);
  l.pushBack(4);
  l.pushBack(61);
  l.pushBack(77);

  l.printFront();
  quick(l, l.vertex, l.tale);
  l.printFront();
}
