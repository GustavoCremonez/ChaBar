const mongoose = require('mongoose')
require('dotenv').config()

const db_host = process.env.DB_HOST
const db_port = process.env.DB_PORT
const db_name = process.env.DB_NAME

function connect() {
	mongoose.connect(`mongodb://${db_host}:${db_port}/${db_name}`)

	const db = mongoose.connection

	db.once('open', () => {
		console.log('Connect to database!')
	})

	db.on('error', console.error.bind(console, 'Connection error:'))
}

module.exports = {
	connect
}