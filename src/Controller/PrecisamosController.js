const Precisamos = require('../model/Precisamos');

async function ItensQueNaoTemos(confirmados){
  const precisamos = await Precisamos.find();

  const ItensFaltantes = precisamos.filter( a => !confirmados.includes(a.Presente.Numero));
  
  return ItensFaltantes;
}

async function PegaNomePresente(NumeroPresente) {
  const presente  = await Precisamos.findOne({Numero: NumeroPresente}, '-_id Presente');

  return presente
}

module.exports = {
  ItensQueNaoTemos,
  PegaNomePresente
}