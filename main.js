function tocaSom(idElmentoAudio){
document.querySelector(idElementoAudio).play();}

     const listaDeTeclas = document.querySelectorAll('.tecla');

// extrair de repetição - Enquanto
while(contador < listaDeTeclas.length) {
    let contador = 0;
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_splash');
    };

    contador = contador+1;
}

const instrumento = ListaDeTeclas[contador].classList[1];

console.log(instrumento);
listaDeTeclas[contador].onclick = function(){
    tocaSom('#som_tecla_splash');
}
