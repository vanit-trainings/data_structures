const RandExp = require('randexp');
const file = require('fs');

function write(data) {
    file.appendFileSync('randomData.sql', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

write('BEGIN TRANSACTION;\n');

function name() {
    return new RandExp(/[A-Z][a-z]{1,14}/).gen();
}

function phone() {
    return new RandExp(/\([1-9]\d\d\) \d{3}-\d{4}/).gen();
}

function password() { 
    return new RandExp(/^[a-zA-Z0-9]{6,16}/).gen();
}

function price() {
    return new RandExp(/\d{4,6}/).gen();
}

function address() {
    return new RandExp(/^[A-Z][a-z]{5,15}, [A-Z][a-z]{5,25} \d{3}/).gen();
}

function birthDate() {
    return new RandExp(/^(1\d{3}|20[0-1][0-9])[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])/).gen();
}

function path() {
    return new RandExp(/\w{8}[/]\w{8}[/]\w{8}[/]\w{8}[/]\w{8}/).gen();
}

function orderDate() {
    return new RandExp(/\d{4}-\d{2}-\d{2}, \d{2}:\d{2}/).gen();
}

function duration() {
    return new RandExp(/[1-8] | [1-6][0-9]/).gen();
}

function unitOfMeasurement() {
    return new RandExp(/[a-z]{7}/).gen(); 
}

function workHours() {
    return new RandExp(/\d{2}:\d{2} - \d{2}:\d{2}/).gen();
}

function email() {
    return new RandExp(/[a-z][a-z0-9._]{1,25}@[a-z0-9]{3,10}\.[a-z]{2,4}/).gen();
}

function gender() {
    return new RandExp(/[a-z]{4,6}/).gen();
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
        + `'${name()}', '${name()}', '${birthDate()}', '${gender()}', '${email()}', '${phone()}', '${path()}', '${password()}', '${password()}'` + ");\n";
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
        + `'${name()}', '${name()}', '${birthDate()}', '${gender()}', '${path()}', '${email()}', '${phone()}', '${password()}', '${password()}'` + ");\n";
    write(data);
}

write('COMMIT TRANSACTION;\n');