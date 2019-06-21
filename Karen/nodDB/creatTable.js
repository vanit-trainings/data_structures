const pg = require('pg');
const pool = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'postgres',
	password: '123',
	port: '5432'});

pool.query("CREATE TABLE warehouses(id SERIAL ,name VARCHAR (40) NOT NULL,capacity INTEGER NOT NULL, adress VARCHAR (40) NOT NULL)",
	(err, res) => {console.log(err, res);
	}
);

pool.query("CREATE TABLE person(id SERIAL , name VARCHAR (40), surname VARCHAR (40), adress VARCHAR (40))",
	(err, res) => {console.log(err, res);
	}
);

pool.query("CREATE TABLE product(id SERIAL , name VARCHAR (40) )",
	(err, res) => {console.log(err, res);
	}
);

pool.end();