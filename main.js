function tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
if(elemento === null){
    alert('Elemento não encontrado');
}
if (elemento && elemento.localName === 'audio'){
  elemento.play();
    }else {
     alert('Elemento não encontrado');
}
}
const listaDeTeclas = document.querySelectorAll('.tecla');

// Estrutura de repetição - Enquanto
for(let contador = 0;contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  console.log(idAudio);
//onclick significa "ao clicar na tecla" a função tocaSom sera executada, e qual e essa função?é a estilização de mudança de cor do botão quando s teclas Enter e Space forem apertadas  

    tecla.onclick = function(){
        tocaSom(idAudio);
    };
    //onkeydown significa "quando a tecla estiver pressionada",nesse caso uma função sera executada, e qual é essa função? È a estilização de mudança de cor do botao quando as teclas Enter e Space forem apertadas.
    tecla.onkeydown = function(evento){
        if (evento.code === 'Enter'|| evento.code ==='Space'){
        tecla.classList.add('ativa');
        }
    };
    //onkeyup significa "quando a tecla estiver erguida, não pressionada",nesse caso, a função sera removida.
        tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
        };
    console.log(instrumento);
    console.log(contador);
    }










