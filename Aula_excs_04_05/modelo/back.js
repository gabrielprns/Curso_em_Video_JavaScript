function contar(){
  let ini = Number(document.getElementById("txti").value);
  let fim = Number(document.getElementById("txtf").value);
  let passo = Number(document.getElementById("txtp").value);
  let res = document.getElementById("res");

  if(ini<=0 || fim<=0 ){
    res.innerHTML = "Impossível Contar!!!"
    //window.alert("Faltam Dados!!!");
  }else{
    res.innerHTML = `Contando: `;

    if(passo<=0){
      window.alert("Passo inválido. Considerando passo 1");
      passo = 1;
    }

    if(ini<fim){
      //Contagem crescente
      for(let c = ini; c<=fim; c+=passo ){
        res.innerHTML += ` ${c}, \u{1f449} `;
      }
    }else{
      //Contagem decrescente
      for(let c = ini; c>=fim; c-=passo ){
        res.innerHTML += ` ${c}, \u{1f449} `;
      }

    }
    res.innerHTML += `\u{1f3c1}`;
    
  }
}