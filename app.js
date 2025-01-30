let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let contador = 1;

exibirMensagenInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;  
        if (chute == numeroSecreto){
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = contador > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativa = `Voce descobriu o numero secreto, com ${contador} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('chutar').setAttribute('disabled', 'true');
        }else if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou'); 
            exibirTextoNaTela('p', 'O numero secreto e menor'); 
        }else{
            exibirTextoNaTela('h1', 'Errou');
            exibirTextoNaTela('p', 'O numero secreto e maior'); 
        }
        contador ++;   
        limparCampo();

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(); 
    contador = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('chutar').removeAttribute('disabled');
}


function exibirMensagenInicial(){   
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');      
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
//     if ('speechSynthesis' in window) {
//         let utterance = new SpeechSynthesisUtterance(texto);
//         utterance.lang = 'pt-BR'; 
//         utterance.rate = 1.5; 
//         window.speechSynthesis.speak(utterance); 
//     } else {
//         console.log("Web Speech API não suportada neste navegador.");
//     }
 }








