// import 'list.dart';
// //import 'dart:math';

// //import 'dart:io';
// node piv = null;
// node piv0 = null;
// list l = list();
// bool isOne = true;

// void quick(list l, node vertex, node tale) {
//   if (vertex != tale) {
//     //l.printFront();
//     quickSort(l, vertex, tale);
//     if (piv.prev != null) {
//       quick(l, l.vertex, piv.prev);
//     }
//     if (isOne) {
//       if (piv0.next != null) {
//         isOne = false;
//         quick(l, piv0.next, l.tale);
//       } else {
//         if (piv.next != null) {
//           quick(l, piv.next, l.tale);
//         }
//       }
//     }
//   }
// }

// node quickSort(list l, node vertex, node tale) {
//   if (vertex == null && tale == null) {
//     return null;
//   }
//   if (vertex == null) {
//     return tale;
//   }
//   if (tale == null) {
//     return vertex;
//   }
//   //print("ver:" + vertex.value.toString());
//   node pivot = tale;
//   node index = vertex;
//   for (node i = vertex; i != tale; i = i.next) {
//     if (i.value <= pivot.value) {
//       print("i :" + i.value.toString());
//       print("pivot :" + pivot.value.toString());
//       print("tale:" + tale.value.toString());
//       swap(l, index, i);
//       node tmp = index;
//       index = i;
//       i = tmp;
//       index = index.next;
//     }
//   }
//   if(index != pivot) {
//     swap(l, index, pivot);
//   }

//   //print("//////////////////////////////////");
//   //l.printFront();
//   piv = pivot;
//   piv0 ??= pivot;
//   return pivot;
// }

// void swap(list l, node n1, node n2) {
//   if (n1 == null || n2 == null || n1 == n2) {
//     return;
//   }
//   if (n1.next == n2) {
//     n1.prev?.next = n2;
//     n2.next?.prev = n1;

//     n1.next = n2.next;
//     n2.prev = n1.prev;
//     n1.prev = n2;
//     n2.next = n1;
//   } else {
//     n1.next?.prev = n2;
//     n1.prev?.next = n2;
//     n2.next?.prev = n1;
//     n2.prev?.next = n1;

//     node tmp = n1.prev;
//     n1.prev = n2.prev;
//     n2.prev = tmp;
//     tmp = n1.next;
//     n1.next = n2.next;
//     n2.next = tmp;
//   }

//   if (n1 == l.vertex && n2 == l.tale) {
//     // print("n1 : " + n1.value.toString());
//     // print("n2 : " + n2.value.toString());
//     // print("vertex : " + l.vertex.value.toString());
//     // print("tale : " + l.tale.value.toString());

//     node tmp = l.vertex;
//     l.vertex = l.tale;
//     l.tale = tmp;
//   } else if (n1 == l.vertex) {
//     l.vertex = n2;
//   } else if (n2 == l.tale) {
//     l.tale = n1;
//   }
// }

// main(List<String> args) {
//   // var rng = new Random();
//   // for (int i = 0; i < 5; i++) {
//   //   //l.pushBack(rng.nextInt(100));
//   //   l.pushBack(i);
//   //   l.pushBack(2);
//   // }
//   l.pushBack(14);
//   l.pushBack(7);
//   l.pushBack(9);
//   l.pushBack(15);
//   l.pushBack(97);
//   // l.pushBack(60);
//   // l.pushBack(25);
//   // l.pushBack(40);

//   //l.printFront();
//   quick(l, l.vertex, l.tale);
//   l.printFront();
//   // swap(l, l.vertex, l.tale);
//   // print("ver :"+ l.vertex.value.toString());
//   // print("tale :"+ l.tale.value.toString());

//   //l.printFront();
// }

import 'list.dart';
import 'dart:io';

node piv1 = null;
node piv2 = null;
bool one = true;
void quick(list l, node skizb, node verj) {
  print(piv1?.value.toString());
  print(piv2?.value.toString());
  print(one.toString());
  if (skizb != verj) {
    if (one) {
      piv1 = quickSort(l, skizb, verj);
      one = false;
    } else {
      piv2 = quickSort(l, skizb, verj);
      one = true;
    }
    if (!one && piv1 != null) {
      if (piv1.prev != null &&
          piv1.next != piv2 &&
          piv1.prev != piv2 &&
          piv1.prev != piv2?.next &&
          piv1.next != piv2?.prev) {
        quick(l, skizb, piv1.prev);
      }
      if (piv1.next != null &&
          piv1.next != piv2 &&
          piv1.prev != piv2 &&
          piv1.prev != piv2?.next &&
          piv1.next != piv2?.prev) {
        quick(l, piv1.next, verj);
      }
    } else if (piv2 != null) {
      if (piv2.prev != null &&
          piv1.next != piv2 &&
          piv1.prev != piv2 &&
          piv1?.prev != piv2.next &&
          piv1?.next != piv2.prev) {
        quick(l, skizb, piv2.prev);
      }
      if (piv2.next != null &&
          piv1.next != piv2 &&
          piv1.prev != piv2 &&
          piv1?.prev != piv2.next &&
          piv1?.next != piv2.prev) {
        quick(l, piv2.next, verj);
      }
    }
  }
}

node quickSort(list l, node skizb, node verj) {
  // print(skizb.prev?.value.toString() +' ' +skizb?.value.toString() + ' ' + skizb.next?.value.toString());
  // print(verj.prev?.value.toString() +' ' + verj?.value.toString() + ' ' + verj.next?.value.toString());
  l.printFront();
  // if (skizb == null) {
  //   if (verj == null) {
  //     print('verj@ null e');
  //     return null;
  //   }
  //   print('skizb@ null e ');
  //   return null;
  // }

  // stdout.write('list : ');
  // l.printFront();
  // print(skizb.prev?.value.toString() + ' ' + skizb?.value.toString() + ' ' + skizb.next?.value.toString());
  // print(verj.prev?.value.toString() + ' ' + verj?.value.toString() + ' ' + verj.next?.value.toString());
  // node skizb1 = skizb;
  // node verj1 = verj;

  node index = skizb.prev;

  for (node tmp = skizb; tmp != verj; tmp = tmp.next) {
    //stdout.write(tmp.value.toString() + ' ');
    if (tmp.value <= verj.value) {
      index = (index == null) ? skizb : index.next;
      swap(l, index, tmp);
      node tmp1 = index;
      index = tmp;
      tmp = tmp1;
    }
  }
  index = (index == null) ? skizb : index.next;
  swap(l, index, verj);

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
  l.pushBack(80);
  l.pushBack(22);
  //l.pushBack(28);

  l.printFront();
  quick(l, l.vertex, l.tale);
  l.printFront();
}
