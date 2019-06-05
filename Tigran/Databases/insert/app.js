const fs = require('fs')
const filePath = './initialized.txt'



// Math.floor(Math.random() * 30)

let Rows = [];
const first = 'INSERT INTO table_name (name, surname, address, phone, email, photo) VALUES';
const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const phone_first = '+374';
const phone_second = '98';
let phone_numbers = 999999;// 900000 hat

const unique_phone_generate = () => {
    return phone_first.concat(phone_second,(phone_numbers--));
}

const unique_email_generate = () => {
    let email = '';
    return email.concat(Math.random().toString(36).substr(2, 15) , '@' , Math.random().toString(36).substr(2, 6) , '.' , Math.random().toString(36).substr(2, 6));
}

const rowsGenerator = (count) => {
    while (count--) {
        const lengths = [
            Math.floor(Math.random() * 10) + 5,
            Math.floor(Math.random() * 20) + 5,
            Math.floor(Math.random() * 50) + 5,
            Math.floor(Math.random() * 30) + 10
        ];
        const row = [ [],[],[],[]];

        for (let i = 0; i < row.length; i++) {
            for(let j = 0; j < lengths[i]; j++ ) {
                row[i][j] = abc[Math.floor(Math.random() * 52)];
            }
            row[i] = row[i].join('');
        };
        row.splice(3,0,unique_phone_generate());//add phone
        row.splice(4,0,unique_email_generate());//add email
        row[0] = `'` + row[0]
        row[row.length-1] += `'`;
        Rows.push(`(${row.join(`','`)})`);
    };
    Rows = first.concat(Rows, ';');
}

rowsGenerator(900000);

fs.writeFile(filePath, Rows, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
