const express = require("express");

class RestfulApiUser {
	constructor(){
		this.#router = express.Router();
	}
	
	get blueprint(){
		return this.#router;
	}
	
	get(){
		this.#router.get("/api/v1/user",(req, res) => {
			res.send("User");
		});

		this.#router.get("/api/v1/users/list",(req, res) => {
			res.send("Users list");
		});
	}

	post(){
		this.#router.post("/api/v1/user",(req, res) => {
			res.send("User post");
		});
	}

	delete(){
		this.#router.delete("/api/v1/user",(req, res) => {
			res.send("User delete");
		});
	}

	patch(){
		this.#router.patch("/api/v1/user",(req, res) => {
			res.send("User updates");
		});
	}
}

module.exports = {
	RestfulApiUser
};
