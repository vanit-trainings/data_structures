function string(length) {
    let result  = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function email(emailStart, emailEnd) {
   let email = string(emailStart) + '@' +string(emailEnd) +'.com';
   return email;
}

function number(len, count){
	let tiv = '';
        for ( let i = 0; i < count; i++ ) {
            tiv = Math.floor(Math.random() * len);
        }
	return tiv;
}

function phone(count){
    let tel = '"+' + number(1000000000000, count);
    return tel
}

function DataTime() {
    let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    let data = new Date().toTimeString().replace(/ .*/, '');
    return (utc + '/' + data);
   }

   
function databasa(count, stringLenght, emailStart, emailEnd, len) {
    for(let i = 0; i < count; i++){
        result = '("' + string(stringLenght) + '", ' + '"' + email(emailStart, emailEnd) +'",' +'"' + phone(count) +'",' +  DataTime() +', '+ number(len, count) + ')';	
        console.log(result);		
	}	
}

databasa(20, 14, 10, 3, 100);

