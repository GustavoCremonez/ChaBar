const router = require('express').Router();
const Service = require('../Service/AppService');

router.get('/', (_req, res) => {
	return res.render('home');
});

router.get('/Sugestao', async (_req, res) => {
	const itens = await Service.PegueItensFaltantes();

	return res.render('Sugestao', { itens });
});

router.get('/Presenca', async (_req, res) => {
	const itens = await Service.PegueItensFaltantes();
	return res.render('Presenca', {
		presencaMarcada: false,
		itens,
		err: false,
	});
});

router.post('/confirmarPresenca', Service.CadastrarPresenca);

module.exports = router;
