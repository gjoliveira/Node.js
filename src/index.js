const express = require('express');

const app = express();

app.use(express.json());

// Get https://localhost:3000/projects?title=Node&owner=Gabriel

// Get https://localhost:3000/projects?page=10&limit=5

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/projects', function (request, response) {
	const query = request.query;
	console.log(query);

	const { title, owner } = request.query;
	console.log(title, owner);

	return response.json(['projeto 1', 'projeto 2']);
});

app.post('/projects', function (request, response) {
	const body = request.body;
	console.log(body);

	const { title, owner } = request.body;
	console.log(title, owner);

	return response.json(['projeto 1', 'projeto 2', 'projeto 3']);
});

app.put('/projects/:id/:name', function (request, response) {
	const params = request.params;
	console.log(params);

	const { id, name } = request.params;
	console.log(id, name);

	return response.json(['projeto 1', 'projeto 2', 'projeto 3 atualizado...']);
});

app.patch('/projects/:id/', function (request, response) {
	const query = request.query;
	console.log(query);
	console.log('\r');

	const params = request.params;
	console.log(params);
	console.log('\r');

	const body = request.body;
	console.log(body);
	console.log('\r');

	return response.json(['projeto 1', 'projeto 2', 'projeto 3 atualizado...']);
});

app.delete('/projects/:id', function (request, response) {
	return response.json(['projeto 1', 'projeto 2', 'projeto 3 deletado...']);
});

app.listen(3000, () => {
	console.log('App is running on port 3000...');
});
