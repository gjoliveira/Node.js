const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/projects', function (request, response) {
	return response.json(['projeto 1', 'projeto 2']);
});

app.listen(3000, () => {
	console.log('App is running on port 3000...');
});
