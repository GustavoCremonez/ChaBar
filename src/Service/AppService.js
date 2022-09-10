const PresencaController = require('../Controller/PresencaController');
const PrecisamosController = require('../Controller/PrecisamosController')

async function PegueItensFaltantes(){
  const confirmados = await PresencaController.PresentesConfirmados();

  const itensFaltantes = await PrecisamosController.ItensQueNaoTemos(confirmados);

  return itensFaltantes
}

async function CadastrarPresenca(req, res) {
  const Nome = req.body.nome, 
        Acompanhantes  = req.body.acompanhantes,
        Presente = req.body.presente;

  const nomePresente = await PrecisamosController.PegaNomePresente(Presente);

  let Entidade = {
    Nome,
    Acompanhantes,
    Presente: nomePresente.Presente 
  };

  PresencaController.ConfirmarPresenca(Entidade)
  .then(async () => {
    const itens = await PegueItensFaltantes();
    res.render('Presenca', {presencaMarcada: true, itens})
  })
  .catch((error) => {
    throw(error);
  })
}

module.exports = {
  PegueItensFaltantes,
  CadastrarPresenca
}