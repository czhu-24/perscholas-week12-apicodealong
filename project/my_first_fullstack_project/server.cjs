const express = require("express");
// also import cors... because of vite? vite makes everything a module
const path = require("path");
const PORT = 3005;
const app = express();
const morgan = require('morgan');

// get dir folder from npm run build
// app.use(express.static(path.join(__dirname, "dist")));

const middleware = (req, res, next) => {
	console.log("doing stuff");
	next();
}

app.use(cors({
	origin: "*"
}))

app.use(morgan('dev'));

app.get("/data", (req, res) => {
	res.send("DATAAAAA");
})

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
