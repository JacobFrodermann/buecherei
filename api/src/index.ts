//import Surreal from "surrealdb.js";
import express from 'express';
import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');
const app = express()
const port = 3000

try {
	await db.signin({
		user: 'root',
		pass: 'root',
	});
	
	// Select a specific namespace / database
	await db.use('test', 'test');
} catch (e) {
	console.log('ERROR', e);
}

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})