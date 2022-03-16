const express = require("express");
const bcrypt = require('bcryptjs');
const { ControllerService } = require('../../Interface/controllerService');
const { mysql } = require('../../Infrastructure/Repository/mysql');

class RestfulAdmin extends ControllerService {
    router = null;

    constructor() {
        super();
        this.load();
        this.get();
        this.delete();
        this.post();
        this.patch();
    }

    get blueprint() {
        return this.router;
    }

    load() {
        this.router = express.Router();
    }
    
    get() {
        this.router.post("/", (req, res) => {
            const { email, password } = req.body;
            const database = mysql.initDatabase();
            const query = 'SELECT * FROM Admin WHERE email = ?';
            database.query(query, [email], (err, result) => {
                if (err) {
                    if (err.code) {
                        res.status(500);
                        res.send(err);
                    }
                    throw (err);
                } else {
                    if (result.length != 0) {
                        if (bcrypt.compareSync(password, result[0].password)) {
                            req.session.admin = result[0];
                        } else {
                            res.send({ message: "Password is incorrect" });
                        }
                    } else {
                        res.send({ message: "Email is incorrect" });
                    }
                }
            });
            const query2 = 'SELECT * FROM User';
            database.query(query2, (err, result) => {
                if (err) throw err;
                res.send(result);
            });
            database.end();
        });
    }

    delete() {
        this.router.delete("/", (req, res) => {
            console.log(req.session.user)
            const { id } = req.body
	    
            const database = mysql.initDatabase();
            const query = 'DELETE FROM User WHERE id = ?';
            database.query(query, [id], (err, result) => {
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
    
    patch() {
        this.router.patch("/", (req, res) => {
            const { id, first_name, last_name, email, company, phone_number } = req.body;
            const query = 'UPDATE User SET first_name = ?, last_name = ?, email = ?, company = ?, phone_number = ? WHERE id = ?';
            const database = mysql.initDatabase();
            database.query(query, [first_name, last_name, email, company, phone_number, id], (err, result) => {
                if (err) {
                    throw (err);
                } else {
                    if (result.affectedRows !== 0){
                        res.status(200);
                        res.send({ message: "Update User Success !" });
                    } else {
                        res.status(404);
                        res.send({message: "User not found !"});
                    }
                }
            });
            database.end();
        });
    }
}

module.exports = {
    restfulAdmin: new RestfulAdmin()
};
