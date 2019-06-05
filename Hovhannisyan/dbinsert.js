function nameGenerate(n) {
    var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var string1 = 'abcdefghijklmnopqrstuvwxyz';
    var name = '';
    name += string[Math.floor(Math.random() * string.length)];
    for (let i = 0; i < n; i++) {
        name += string1[Math.floor(Math.random() * string1.length)];
    }
    return name;
}

function emailGenerate() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for (var ii = 0; ii < 10; ii++) {
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return (string + '@gmail.com');

}
function numberGenerate() {
    a = '+';
    return a += Math.floor(Math.random() * 10000000000);

}
function addressGenerate() {
    return address = nameGenerate(10) + ' ' + Math.floor(1 + Math.random() * 10) + '/' + Math.floor(1 + Math.random() * 100);
}
function workBeginTime() {
    return time = '09:00:00';
}
function workFinishTime() {
    return time = '18:00:00';
}
function volume_m3() {
    return a = Math.floor(Math.random() * 10000);
}
function dateGenerate() {
    return date = Math.floor(1 + Math.random() * (2001 - 1940) + 1940) + '-' + Math.floor(1 + Math.random() * 11) + '-' + Math.floor(1 + Math.random() * 30);
}
function randomNumber() {
    return Math.floor(1 + Math.random() * 99);
}
function randomSalary(){
    return salary = Math.floor(1 + Math.random()*(1000000-80000)+80000); 
}
function webpageGenerator(){
    return web = 'www' +nameGenerate(9) + '.'+nameGenerate(3);
}

// console.log(randomNumber());
// console.log(volume_m3());
// console.log(workBeginTime());
// console.log(workFinishTime());
// console.log(numberGenerate());
// console.log(nameGenerate(10));
// console.log(emailGenerate());
// console.log(addressGenerate());
// console.log(dateGenerate());
// console.log(webpageGenerator());


const fs = require('fs') 

function insertStorage() {
    
    for(let i = 0 ; i < 100;i++) {
        data = `INSERT INTO storage(name,volume_m3,address,work_time_begin,work_time_finish ) values('${ nameGenerate(10)}',${volume_m3()},'${addressGenerate()}','${workBeginTime()}','${workFinishTime()}');\n`;        
        fs.appendFileSync('insert.txt', data);
    }
}

function insertWorkers() {
    for(let i = 0 ; i < 100;i++) {
       data = `INSERT INTO workers(name,surname, birth_date,address,phone,email,occupation,salary ) values('${ nameGenerate(10)}', '${ nameGenerate(15)}','${dateGenerate()}','${addressGenerate()}','${numberGenerate()}','${emailGenerate()}','${nameGenerate(8)}','${randomSalary()}');\n`;     
        fs.appendFileSync('insert.txt', data);
    }
}

insertStorage()
insertWorkers();

