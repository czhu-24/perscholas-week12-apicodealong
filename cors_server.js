const express = require("express");
const cors = require('cors');
const path = require('path');
const PORT = 3000;
const app = express();

// allow (cross-origin?) requests from certain places
app.use(cors({
	origin: "*" // this is too open for irl uses
}))

// allows for req.body
app.use(express.json()); 

// serving ourpublic folder
// __dirname: absolute path to current directory
app.use(express.static(path.join(__dirname, "public")));


// routes

app.get("/data" , (req, res) => {
	res.send("data");
	console.log(req.body);
})


app.listen(PORT, () => {
	console.log("server running on port ", PORT);
}); 