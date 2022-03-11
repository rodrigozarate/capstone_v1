const { DatabaseService } = require('../../Interface/databaseService.js');
const mysql = require('mysql');

class MySQL extends DatabaseService {
	#connection = null;
	constructor(){
		super()
	}
	initDatabase(){
			this.#connection = mysql.createConnection({
				host: "localhost",
				user: "alas",
				password: "alasdbpwd",
				database:"alasdb"
			});
			this.#connection.connect(err => {
				if (err)
					return new Error(`error connecting: ${err.stack}`);
			
				console.log(`connected as id ${this.#connection.threadId}`);
			});
	}
	
	createUser(first_name, last_name, email, password, company, phone_number){
		const query = 'INSERT INTO User(first_name, last_name, email, password, company, phone_number) VALUES (?, ?, ?, ?, ?, ?)';
		this.#connection.query(query, [first_name, last_name, email, password, company, phone_number], (err, result) => {
			if (err) {
				console.log(err);
			}
			console.log(result);
			
		})
		this.#connection.end();
	}
}

module.exports = {
	mysql: new MySQL()
};