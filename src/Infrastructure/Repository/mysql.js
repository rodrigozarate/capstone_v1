const { DatabaseService } = require('../../Contrats/databaseService.js');
const mysql = require('mysql');

class MySQL extends DatabaseService {
	#connection = null;
	constructor(){
		super()
	}
	initDatabase(){
		return new Promise((resolve, reject) => {
			this.#connection = mysql.connection({
				host: "",
				user: "",
				password: ""
			});
			this.#connection.connect(err => {
				if (err)
					return reject(`error connecting: ${err.stack}`);
			
				resolve(`connected as id ${connection.threadId}`);
			});
		});
	}
	
	query(){

	}
}
