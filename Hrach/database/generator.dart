import 'dart:convert';
import 'dart:io';
import 'dart:math';

// import 'dart:svg';

const AsciiCodec asc = AsciiCodec();
Random r = Random();
Set<String> email = Set();
Set<String> phone = Set();
Set<String> webPage = Set();

int randomNumberInRange(int min, int max) {
  return (r.nextInt(max - min) + min);
}
dynamic randomNumberInRangeFloat(int min, int max) {
  return (r.nextInt(max - min) + min).toDouble();
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
  File f = File('pahest.txt');
  String s;
  // artadroxner
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.producer(name,address,phone,email,web_page) VALUES ('${nameGenerator()}','${addressGenerator()}','${phoneGenerator()}','${emailGenerator()}','${webPageGenerator()}');\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  //////////////////
  // patviratuner
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.costumer(name,address,phone,email) VALUES ('${nameGenerator()}','${addressGenerator()}','${phoneGenerator()}','${emailGenerator()}');\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // Hastiq
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.occupation(name) VALUES ('${nameGenerator()}');\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // Points
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.points(name) VALUES ('${nameGenerator()}');\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // Pahest
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.storage(name,space_m3,address,start_time,finish_time) VALUES ('${nameGenerator()}', ${randomNumberInRangeFloat(100, 10000)},'${addressGenerator()}','${timeGenerator()}','${timeGenerator()}');\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // ashxatox
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.workers(name,surname,birthdate,address,phone,email,salary,occupation_id) VALUES ('${nameGenerator()}','${surNameGenerator()}', '${birthDateGenerator()}', '${addressGenerator()}', '${phoneGenerator()}', '${emailGenerator()}', ${randomNumberInRangeFloat(100000, 300000)}, ${randomNumberInRange(1, 1000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // apranqner
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.products(name,point_id,expiration_date,point_weight,point_volume_m3,production_date,producer_id,product_average_price) VALUES ('${nameGenerator()}',${randomNumberInRange(1, 1000)}, '${birthDateGenerator()}', ${randomNumberInRangeFloat(1, 1000)}, ${randomNumberInRangeFloat(1, 1000)}, '${birthDateGenerator()}', ${randomNumberInRange(1, 1000)}, ${randomNumberInRangeFloat(10, 2000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // mutq
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.recieve(date_day,product_id,producer_id,quantity,point_id,worker_id,recieve_price,storage_id) VALUES ('${birthDateGenerator()}', ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRangeFloat(10, 2000)}, ${randomNumberInRange(1, 1000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // elq
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.deliveris(date_day,product_id,costumer_id,quantity,point_id,worker_id,delivery_price,storage_id) VALUES ('${birthDateGenerator()}', ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)}, ${randomNumberInRangeFloat(10, 2000)}, ${randomNumberInRange(1, 1000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // workers -> storage
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.worker_storage(worker_id,storage_id) VALUES (${randomNumberInRange(1, 1000)}, ${randomNumberInRange(1, 1000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
  // producer -> product
  for (int i = 0; i < size; ++i) {
    s = "INSERT INTO public.producer_product(producer_id,product_id) VALUES (${randomNumberInRange(1,1000)}, ${randomNumberInRange(1, 1000)});\n";
    f.writeAsStringSync(s, mode: FileMode.append);
  }
}
