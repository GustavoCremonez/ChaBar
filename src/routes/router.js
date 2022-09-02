const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sugestao', (req, res) => {
  res.render('Sugestao');
});

router.get('/Presenca', (req, res) => {
  res.render('Presenca');
});

module.exports = router;