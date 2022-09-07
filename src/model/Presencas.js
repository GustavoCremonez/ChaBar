const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	Nome: {
		type: String,
		required: true,
	},
	Acompanhantes: {
		type: Number,
		required: true,
  }
})

const Model = mongoose.model('Presenca', schema)

module.exports = Model