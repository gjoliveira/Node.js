const express = require('express');

const app = express();

app.get('/', function (request, response) {
	return response.json({
		message: 'App is running...',
	});
});

app.listen(3000, () => {
	console.log('App is running on port 3000...');
});
