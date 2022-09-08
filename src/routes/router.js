const router = require('express').Router();
const PresencaController = require('../Controller/PresencaController');
const PrecisamosController = require('../Controller/PrecisamosController');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sugestao', PrecisamosController.ListaSugestões);

router.get('/Presenca', (req, res) => {
  res.render('Presenca');
});

router.post('/confirmarPresenca', PresencaController.ConfirmarPresenca);

module.exports = router;