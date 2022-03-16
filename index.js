const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');
const { restfulUser } = require("./src/Infrastructure/Controller/restfulApiUser");
const { restfulSubscription } = require("./src/Infrastructure/Controller/restfullApiSubscription");
const { restfulPath } = require("./src/Infrastructure/Controller/restfulApiPath");
const { restfulAdmin } = require("./src/Infrastructure/Controller/restfulApiAdmin");
require('dotenv').config()
const app = express();


app.use(cors());
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
// app.use("/api/v1/subscription", restfulSubscription.blueprint);
app.use("/api/v1/user/routes", restfulPath.blueprint);
app.use("/api/v1/admin", restfulAdmin.blueprint);


app.listen(process.env.PORT, 'localhost', () => {
	console.log(`Running in locahost:${process.env.PORT}`);
});
