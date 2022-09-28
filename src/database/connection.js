const mongoose = require('mongoose')
require('dotenv').config()

const DB = process.env.DB

function connect() {
	mongoose.connect(
		DB,
			{useNewUrlParser: true, useUnifiedTopology: true},
      () => console.log(" Mongoose is connected")
    );

	const db = mongoose.connection

	db.once('open', () => {
		console.log('Connect to database!')
	})

	db.on('error', console.error.bind(console, 'Connection error:'))
}

module.exports = {
	connect
}