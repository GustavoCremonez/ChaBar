const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/Sobre', (req, res) => {
  res.render('Sobre');
});

router.get('/Entrar', (req, res) => {
  res.render('Entrar');
});

module.exports = router;