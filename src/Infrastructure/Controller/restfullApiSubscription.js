const express = require("express");
const { ControllerService } = require('../../Interface/controllerService');

class RestfulSubscription extends ControllerService {
    router = null;
    constructor(){
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
    
    get blueprint(){
        return this.router
    }

    get() {
        this.router.get("/", (req, res) => {
            res.send("Subscription");
        });

        this.router.get("/list", (req, res) => {
            res.send("Subscription list");
        });
    }

    post() {
        this.router.post("/", (req, res) => {
            res.send("Subscription post");
        });
    }

    delete() {
        this.router.delete("/", (req, res) => {
            res.send("Subscription delete");
        });
    }

    patch() {
        this.router.patch("/", (req, res) => {
            res.send("Subscription update");
        });
    }

}


module.exports = {
    restfulSubscription: new RestfulSubscription()
};
