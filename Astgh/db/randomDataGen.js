const file = require('fs');
const RandExp = require('randexp');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseLength = uppercase.length;
let lowercaseLength = lowercase.length;

let uCount = 10000;
let wCount = 400;
let salonCount = 40;
let sCount = 20;
let pCount = 10;

let Email = new Set();
let Login = new Set();
let Phone = new Set();

function write(data) {
    file.appendFileSync('randomData.sql', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

write('BEGIN TRANSACTION;\n');

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomString(length) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
    }
    //str += Math.floor(Math.random() * (15 - 5) * 5);
    return str;
}

function name() {
    let name = uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
    name += randomString(14);
    return name;
}

function birthDate() {
    return (randomNumberFromRange(1950, 2001) + '-' + randomNumberFromRange(1, 12) + '-' + randomNumberFromRange(1, 28));
}

function gender() {
    return new RandExp(/male|female/).gen();
}

function phone() {
    let str = ('(' + randomNumberFromRange(100, 999) + ') ' + randomNumberFromRange(100, 999) + '-' + randomNumberFromRange(100, 999));
    if (Phone.has(str)) {
        return phone();
    } else {
        Phone.add(str);
    }
    return str;
}

function email() {
    let str = randomString(10) + randomNumberFromRange(1, 10000) + '@' + randomString(5) + '.' + randomString(5);
    if (Email.has(str)) {
        return email();
    } else {
        Email.add(str);
    }
    return str;
}

function address() {
    let address = uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
    address += randomString(16);
    address += ' ' + randomNumberFromRange(1, 100);
    return address;
}

function path() {
    let path = '';
    for (let j = 0; j < 8; j++) {
        for (let i = 0; i < 4; i++) {
            path += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
        }
        path += '/';
    }
    return path;
}

function login() {
    let str = '';
    for (let i = 0; i < 10; i++) {
        str += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
    }
    str += Math.floor(Math.random() * (15 - 5) * 5);
    if (Login.has(str)) {
        return login();
    } else {
        Login.add(str);
    }
    return str;
}

function password() {
    return randomString(10) + randomNumber(9999);
}

function price() {
    return randomNumberFromRange(500, 150000);
}

function orderDate() {
    let orderDate = randomNumberFromRange(2017, 2018) + '-' + randomNumberFromRange(1, 12) + '-' + randomNumberFromRange(1, 28);
    //orderDate += ' ' + randomNumberFromRange(1, 18) + ':' + randomNumber(59);
    return orderDate;
}

function duration() {
    return randomNumberFromRange(10, 60);
}

function unitOfMeasurement() {
    return randomString(7);
}

function randomId(max) {
    return randomNumberFromRange(1, max);
}

let data = '';

//salon
for (let i = 0; i < salonCount; i++) {
    data = `INSERT into salon(name, address, avatar, email, phone) values('${name()}', '${address()}', '${path()}', '${email()}', '${phone()}');\n`;
    write(data);
}

//worker
for (let i = 0; i < wCount; i++) {
    data = `INSERT into worker(firstname, lastname, birthDate, gender, email, phone, avatar, login, password) values('${name()}', '${name()}', '${birthDate()}', '${gender()}', '${email()}', '${phone()}', '${path()}', '${login()}', '${password()}');\n`;
    write(data);
}

//profession
for (let i = 0; i < pCount; i++) {
    data = `INSERT into  profession(name) values('${name()}');\n`;
    write(data);
}

//services
for (let i = 0; i < sCount; i++) {
    data = `INSERT into  services(name) values('${name()}');\n`;
    write(data);
}

//users
for (let i = 0; i < uCount; i++) {
    data = `INSERT into users(firstname, lastname, birthDate, gender, avatar, email, phone, login, password) values('${name()}', '${name()}', '${birthDate()}', '${gender()}', '${path()}', '${email()}', '${phone()}', '${login()}', '${password()}');\n`;
    write(data);
}

// salon_worker
for (let i = 0; i < wCount; i++) {
    data = `INSERT into salon_worker(salon_id, worker_id) values(${randomId(salonCount)}, ${randomId(wCount)});\n`;
    write(data);
}

//profession_worker
for (let i = 0; i < wCount; i++) {
    data = `INSERT into profession_worker(worker_id, prof_id) values(${randomId(wCount)}, ${randomId(pCount)});\n`;
    write(data);
}

//service_worker
for (let i = 0; i < wCount; i++) {
    data = `INSERT into service_worker(service_id, worker_id, price, duration, measurment_unit) values(${randomId(sCount)}, ${randomId(wCount)}, ${price()}, ${duration()}, '${unitOfMeasurement()}');\n`;
    write(data);
}

//works
for (let i = 0; i < wCount; i++) {
    data = `INSERT into works(worker_id, path) values(${randomId(wCount)}, '${path()}');\n`;
    write(data);
}

// orders
for (let i = 0; i < 10000; i++) {
  data = `INSERT into orders(user_id, worker_id, service_id, datetime) values(${randomId(uCount)}, ${randomId(wCount)}, ${randomId(sCount)}, '${orderDate()}');\n`;
  write(data);
}

write('COMMIT TRANSACTION;\n');