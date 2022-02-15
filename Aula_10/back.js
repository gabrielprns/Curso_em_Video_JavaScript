var selecionar = window.document.getElementById("area");
selecionar.addEventListener("click", clicar);
selecionar.addEventListener("mouseenter", entrar);
selecionar.addEventListener("mouseout", sair);

function clicar(){
  selecionar.innerText = "Clicou";
  selecionar.style.background = "red";
}

function entrar(){
  selecionar.innerText = "Entrou";

}

function sair(){
  selecionar.innerText = "Saiu";
  selecionar.style.background = "green";
}
