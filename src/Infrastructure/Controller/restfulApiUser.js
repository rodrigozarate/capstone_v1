const express = require("express");

class RestfulUser {
	#router = null;
	
	constructor(){
		this.#router = express.Router();
	}
	
	get blueprint(){
		return this.#router;
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
			res.send("User post");
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