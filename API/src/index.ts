const express = require('express');
const Surreal = require('surrealdb.js');

const db = new Surreal('http://127.0.0.1:8000/rpc');
const app = express();

db.signin({
	user: 'root',
	pass: 'root',
});

db.use('test', 'test')

console.log("Running")
	/* Select a specific namespace / database
	

	// Create a new person with a random id
	let created = await db.create("person", {
		title: 'Founder & CEO',
		name: {
			first: 'Tobie',
			last: 'Morgan Hitchcock',
		},
		marketing: true,
		identifier: Math.random().toString(36).substr(2, 10),
	});

	// Update a person record with a specific id
	let updated = await db.change("person:jaime", {
		marketing: true,
	});

	// Select all people records
	let people = await db.select("person");

	// Perform a custom advanced query
	let groups = await db.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
		tb: 'person',
	});

	console.log(groups)
	*/
app.get('/get/' , (req, res) => {
})