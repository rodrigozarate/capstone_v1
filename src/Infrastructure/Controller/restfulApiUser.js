const express = require("express");
const bcrypt = require('bcryptjs');
const { ControllerService } = require('../../Interface/controllerService');
const { mysql } = require('../../Infrastructure/Repository/mysql');

class RestfulUser extends ControllerService {
	// #router = null;
	
	constructor(){
		super();
		this.load();
		this.get();
		this.delete();
		this.post();
		this.patch();
	}
	
	get blueprint(){
		return this.router;
	}

	load(){
		this.router = express.Router();
	}
	get(){
	    this.router.post("/login",(req, res) => {

			// if (req.session.user){
			// 	res.send({message: "First initialized session please !"});
			// }
			const { email, password } = req.body;
			const database = mysql.initDatabase();
			const query = 'SELECT * FROM User WHERE email = ?';
			database.query(query, [email], (err, result) => {
				if (err) {
					if (err.code) {
						res.status(500);
						res.send(err);
					}
					throw (err);
				} else {
					if (result.length != 0){
						if (bcrypt.compareSync(password, result[0].password)) {
							req.session.user = result[0];
							res.send(result[0]);
						} else {
							res.send({ message: "Password is incorrect" });
						}
					} else {
						res.send({ message: "Email is incorrect" });
					}
				}
			});
			database.end();
		});
	    
	    this.router.get("/list",(req, res) => {
		res.send("Users list");
	    });
	}

	post(){
		this.router.post("/",(req, res) => {
			const { first_name, last_name, email, password, company, phone_number } = req.body;
			const salt = bcrypt.genSaltSync(10);
			const passwordHash = bcrypt.hashSync(password, salt);
		
			const database = mysql.initDatabase();
			const query = 'INSERT INTO User(first_name, last_name, email, password, company, phone_number) VALUES (?, ?, ?, ?, ?, ?)';
			database.query(query, [first_name, last_name, email, passwordHash, company, phone_number], (err, result) => {
				if (err) {
					if (err.code === "ER_DUP_ENTRY"){
						res.status(500);
						res.send({message: "Email field is duplicate"})
					}
					if (err.code === "ER_BAD_NULL_ERROR"){
						res.status(500);
						res.send({message: "There are a column in blank"});
					}
				} else {
					res.send({ message: "Register Success !"});
				}
			});
			database.end();
		});
	}

	delete(){
		this.router.delete("/",(req, res) => {
			console.log(req.session.user)
			
			const database = mysql.initDatabase();
			const query = 'DELETE FROM User WHERE id = ?';
			database.query(query, [req.session.user.id], (err, result) => {
				if (err) {
					throw (err);
				} else {
					// redirect
					res.status(200);
					res.send({ message: "Delete Success !" });
				}
			});
			database.end();
		});
	}

	patch(){
		this.router.patch("/",(req, res) => {
			const {first_name, last_name, email, company, phone_number} = req.body;
			const query = 'UPDATE User SET first_name = ?, last_name = ?, email = ?, company = ?, phone_number = ? WHERE id = ?';
			const database = mysql.initDatabase();
			database.query(query, [first_name, last_name , email, company, phone_number, req.session.user.id], (err, result) => {
				if (err) {
					throw (err);
				} else {
					res.status(200);
					res.send({ message: "Update Success !" });
				}
			});
			database.end();
			req.session.user.first_name = first_name;
			req.session.user.last_name = last_name;
			req.session.user.email = email;
			req.session.user.company = company;
			req.session.user.phone_number = phone_number;
		});
	}
}

module.exports = {
	restfulUser: new RestfulUser()
};
