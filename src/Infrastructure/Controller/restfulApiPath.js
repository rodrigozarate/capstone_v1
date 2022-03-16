const express = require("express");
const { ControllerService } = require('../../Interface/controllerService');
const { mysql } = require('../../Infrastructure/Repository/mysql');

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
            if (!req.session.user){
                res.send({message: "Init Session First"})
            }
            const { subscription_id } = req.session.user;
            console.log(req.session.user)
            console.log(subscription_id)
            const database = mysql.initDatabase();
            const query = 'SELECT route_id, path FROM SubscriptionRoute JOIN Route ON route_id = Route.id WHERE subscription_id = ?';
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
        });
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
