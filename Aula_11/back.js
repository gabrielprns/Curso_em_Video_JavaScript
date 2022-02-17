var txtvel = document.getElementById("txtvel");
var res = document.getElementById("res");
var vel = Number(txtvel.value);

function calcular(){
  res.innerhtml = `<p>Sua velocidade atual é de <strong>${vel} km/h </strong> </p>`;

}