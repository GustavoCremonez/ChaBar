const router = require('express').Router();
const PresencaController = require('../Controller/PresencaController');
const Presenca = require('../model/Presencas');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sugestao', (req, res) => {
  Presenca.find().then(presentes => {
    res.render("Sugestao", {
      Presentes: presentes,
    });
  });
});

router.get('/Presenca', (req, res) => {
  res.render('Presenca');
});

router.post('/precisamos' )

router.post('/confirmarPresenca', PresencaController.ConfirmarPresenca);

module.exports = router;