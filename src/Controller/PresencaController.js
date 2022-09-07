const Presenca = require('../model/Presencas');

function  ConfirmarPresenca(req, res){
  const Nome = req.body.nome;
  const Acompanhantes = req.body.acompanhantes;
  
  const presenca = new Presenca({Nome, Acompanhantes});

  presenca.save()
    .then(() => {
      res
      .status(200)
      .redirect('/Presenca');
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