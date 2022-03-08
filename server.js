const express = require('express');
const app = express();

// get endpoints
app.get("api/v1/user", (req, res) => {
	res.send("User profile");
})

app.get("api/v1/subscription", (req, res) => {
	res.send("User suscription");
})

app.get("api/v1/list", (req, res) => {
	res.send("List files");

// Post endpoints
});app.post("api/v1/user", (req, res) => {
	res.send("User profile");
})

app.post("api/v1/subscription", (req, res) => {
	res.send("User suscription");
})

app.post("api/v1/list", (req, res) => {
	res.send("List files");
});

// Delete Endpoints
app.delete("api/v1/user", (req, res) => {
	res.send("User profile");
})

app.delete("api/v1/subscription", (req, res) => {
	res.send("User suscription");
})

app.delete("api/v1/list", (req, res) => {
	res.send("List files");
});





app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
