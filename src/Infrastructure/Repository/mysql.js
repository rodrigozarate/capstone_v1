const { DatabaseService } = require('../../Interface/databaseService.js');
const mysql = require('mysql2');
require('dotenv').config()

class MySQL extends DatabaseService {
	constructor(){
		super()
	}
	initDatabase(){
		const connection = mysql.createConnection({
			host: process.env.HOST,
			user: process.env.USER_DATABASE,
			password: process.env.PASSWORD_DATABASE,
			database: process.env.DATABASE
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