function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = Number(document.getElementById("txtano").value);
  var res = document.getElementById("res");
  if(fano<1930 || fano>2022){
    window.alert("Verifique os dados e tente novamente!!");
  }

}