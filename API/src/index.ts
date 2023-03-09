const express = require('express');
const cors = require('cors')
const Surreal = require('surrealdb.js').default;
const bodyParser = require('body-parser');

const db = new Surreal('http://db:3002/rpc');
const app = express();

app.use(bodyParser.json())

db.signin({
	user: 'root',
	pass: 'root',
});

db.use('test', 'test')

console.log("Running")

app.get('/get/',cors(), async (req : any, res : any) => {
	console.log("/get?" + req.query.id);
	res.writeHead(200, {"Content-Type": "application/json"});
	let books
	if (req.query.type) {
		books = await db.query("SELECT * FROM books WHERE types CONTAINS types:{type}".replace("{type}", req.query.type));
	} else {
		books = await db.select('books')
	}
	res.write(JSON.stringify(books));
	res.send();
});

app.get("/catgeories", cors(), async (req : any, res : any) => {
	console.log("/catgeories");
	res.writeHead(200, {"Content-Type": "application/json"});
	let types = await db.select("types")
	res.write(JSON.stringify(types))
	res.send();
})

app.get("/test", cors(), (req: any, res: any) => {
	res.write("Test")
	res.send()})

var books = db.select('books')

app.post("/add", (req: any, res: any) => {
	console.log(req.Body)
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.writeHead(200);
	res.send()
})


books.then((books:any) => {console.log(books)})
console.log(books)

let port = 3001
app.listen(port)
console.log("running on " + port)
