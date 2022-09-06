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

router.post('/confirmarPresenca', (req, res) => {
  const recebi = req.body;
  console.log(recebi)

  res.send('ok')
})

module.exports = router;