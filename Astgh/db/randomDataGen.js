const file = require('fs');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseLength = uppercase.length;
let lowercaseLength = lowercase.length;

function write(data) {
    file.appendFileSync('randomData.sql', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

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
    return str;
}

function name() {
    let name = uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
    name += randomString(14);
    return name;
}

function birthDate() {
    return (randomNumberFromRange(1950, 2001) + '.' + randomNumberFromRange(1, 12) + '.' + randomNumberFromRange(1, 12));
}

function phone() {
    return ('(' + randomNumberFromRange(100, 999) + ') ' + randomNumberFromRange(100, 999) + '-' + randomNumberFromRange(100, 999));
}

function email() {
    let email = randomString(14) + randomNumber(9999) + '@' + randomString(5) + '.' + randomString(5);
    return email;
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

function password() {
    return randomString(12) + randomNumber(9999);
}

function price() {
    return randomNumberFromRange(500, 150000);
}

function orderDate() {
    let orderDate = randomNumber(31) + '.' + randomNumber(12) + '.' + randomNumberFromRange(2018, 2021);
    orderDate += ' ' + randomNumber(24) + ':' + randomNumber(59);
    return orderDate;
}

function duration() {
    return randomNumber(60);
}

function unitOfMeasurement() {
    return randomString(7);
}

function workHours() {
    return randomNumber(24) + ':' + randomNumber(59) + ' - ' + randomNumber(24) + ':' + randomNumber(59);
}

let data = '';

//salon
for (let i = 0; i < 10; i++) {
    data = "INSERT into salon(name, address, avatar, email, phone) values(" + `'${name()}', '${address()}', '${path()}', '${email()}', '${phone()}'` + ");\n";
    write(data);
}

//worker
for (let i = 0; i < 10; i++) {
    data = "INSERT into worker(firstname, lastname, birthDate, gender, email, phone, avatar, login, password) values("
        + `'${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', '${email()}', '${phone()}', '${path()}', '${password()}', '${password()}'` + ");\n";
    write(data);
}

//profession
for (let i = 0; i < 10; i++) {
    data = "INSERT into  profession(name) values(" + `'${name()}'` + ");\n";
    write(data);
}

//services
for (let i = 0; i < 10; i++) {
    data = "INSERT into  services(name) values(" + `'${name()}'` + ");\n";
    write(data);
}

//users
for (let i = 0; i < 10; i++) {
    data = "INSERT into users(firstname, lastname, birthDate, gender, avatar, email, phone, login, password) values("
        + `'${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', '${path()}', '${email()}', '${phone()}', '${password()}', '${password()}'` + ");\n";
    write(data);
}