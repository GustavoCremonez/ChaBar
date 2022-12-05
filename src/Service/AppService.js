const PresencaController = require('../Controller/PresencaController');
const PrecisamosController = require('../Controller/PrecisamosController');

async function PegueItensFaltantes() {
	const confirmados = await PresencaController.PresentesConfirmados();

	const itensFaltantes = await PrecisamosController.ItensQueNaoTemos(
		confirmados,
	);

	return itensFaltantes;
}

async function CadastrarPresenca(req, res) {
	const Nome = req.body.nome,
		Acompanhantes = req.body.acompanhantes,
		Presente = req.body.presente;

	const itens = await PegueItensFaltantes();

	if (!Nome || Nome === null || Nome === undefined) {
		const error = 'nome';

		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			error,
		});
	}

	if (
		!Acompanhantes ||
		isNaN(Acompanhantes) ||
		Acompanhantes === null ||
		Acompanhantes === undefined
	) {
		const error = 'acompanhantes';
		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			error,
		});
	}

	if (
		Presente === 'Selecione um presente' ||
		Presente === null ||
		Presente === undefined
	) {
		const error = 'presente';
		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			error,
		});
	}

	const nomePresente = await PrecisamosController.PegaNomePresente(Presente);

	let Entidade = {
		Nome,
		Acompanhantes,
		Presente: nomePresente.Presente,
	};

	PresencaController.ConfirmarPresenca(Entidade)
		.then(async () => {
			const error = '';
			return res.render('Presenca', {
				presencaMarcada: true,
				itens,
				error,
			});
		})
		.catch((error) => {
			return res.render('Presenca', {
				presencaMarcada: false,
				itens,
				error,
			});
		});
}

module.exports = {
	PegueItensFaltantes,
	CadastrarPresenca,
};
