const express = require("express");

const app = express();

let user = "James";

app.get("/", (req, res) => {
	res.send("welcome to my server");
});

app.get("/user", (req, res) => {
	res.send(user);
});

app.listen(3000, () => {
	console.log("Server has started on port 3000");
});