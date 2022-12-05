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
		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			err: 'nome',
		});
	}

	if (
		!Acompanhantes ||
		isNaN(Acompanhantes) ||
		Acompanhantes === null ||
		Acompanhantes === undefined
	) {
		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			err: 'Acompanhantes',
		});
	}

	if (
		Presente === 'Selecione um presente' ||
		Presente === null ||
		Presente === undefined
	) {
		return res.render('Presenca', {
			presencaMarcada: false,
			itens,
			err: 'Presente',
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
			return res.render('Presenca', {
				presencaMarcada: true,
				itens,
				err: '',
			});
		})
		.catch((error) => {
			return res.render('Presenca', {
				presencaMarcada: false,
				itens,
				err: error,
			});
		});
}

module.exports = {
	PegueItensFaltantes,
	CadastrarPresenca,
};
