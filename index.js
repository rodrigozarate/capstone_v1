const express = require('express');
const bodyParser = require("body-parser");
const { restfulUser } = require("./src/Infrastructure/Controller/restfulApiUser");
const { restfulSubscription } = require("./src/Infrastructure/Controller/restfullApiSubscription");
const { restfulPath } = require("./src/Infrastructure/Controller/restfulApiPath");
const app = express();


app.use(bodyParser.json());

app.use("/api/v1/user", restfulUser.blueprint);
app.use("/api/v1/subscription", restfulSubscription.blueprint);
app.use("/api/v1/path", restfulPath.blueprint);


app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
