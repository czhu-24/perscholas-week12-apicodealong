const express = require('express');

const app = express();

const codingBootcamps = [
    {
        id: 1,
        name: "PerScholas",
        location: "Multiple Locations",
        duration: "15 weeks",
        languages: ["JavaScript", "HTML", "CSS", "Java", "React"],
        price: "$0",
        ranking: 1
    },
    {
        id: 2,
        name: "CodeMaster Academy",
        location: "New York",
        duration: "12 weeks",
        languages: ["JavaScript", "HTML", "CSS"],
        price: "$10,000",
        ranking: 2
    },
    {
        id: 3,
        name: "TechSavvy",
        location: "San Francisco",
        duration: "15 weeks",
        languages: ["Python", "React", "Node.js"],
        price: "$12,000",
        ranking: 3
    },
    {
        id: 4,
        name: "CodeCrafters",
        location: "Los Angeles",
        duration: "10 weeks",
        languages: ["Java", "Spring Boot", "SQL"],
        price: "$11,000",
        ranking: 4
    },
    {
        id: 5,
        name: "FullStack Institute",
        location: "Seattle",
        duration: "14 weeks",
        languages: ["JavaScript", "React", "Express.js"],
        price: "$13,000",
        ranking: 5
    },
    {
        id: 6,
        name: "NextGen Coders",
        location: "Chicago",
        duration: "13 weeks",
        languages: ["Ruby", "Rails", "PostgreSQL"],
        price: "$10,500",
        ranking: 6
    },
    {
        id: 7,
        name: "WebTech Bootcamp",
        location: "Boston",
        duration: "12 weeks",
        languages: ["Go", "Docker", "Kubernetes"],
        price: "$12,500",
        ranking: 7
    },
    {
        id: 8,
        name: "DeepDive Academy",
        location: "Dallas",
        duration: "11 weeks",
        languages: ["C#", ".NET", "MSSQL"],
        price: "$11,500",
        ranking: 8
    },
    {
        id: 9,
        name: "CodeWave Camps",
        location: "Miami",
        duration: "16 weeks",
        languages: ["TypeScript", "Angular", "Firebase"],
        price: "$13,500",
        ranking: 9
    },
    {
        id: 10,
        name: "BinaryBrains",
        location: "Atlanta",
        duration: "14 weeks",
        languages: ["PHP", "Laravel", "Vue.js"],
        price: "$11,000",
        ranking: 10
    },
    {
        id: 11,
        name: "TechFront Academy",
        location: "Denver",
        duration: "12 weeks",
        languages: ["Rust", "WebAssembly", "MongoDB"],
        price: "$12,000",
        ranking: 11
    }
];

// routes
app.get('/', (req, res) => {
	res.send("Welcome to BootCampsAPI! You can query /bootcamps, ....");
});
// get all data
app.get('/bootcamps', (req, res) => {
	res.send(codingBootcamps);
});
// data simplified
app.get('/bootcamps/simple', (req, res) => {
	// res.send(codingBootcamps.map((bootcamp) => {
	// 	return { name: bootcamp.name, price: bootcamp.price}}));
	let simpleArray = codingBootcamps.map((bootcamp) => ({name: bootcamp.name, price: bootcamp.price}));
	res.send(simpleArray);
});
// // filter by price
// app.get('/bootcamps/cheap', (req, res) => {
// 	let cheapArray = codingBootcamps.filter((bootcamp) => (bootcamp.price.slice(1) < 15000));
// 	res.send(cheapArray);
// });

// filter by price FOR REALSIES
app.get('/bootcamps/:maxPrice', (req, res) => {
	const cheapSchools = codingBootcamps.filter((bootcamp) => {
		if(bootcamp.price.replace(/\D+/g, '') < req.params.maxPrice){
			return true;
		}else{
			return false;
		}
	});
	res.send(cheapSchools);
});

// start server on port & run everything in callback fn
app.listen(3000, () => {
	console.log("server is starting");
});