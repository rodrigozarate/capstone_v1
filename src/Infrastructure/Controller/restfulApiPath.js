const express = require("express");
const { ControllerService } = require('../../Interface/controllerService');

class RestfulPath extends ControllerService {
    router = null;
    constructor() {
        super()
        this.load()
        this.get()
        this.post()
        this.delete()
        this.patch()
    }
    load() {
        this.router = express.Router();
    }

    get blueprint() {
        return this.router
    }

    get() {
        this.router.get("/", (req, res) => {
	    // if (req.session.user){
	    // res.send({message: "First initialized session please !"});
	    // }
	    const { subscription_id } = req.session.user;
	    const database = mysql.initDatabase();
	    const query = 'SELECT * FROM SubscriptionRoute WHERE subscription_id = ?';
	    database.query(query, [subscription_id], (err, result) => {
			    if (err) {
				if (err.code) {
				    res.status(500);
				    res.send(err);
				}
				throw (err);
			    } else {
				res.send(result);
			    }
			});
	    database.end();

            res.send("Path");
        });

        // this.router.get("/list", (req, res) => {
        //     res.send("Path list");
        // });
    }

    // post() {
    //     this.router.post("/", (req, res) => {
    //         res.send("Path post");
    //     });
    // }

    // delete() {
    //     this.router.delete("/", (req, res) => {
    //         res.send("Path delete");
    //     });
    // }

    // patch() {
    //     this.router.patch("/", (req, res) => {
    //         res.send("Path update");
    //     });
    // }

}


module.exports = {
    restfulPath: new RestfulPath()
};
