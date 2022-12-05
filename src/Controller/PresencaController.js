const Presenca = require('../model/Presencas');

async function PresentesConfirmados() {
	const confirmados = await Presenca.find();

	let presentesConfirmados = [];

	confirmados.forEach((element) => {
		presentesConfirmados.push(element.Presente);
	});

	return presentesConfirmados;
}

async function ConfirmarPresenca(entidade) {
	const { Nome, Acompanhantes, Presente } = entidade;

	const presencaSave = new Presenca({ Nome, Acompanhantes, Presente });

	await presencaSave
		.save()
		.then(() => {
			return true;
		})
		.catch((error) => {
			return error;
		});
}

module.exports = {
	ConfirmarPresenca,
	PresentesConfirmados,
};
