alert('Bem vindos ao jogo do número secreto');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao n.s.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao n.s.
    if (chute == numeroSecreto){
        break;
    } else{
        if (chute > numeroSecreto){
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        // incrementando mais 1 nas tentativas
        tentativas++;
    }   
}

let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
