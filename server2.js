const express = require('express');

const app = express();

app.get("/", (req, res) => {
	res.send("Welcome to my server, make a request to '/info' to learn more!");
});
app.get("/info", (req, res) => {
	res.send("This server will send you data about the creator of this server if you make a GET request to '/data'");
});
app.get("/data", (req, res) => {
	res.send({name: "Cynthia", city: "Seattle", favorite_number: 24});
});

app.listen(3000, () => {
	console.log("server has started");
});


