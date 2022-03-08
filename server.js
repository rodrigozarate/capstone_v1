const http = require('http');
const port = 3000;
const host = 'localhost';

const requestListener = (req, res) => {
	res.writeHead(200);
	res.end();
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log("Server Running on port: " + port);
})