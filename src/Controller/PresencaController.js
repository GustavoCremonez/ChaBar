
function  ConfirmarPresenca(req, res){
  const form = req.body;
  

  res
  .status(200)
  .redirect('/Presenca')
}

module.exports = {
  ConfirmarPresenca,
}