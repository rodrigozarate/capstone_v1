const express = require("express");
var bcrypt = require('bcryptjs');
const { ControllerService } = require('../../Interface/controllerService');
const { mysql } = require('../../Infrastructure/Repository/mysql');

class RestfulUser extends ControllerService {
	#router = null;
	
	constructor(){
		super();
		this.load();
		this.get();
		this.delete();
		this.post();
		this.patch();
	}
	
	get blueprint(){
		return this.#router;
	}

	load(){
		this.#router = express.Router();
	}
	get(){
		this.#router.get("/",(req, res) => {
			res.send("User");
		});

		this.#router.get("/list",(req, res) => {
			res.send("Users list");
		});
	}

	post(){
		this.#router.post("/",(req, res) => {
			const { first_name, last_name, email, password, company, phone_number } = req.body;
			const salt = bcrypt.genSaltSync(10);
			const passwordHash= bcrypt.hashSync(password, salt);
		
			mysql.initDatabase()
			const status = mysql.createUser(first_name, last_name, email, passwordHash, company, phone_number);
			res.send('execute');
		});
	}

	delete(){
		this.#router.delete("/",(req, res) => {
			res.send("User delete");
		});
	}

	patch(){
		this.#router.patch("/",(req, res) => {
			res.send("User updates");
		});
	}
}

module.exports = {
	restfulUser: new RestfulUser()
};
