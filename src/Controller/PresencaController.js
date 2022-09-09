const Presenca = require('../model/Presencas');

async function  ConfirmarPresenca(req, res){
  const Nome = req.body.nome;
  const Acompanhantes = req.body.acompanhantes;
  const Presente = req.body.presente

  const presenca = new Presenca({Nome, Acompanhantes, Presente});

  presenca.save()
    .then(() => {
      res
      .status(200)
      .render('Presenca', {presencaMarcada: true});
    })
    .catch((error) => {
      res
      .status(500)
      .redirect('/Presenca');
    })
}

module.exports = {
  ConfirmarPresenca,
}