const { RestfulUser } = require("./src/Infrastructure/Controller/restfulApiUser");
const express = require('express');
const app = express();


app.use(RestfulUser.blueprint);

// app.delete("/api/v1/user", (req, res) => {
// 	res.send("User profile");
// })

// app.delete("/api/v1/subscription", (req, res) => {
// 	res.send("User suscription");
// })

// app.delete("/api/v1/list", (req, res) => {
// 	res.send("List files");
// });





app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
