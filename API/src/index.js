"use strict";
const express = require('express');
const cors = require('cors');
const Surreal = require('surrealdb.js').default;
const db = new Surreal('http://127.0.0.1:8000/rpc');
const app = express();
db.signin({
    user: 'root',
    pass: 'root',
});
db.use('test', 'test');
console.log("Running");
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
app.get('/get/', cors(), async (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let books;
    if (req.query.type) {
        books = await db.query("SELECT * FROM books WHERE types CONTAINS types:{type}".replace("{type}", req.query.type));
    }
    else {
        books = await db.select('books');
    }
    res.write(JSON.stringify(books));
    res.send();
});
app.get("/catgeories", cors(), async (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let types = await db.select("types");
    res.write(JSON.stringify(types));
    res.send();
});
app.listen(3001);
