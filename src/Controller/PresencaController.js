const Presenca = require('../model/Presencas');
const Presente = require('../model/Presentes');

function  ConfirmarPresenca(req, res){
  const Nome = req.body.nome;
  const Acompanhantes = req.body.acompanhantes;
  const NomePresente = req.body.presente;

  console.log(NomePresente)
  
  const presente = new Presente({NomePresente});
  const presenca = new Presenca({Nome, Acompanhantes});

  presente.save();

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