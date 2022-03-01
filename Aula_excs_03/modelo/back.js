function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = Number(document.getElementById("txtano").value);
  var res = document.getElementById("res");
  if(fano<1930 || fano>2022){
    window.alert("Verifique os dados e tente novamente!!");
    
  }else{
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano;
    var gênero = "";
    var img = document.createElement('img');
    img.setAttribute('id','foto');
    if(fsex[0].checked){
      gênero = "Homem";

      if(idade >=0 && idade<10){
        //criança
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-bebe-m.png');
        
      }else if(idade<21){
        //jovem
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-jovem-m.png');

      }else if(idade<50){
        //adulto
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-adulto-m.png');

      }else{
        //idoso
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-idoso-m.png');

      }
    }else if(fsex[1].checked){
      gênero = "Mulher";

      if(idade >=0 && idade<10){
        //criança
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-bebe-f.png');
        
      }else if(idade<21){
        //jovem
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-jovem-f.png');

      }else if(idade<50){
        //adulto
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-adulto-f.png');

      }else{
        //idoso
        img.setAttribute('src', '../Fotos Ex15 Curso JS/foto-idoso-f.png');
        
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
    res.appendChild(img);
  }

}