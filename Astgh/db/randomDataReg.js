const RandExp = require('randexp');

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
    return new RandExp(/\d{4}-\d{2}-\d{2}/).gen();
}

function path() {
    return new RandExp(/\w{10}[/]\w{10}[/]\w{10}[/]\w{10}[/]\w{10}/).gen();
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
    return new RandExp(/^[a-z][a-z0-9]{7,34}@[a-zA-z]{2,5}[.][a-zA-Z]{2,5}$/).gen();
}

function write(data) {
    file.appendFileSync('randomData.sql', data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

let data = '';

//salon
for (let i = 0; i < 10; i++) {
    data = "INSERT into salon(name, address, avatar, email, phone) values(" + `'${name()}', '${address()}', '${path()}', '${email()}', '${phone()}'` + ")";
}
write(data);

//worker
for (let i = 0; i < 10; i++) {
    data = "INSERT into worker(firstname, lastname, birthDate, gender, email, phone, avatar, login, password) values("
        + `'${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', '${email()}', '${phone()}', ${path()}', '${email()}', '${password()}'` + ")";
}
write(data);

//profession
for (let i = 0; i < 10; i++) {
    data = "INSERT into  profession(name) values(" + `'${name()}'` + ")";
}
write(data);

//services
for (let i = 0; i < 10; i++) {
    data = "INSERT into  services(name) values(" + `'${name()}'` + ")";
}
write(data);

//users
for (let i = 0; i < 10; i++) {
    data = "INSERT into users(firstname, lastname, birthDate, gender, avatar, email, phone, login, password) values("
        + `'${name()}', '${name()}', '${birthDate()}', '${randomString(6)}', ${path()}', '${email()}', '${phone()}', '${email()}', '${password()}'` + ")";
}
write(data);