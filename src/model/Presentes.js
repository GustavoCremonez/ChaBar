const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	NomePresente: {
		type: String,
		required: true,
		unique: true,
	},
})

const Model = mongoose.model('Presentes', schema)

module.exports = Model