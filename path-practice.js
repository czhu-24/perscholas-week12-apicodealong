const path = require("path");
const express = require("express");
const server = express();

// Sending a normal file
// __dirname is an environment variable, i think?
// there oughta be a way to do this without the path module
server.get('/recursion', (req, res) => {
	let absolutePath = path.join(__dirname, "/files/song.mp3");
	res.sendFile(absolutePath);
});

// 1) adding a name to an array via PARAMS
// param is part of the path
let names = ["Jerry"];

server.put("/addPerson/:nameToAdd", (req, res) => {
	// "http://localhost:3000/addPerson/Jasmine" is an endpoint for this route
	names.push(req.params.nameToAdd);
	res.send("added a person!");
});

// 2) adding a name via QUERIES
server.put("/addPerson", (req, res) => {
	// http://localhost:3000/addPerson/?personName=Kelly is an example endpoint
	names.push(req.query.personName);
	res.send("added a person!");
});

// 3) sending data via req.body object
// NOT in URL at all
// DOES NOT WORK FOR GET REQUESTS -- NO ERROR MSGS EITHER
// route path is /addAPerson because we want a new path name
// for sending lots of info

// the req.body can't be used normally... we need this line??? 
server.use(express.json()); 

server.put("/addAPerson", (req, res) => {
	console.log(req.body); // body of our request 
});

server.listen(3000, () => {
	console.log("your server has started");
});