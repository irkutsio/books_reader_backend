const mongoose = require('mongoose');
const DB_HOST =
	'mongodb+srv://Ira:9CsdFvTxZifadWN0@cluster0.0on18yj.mongodb.net/books_db?retryWrites=true&w=majority';

const app = require('./app');
mongoose
	.connect(DB_HOST)
	.then(() => {
		app.listen(3000, () => {
			console.log('Server running. Use our API on port: 3000');
		});
	})
	.catch(error => {
		console.log(error.message);
		process.exit(1);
	});
