const { restfulUser } = require("./src/Infrastructure/Controller/restfulApiUser");
const express = require('express');
const app = express();


app.use("/api/v1/user", restfulUser.blueprint);


app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
