function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("elemento não encontrado ou selector invalido");
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; // template string
  console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

/*
function tocaSomPom(){
    
    document.querySelector('#som_tecla_pom').play();

}
function tocaSomClap(){

    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/
