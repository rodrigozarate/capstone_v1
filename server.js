const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("hello world");
})

app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
