const express = require("express");
const { ControllerService } = require('../../Interface/controllerService');

class RestfulPath extends ControllerService {
    #router = null;
    constructor() {
        super()
        this.load()
        this.get()
        this.post()
        this.delete()
        this.patch()
    }
    load() {
        this.#router = express.Router();
    }

    get blueprint() {
        return this.#router
    }

    get() {
        this.#router.get("/", (req, res) => {
            res.send("Path");
        });

        this.#router.get("/list", (req, res) => {
            res.send("Path list");
        });
    }

    post() {
        this.#router.post("/", (req, res) => {
            res.send("Path post");
        });
    }

    delete() {
        this.#router.delete("/", (req, res) => {
            res.send("Path delete");
        });
    }

    patch() {
        this.#router.patch("/", (req, res) => {
            res.send("Path update");
        });
    }

}


module.exports = {
    restfulPath: new RestfulPath()
};
