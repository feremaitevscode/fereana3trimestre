function tocaSom(idElmentoAudio){
document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');

// Estrutura de repetição - Enquanto
for(let contador = 0;contador < listaDeTeclas.length;contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    1;
}

const instrumento = listaDeTeclas[contador].classList[1];

console.log(instrumento);
listaDeTeclas[contador].onclick = function(){
    tocaSom('#som_tecla_splash');
}
