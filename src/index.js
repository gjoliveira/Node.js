const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const projects = [];

//Get https://localhost:3000/projects?title=Node&owner=Gabriel

//Get https://localhost:3000/projects?page=10&limit=5

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/projects', function (request, response) {
	return response.json(projects);
});

app.post('/projects', function (request, response) {
	const project = { id: uuidv4(), ...request.body };
	projects.push(project);
	return response.status(201).json(project);
});

app.put('/projects/:id', function (request, response) {
	const { id } = request.params;
	//const id = request.params.id;
	const { name, owner } = request.body;
	const projectIndex = projects.findIndex((project) => project.id === id);

	if (projectIndex < 0) {
		return response.status(404).json({ error: 'Project not found' });
	}

	if (!name || !owner) {
		return response.status(400).json({ error: 'Missing parameters' });
	}

	const project = {
		id,
		name,
		owner,
	};

	projects[projectIndex] = project;
	return response.json(project);
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
	const { id } = request.params;
	//const id = request.params.id;
	const projectIndex = projects.findIndex((project) => project.id === id);

	if (projectIndex < 0) {
		return response.status(404).json({ error: 'Project not found' });
	}
	projects.splice(projectIndex, 1);
	return response.status(204).send();
});

app.listen(3000, () => {
	console.log('App is running on port 3000...');
});
