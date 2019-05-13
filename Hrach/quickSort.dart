
import 'list.dart';
import 'dart:math';

node move(list l, node n, node before) {
  return l.insertBeforeWithNode(l.removeNode(n), before);
}

class wraper {
  var first;
  var last;
  var pivot;

  wraper(this.first, this.last, this.pivot);
}

void quick(list l, node first, node last) {
  if (first != last && first != null && last != null) {
    wraper all = quickSort(l, first, last);
    if (all.first != all.pivot.prev && all.first != all.pivot) {
      quick(l, all.first, all.pivot.prev);
    }

    if (all.pivot.next != all.last && all.pivot  != all.last) {
      quick(l, all.pivot.next, all.last);
    }
  }
}

dynamic quickSort(list l, node first, node last) {
  node pivot = first;
  for (node tmp = first.next; tmp != last.next && tmp != null;) {
    if (tmp.value <= pivot.value) {
      if (tmp == last) {
        last = last.prev;
      }
      node j = tmp.next;
      first = move(l, tmp, first);
      tmp = j;
    } else {
      tmp = tmp.next;
    }
  }
  return new wraper(first, last, pivot);
}
