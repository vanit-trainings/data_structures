const file = require('fs');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseLength = uppercase.length;
let lowercaseLength = lowercase.length;

let mail = new Set();
let Login = new Set();
let uniquePhone = new Set();

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
    str += Math.floor(Math.random() * (15 - 5) * 5);
    return str;
}

function name() {
    let name = uppercase.charAt(Math.floor(Math.random() * uppercaseLength));
    name += randomString(14);
    return name;
}

function birthDate() {
    return (randomNumberFromRange(1950, 2001) + '.' + randomNumberFromRange(1, 12) + '.' + randomNumberFromRange(1, 31));
}

function phone() {
    let phone = ('(' + randomNumberFromRange(100, 999) + ') ' + randomNumberFromRange(100, 999) + '-' + randomNumberFromRange(100, 999));
    if (uniquePhone.has(phone)) {
        return phone();
    } else {
        uniquePhone.add(phone);
    }
    return phone;
}

function email() {
    let email = randomString(14) + randomNumber(9999) + '@' + randomString(5) + '.' + randomString(5);
    if (mail.has(email)) {
        return email();
    } else {
        mail.add(email);
    }
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

function login() {
    let login = '';
    for (let i = 0; i < 10; i++) {
        login += lowercase.charAt(Math.floor(Math.random() * lowercaseLength));
    }
    login += Math.floor(Math.random() * (15 - 5) * 5);
    if (Login.has(login)) {
        return login();
    } else {
        Login.add(login);
    }
    return login;
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

function randomId() {
    return randomNumberFromRange(1, 100);
}

let data = '';

//salon
for (let i = 0; i < 10; i++) {
    data = `INSERT into salon(name, address, avatar, email, phone) values('${name()}', '${address()}', '${path()}', '${email()}', '${phone()}');\n`;
    write(data);
}

//worker
for (let i = 0; i < 10; i++) {
    data = `INSERT into worker(firstname, lastname, birthDate, gender, email, phone, avatar, login, password) values(
        '${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', '${email()}', '${phone()}', '${path()}', '${login()}', '${password()}');\n`;
    write(data);
}

//profession
for (let i = 0; i < 10; i++) {
    data = `INSERT into  profession(name) values('${name()}');\n`;
    write(data);
}

//services
for (let i = 0; i < 10; i++) {
    data = `INSERT into  services(name) values('${name()}');\n`;
    write(data);
}

//users
for (let i = 0; i < 10; i++) {
    data = `INSERT into users(firstname, lastname, birthDate, gender, avatar, email, phone, login, password) values('${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', '${path()}', '${email()}', '${phone()}', '${login()}', '${password()}');\n`;
    write(data);
}

//beautysalon_worker
for (let i = 0; i < 10; i++) {
    data = `INSERT into beautysalon_worker(salon_id, worker_id) values('${randomId()}', '${randomId()}')\n`;
    write(data);
}

//profession_worker
for (let i = 0; i < 10; i++) {
    data = `INSERT into profession_worker(worker_id, prof_id) values('${randomId()}', '${randomId()}')\n`;
    write(data);
}

//service_worker
for (let i = 0; i < 10; i++) {
    data = `INSERT into service_worker(service_id, worker_id, price, duration, measurement_unit) values('${randomId()}', '${randomId()}', '${price()}', '${duration()}', '${unitOfMeasurement()}')\n`;
    write(data);
}

//works
for (let i = 0; i < 10; i++) {
    data = `INSERT into works(worker_id, picturepath) values('${randomId()}', '${path()}'))\n`;
    write(data);
}

//orders
for (let i = 0; i < 10; i++) {
    data = `INSERT into orders(user_id, worker_id, service_id, datetime) values('${randomId()}', '${randomId()}', '${randomId()}', '${orderDate()}')\n`;
    write(data);
}

write('COMMIT TRANSACTION;\n');