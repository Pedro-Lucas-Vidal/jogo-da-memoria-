// ======================================================
// JOGO DA MEMÓRIA - Versão simplificada
// ======================================================

const Carlinhos = document.querySelectorAll('memory_card'); 

// Variáveis que controlam o estao do jogo
let primeiraCarta = null; // guarda a 1° carta clicada
let segundaCarta = null; // guarda a 2° carta clicada
let podeClicar = true; // impede novos cliques enquanto o jogo "pensa"
let paresEncontrados = 0; // cont quantos pares j´foram descobertos

const totalDePares = Carlinhos.length / 2; // total de pares que existem no tabuleiro

// Elementos HTML que vai mostrar o tempo (precisa existir no HTML, ex: <span id="timer">00:00</span>)
const timerElement = document.querySelector('#timer');

// Botão que o jogador clica para começar a contar o tempo (ex: <button id="start-button">Iniciar</button>)
const botaoIniciar = document.querySelector('#start')

let segundosPassados = 0; //quantos segundos já se passaram na partida atualmente
let temporizador = null; // guarda o setInterval, para podermos pará-lo depois

// Função chamada toda vez que o jogador clica em uma carta
function virarCarta() {
  // Se o tabuleiro estiver travado, não faz nada
  if (!podeClicar) return;

  // Se clicar duas vezes na mesma carta, não faz nada
  if (this === primeiraCarta) return;

  // Mostra a carta na tela (classes CSS que faz o "flip")
  this.classList.add('flip');

  // Se ainda não escolhemos a primeira carta, e
  if (primeiracarta === null) {
    primeiraCarta = this;
    return;     
} 

function verificarPar() {
  manterParEncontrado();
} else {
  desvirarCartas();
 }
}

function manterParEncontrado() {
  primeiraCarta.removeEventListener('click', virarCarta);
  segundaCarta.removeEventListener('click', virarCarta);

  paresEncontrados++;

  resetarJogada();

  if (paresEncontrados === totalDePares) {
    fimDeJogo();
  }
}

function desvirarCartas() {
    podeClicar = false;

    setTimeout(() => {
      primeiraCarta.classList.remove('flip');
      segundaCarta.classList.remove('flip');

      resetarJogada();
})
}

function resetarJogada(){
 primeiraCarta = null;
 segundaCarta = null;
 podeClicar = true ;
}


function embaralharCartas(){
    cards.forEach(cards => {
   const posicaoAleatorio = Math.floor(Math.random()
                                       * cards.length);
        cards.style.order=posicaoAleatorio;
    });
}  

function fimDeJogo() {
    alert('Parabéns! Você encontrou todos os pares') 
    resetarTabuleiro();
}

function resetarTabuleiro(){
    paresEncontrados = 0;

    cards.forEach(cards => {
     cards.classList.remove('flip');
     cards.addEventListener('click', virarCarta);  
    });
    embaralharCartas();
}
embaralharCartas