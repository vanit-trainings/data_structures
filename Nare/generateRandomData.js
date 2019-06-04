var fs = require('fs');

function randomPhoneNumber(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

function randomName(length) {
    var charset = 'abcdefghijklmnopqrstuwxyz';
    var result = "";
    for (var i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result = result[0].toUpperCase() + result.slice(1);
}

function randomEmail(length) {
    var charset = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789'; 
    var result = "";
    for (var i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
}

function randomAddress(length) {
    var charset = 'abcdefghijklmnopqrstuwxyz'; 
    var result = "";
    for (var i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    result = result[0].toUpperCase() + result.slice(1);
return result = result + ' ' + (Math.floor(Math.random() * 100));  
}
function randomPicPath(length) {
    var charset = 'abcdefghijklmnopqrstuwxyz';
    var result = "";
    for (var i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
}


for (var i = 0; i < 1000; i++) {
let randName = randomName(8);

let randAddress = randomAddress (14); 
 
let phoneNumber = randomPhoneNumber(100, 200) + '-' + randomPhoneNumber(100, 200) + '-' + randomPhoneNumber(1000, 9999); 

let email = randomEmail(6) + '.' + randomEmail(5) + '@' + randomEmail(4) + '.com'; 

let picPath = 'images' + '/' + randomPicPath(16) + '/' + randomPicPath(14) + '/' + randomPicPath(14); 


fs.appendFileSync('randomData.sql', "\n" + "insert into salons (name , address, phone, picture, email) values ('" + randName + "'" + ", ", (err) => {
    if (err) console.log(err);
    console.log('Successfully Done');
});
fs.appendFileSync('randomData.sql', "'" + randAddress + "'" + ", ", (err) => {
    if (err) console.log(err);
    console.log('Successfully Done');
});

fs.appendFileSync('randomData.sql', "'" + phoneNumber  + "'" + ", ", (err) => {
    if (err) console.log(err);
    console.log('Successfully Done');
});
fs.appendFileSync('randomData.sql', "'" + picPath  + "'" + ", ", (err) => {
    if (err) console.log(err);
    console.log('Successfully Done');
});

fs.appendFileSync('randomData.sql', "'" + email  + "'" + ");", (err) => {
    if (err) console.log(err);
    console.log('Successfully Done');
});
}