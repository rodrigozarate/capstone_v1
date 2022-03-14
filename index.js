const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { restfulUser } = require("./src/Infrastructure/Controller/restfulApiUser");
const { restfulSubscription } = require("./src/Infrastructure/Controller/restfullApiSubscription");
const { restfulPath } = require("./src/Infrastructure/Controller/restfulApiPath");
const { restfulAdmin } = require("./src/Infrastructure/Controller/restfulApiAdmin");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	secret: "alassessionpwd",
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 60000,
	}
}));

app.use("/api/v1/user", restfulUser.blueprint);
app.use("/api/v1/subscription", restfulSubscription.blueprint);
app.use("/api/v1/path", restfulPath.blueprint);
app.use("/api/v1/admin", restfulAdmin.blueprint);


app.listen(5000, 'localhost', () => {
	console.log("Running in locahost:5000");
});
