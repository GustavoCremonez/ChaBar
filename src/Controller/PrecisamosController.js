const Presenca = require('../model/Presencas');
const Precisamos = require('../model/Precisamos');

async function PresentesConfirmados() {
  const confirmados = await Presenca.find();
  
  let presentesConfirmados = [];

  confirmados.forEach(element => {
    presentesConfirmados.push(element.Presente);
  });

  return presentesConfirmados;
} 

async function ListaSugestões(req, res){
  const confirmados  = await PresentesConfirmados();
  const precisamos = await Precisamos.find();

  const diferenca = precisamos.filter( a => !confirmados.includes(a.Presente));

  res.render("Sugestao", {diferenca});
} 

module.exports = {
  ListaSugestões
}