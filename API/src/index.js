"use strict";
const express = require('express');
const cors = require('cors');
const Surreal = require('surrealdb.js').default;
const db = new Surreal('http://db:3002/rpc');
const app = express();
db.signin({
    user: 'root',
    pass: 'root',
});
db.use('test', 'test');
console.log("Running");
app.get('/get/', cors(), async (req, res) => {
    console.log("/get?" + req.query.id);
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
    console.log("/catgeories");
    res.writeHead(200, { "Content-Type": "application/json" });
    let types = await db.select("types");
    res.write(JSON.stringify(types));
    res.send();
});
app.get("/test", cors(), (req, res) => {
    res.write("Test");
    res.send();
});
var books = db.select('books');
books.then((books) => { console.log(books); });
console.log(books);
let port = 3001;
app.listen(port);
console.log("running on " + port);
