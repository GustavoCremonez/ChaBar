const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	Nome: {
		type: String,
		required: true,
	},
	Acompanhantes: {
		type: Number,
		required: true,
  },
	Presente: {
		type: String,
		required: true,
	},
})

const Model = mongoose.model('Presencas', schema)

module.exports = Model