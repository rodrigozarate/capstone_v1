const express = require("express");
const { ControllerService } = require('../../Interface/controllerService');

class RestfulUser extends ControllerService {
	// #router = null;
	
	constructor(){
		super();
	}
	
	get blueprint(){
		return this.router;
	}

	load(){
		this.router = express.Router();
	}
	get(){
		this.router.get("/",(req, res) => {
			res.send("User");
		});

		this.router.get("/list",(req, res) => {
			res.send("Users list");
		});
	}

	post(){
		this.router.post("/",(req, res) => {
			res.send("User post");
		});
	}

	delete(){
		this.router.delete("/",(req, res) => {
			res.send("User delete");
		});
	}

	patch(){
		this.router.patch("/",(req, res) => {
			res.send("User updates");
		});
	}
}

module.exports = {
	restfulUser: new RestfulUser()
};
