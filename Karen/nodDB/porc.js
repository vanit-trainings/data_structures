const pg = require('pg');
const pool = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'postgres',
	password: '123',
	port: '5432',
	max: 200
});

function genName() {
	return Math.random().toString(36).substring(7);
};

for(let l = 0; l < 12; l++) {
	pool.query(`INSERT INTO warehouses(id, name, capacity, adress) VALUES(${l}, '${genName()}', ${12}, '${genName()}')`,
		(err, res) => {console.log(err, res);
		}
	);
};

for(let l = 0; l < 40; l++) {
	pool.query(`INSERT INTO person(name, surname, adress) VALUES('${genName()}', '${genName()}', '${genName()}')`,
		(err, res) => {console.log(err, res);
		}
	);
};

for(let l = 0; l < 100; l++) {
	pool.query(`INSERT INTO product(name) VALUES('${genName()}')`,
		(err, res) => {console.log(err, res);
		}
	);
};

pool.end();