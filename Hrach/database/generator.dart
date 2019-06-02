import 'dart:convert';
import 'dart:io';
import 'dart:math';

const AsciiCodec asc = AsciiCodec();
Random r = Random();
Set<String> email = Set();
Set<String> phone = Set();
Set<String> webPage = Set();

int randomNumberInRange(int min, int max) {
  return (r.nextInt(max - min) + min);
}

String nameGenerator() {
  String s = asc.decode([randomNumberInRange(65, 90)]);
  int q = randomNumberInRange(3, 10);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  return s;
}

String surNameGenerator() {
  String s = asc.decode([randomNumberInRange(65, 90)]);
  int q = randomNumberInRange(3, 10);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  return s;
}

String ageGenerator() {
  return (randomNumberInRange(18, 65)).toString();
}

String emailGenerator() {
  String s = '';
  int q = randomNumberInRange(3, 10);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  s += '@';
  q = randomNumberInRange(2, 4);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  s += '.';
  q = randomNumberInRange(2, 4);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  if (email.contains(s)) {
    return emailGenerator();
  } else {
    email.add(s);
  }
  return s;
}

String phoneGenerator() {
  String s = '+';
  int q = randomNumberInRange(11, 18);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(48, 57)]);
  }
  if (phone.contains(s)) {
    return phoneGenerator();
  } else {
    phone.add(s);
    return s;
  }
}

String birthDateGenerator() {
  String s = '';
  s += randomNumberInRange(1954, 2001).toString();
  s += '-';
  s += randomNumberInRange(1, 12).toString();
  s += '-';
  s += randomNumberInRange(1, 30).toString();
  return s;
}

String addressGenerator() {
  String s = asc.decode([randomNumberInRange(65, 90)]);
  int q = randomNumberInRange(5, 10);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  s += ',' + asc.decode([randomNumberInRange(65, 90)]);
  q = randomNumberInRange(3, 7);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  s += ' ' + randomNumberInRange(1, 200).toString();
  return s;
}

String timeGenerator() {
  String s = '';
  s += randomNumberInRange(0, 23).toString();
  s += ':';
  s += randomNumberInRange(0, 59).toString();
  return s;
}

String webPageGenerator() {
  String s = 'www.';
  int q = randomNumberInRange(3, 15);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  s += '.';
  q = randomNumberInRange(2, 4);
  for (int i = 0; i < q; ++i) {
    s += asc.decode([randomNumberInRange(97, 122)]);
  }
  if (webPage.contains(s)) {
    return phoneGenerator();
  } else {
    webPage.add(s);
    return s;
  }
}

main(List<String> args) {
  const int size = 1000;
  File f = File('artadrox.txt');
  String s;
  for (int i = 0; i < size; ++i) {
    s = "insert into producers(name,address,phone,email,web_page) values ('${nameGenerator()}','${addressGenerator()}','${phoneGenerator()}','${emailGenerator()}','${webPageGenerator()}')\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  //////////////////
}
