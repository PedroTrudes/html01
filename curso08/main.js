
function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//para
for (let contador =0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

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