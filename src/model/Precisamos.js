const mongoose = require('mongoose')

const schema = new mongoose.Schema({
	Presente: {
		type: String,
		required: true,
	},
})

const Model = mongoose.model('Precisamos', schema)

module.exports = Model