

function verificar(){
  var valor = document.getElementById("txt").value;
  var res = document.getElementById("res");
  if(valor == "Brasil"){
    res.innerHTML = `Você vive em <strong>${valor}</strong>, portanto é Brasileiro`;
  }else{
    res.innerHTML = `Você vive em <strong>${valor}</strong>, portanto é Estrangeiro`;
  }
}