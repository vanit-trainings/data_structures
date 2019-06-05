const sth = require('fs');

function name() {
    var name = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";   
    for (let i = 0; i < 10; ++i) {
        name += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
} 

function address() {
    return name() + " " + Math.ceil(Math.random() * 100);
}

function phone() {
    let phone = Math.ceil((Math.random() * 100000) + 1).toString();
    phone = phone + phone; 
    return phone;
}

function email() {
    return (name() + '@' + name().substring(0, 5) + '.' + name().substring(0, 3)).toLowerCase(); 
}

function picPath() {
    return name() + '/' + name().toLowerCase() + '/' + name() + '.' + name().substring(0, 3).toLowerCase();
}

function birthDate() {
    return phone().substring(0, 4) + '-' + phone().substring(0, 2) + '-' + phone().substring(0, 2);
}

function password() {
    return Math.random().toString(15).substring(9);
}

function gender() {}

for(let i = 0; i <= 1000; ++i) {
    let rows = "INSERT into beautySalon (name, address, phone, email, picpath) values (" + `'${name()}', '${address()}', '${phone()}', '${email()}', '${picPath()}'` + ");\n";
    sth.appendFileSync("randomData.sql", rows);
} 
 