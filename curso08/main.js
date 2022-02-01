
function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
     // template string
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador);
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