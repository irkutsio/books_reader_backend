const mongoose = require('mongoose');

const {DB_HOST} = process.env

// console.log(process.env.DB_HOST)

const app = require('./app');
mongoose
	.connect(DB_HOST)
	.then(() => {
		app.listen(3000, () => {
			console.log('Database connection successful');
		});
	})
	.catch(error => {
		console.log(error.message);
		process.exit(1);
	});
