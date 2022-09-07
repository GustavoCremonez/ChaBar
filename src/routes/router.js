const router = require('express').Router();
const PresencaController = require('../Controller/PresencaController');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sugestao', (req, res) => {
  res.render('Sugestao');
});

router.get('/Presenca', (req, res) => {
  res.render('Presenca');
});

router.post('/confirmarPresenca', PresencaController.ConfirmarPresenca);

module.exports = router;