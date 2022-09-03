const imagens = document.querySelectorAll('.slide')
const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')

let imagemAtual = 0

setaAvancar.addEventListener('click', () => {
  if(imagemAtual === imagens.length - 1) {
    return;
  }

  imagemAtual++

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
})

setaVoltar.addEventListener('click', () => {
  if(imagemAtual === 0){
    return;
 }
  
  imagemAtual--

  esconderImagemAberta();
  mostrarImagem();
  mostrarOuEsconderSetas();
})

function esconderImagemAberta() {
  const imagemAberta = document.querySelector('.mostrar')
  imagemAberta.classList.remove('mostrar')
}

function mostrarImagem() {
  imagens[imagemAtual].classList.add('mostrar')
}

function mostrarOuEsconderSetas(){
  const naoEhAPirmeiraImagem = imagemAtual !== 0;
  if(naoEhAPirmeiraImagem){
    setaVoltar.classList.remove('opacidade');
  }else{
    setaVoltar.classList.add('opacidade');
  }

  const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
  if(chegouNaUltimaImagem){
    setaAvancar.classList.add('opacidade');
  }else{
    setaAvancar.classList.remove('opacidade');
  }
}


