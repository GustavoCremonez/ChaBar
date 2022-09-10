const router = require('express').Router();
const Service = require('../Service/AppService')

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sugestao', async (req, res) => {
  const itens = await Service.PegueItensFaltantes();

  res.render('Sugestao', {itens})
});

router.get('/Presenca', async (req, res) => {
  const itens = await Service.PegueItensFaltantes();
  res.render('Presenca', {presencaMarcada: false, itens});
});

router.post('/confirmarPresenca', Service.CadastrarPresenca);

module.exports = router;