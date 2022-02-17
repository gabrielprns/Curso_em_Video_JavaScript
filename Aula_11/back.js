function calcular(){
  var txt = document.getElementById("txt");
  var res = document.getElementById("res");
  var vel = Number(txt.value);
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h </strong> </p>`;
  if(vel>60){
    res.innerHTML += `<p>Você está acima da velocidade e será <strong>Multado !</strong></p>`
  }
  res.innerHTML += "Nunca se esqueça de usar cinto de segurança !"
}