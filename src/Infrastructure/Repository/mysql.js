const { DatabaseService } = require('../../Interface/databaseService.js');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');

class MySQL extends DatabaseService {
	constructor(){
		super()
	}
	initDatabase(){
		const connection = mysql.createConnection({
			host: "localhost",
			user: "alas",
			password: "alasdbpwd",
			database:"alasdb"
		});
		connection.connect(err => {
			if (err)
				return new Error(`error connecting: ${err.stack}`);
		
			console.log(`connected as id ${connection.threadId}`);
		});
		return connection;
	}
}

module.exports = {
	mysql: new MySQL()
};