let jogador, vencedor = null;
let jogadorSelecionado = document.getElementById('jogador-selecionado');
let vencedorSelecionado = document.getElementById('vencedor-selecionado');
let quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id) {

    if(vencedor !== null){
        return;
    }

    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O'
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor(){
    let quadrado1 = document.getElementById('1');
    let quadrado2 = document.getElementById('2');
    let quadrado3 = document.getElementById('3');
    let quadrado4 = document.getElementById('4');
    let quadrado5 = document.getElementById('5');
    let quadrado6 = document.getElementById('6');
    let quadrado7 = document.getElementById('7');
    let quadrado8 = document.getElementById('8');
    let quadrado9 = document.getElementById('9');

    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCor(quadrado1, quadrado2, quadrado3);
        mudaVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCor(quadrado4, quadrado5, quadrado6);
        mudaVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCor(quadrado7, quadrado8, quadrado9);
        mudaVencedor(quadrado7);
        return;
    }

    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCor(quadrado1, quadrado4, quadrado7);
        mudaVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudaCor(quadrado2, quadrado5, quadrado8);
        mudaVencedor(quadrado2);
        return;
    }   
    
    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudaCor(quadrado3, quadrado6, quadrado9);
        mudaVencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudaCor(quadrado1, quadrado5, quadrado9);
        mudaVencedor(quadrado1);
        return;
    }
    
    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudaCor(quadrado3, quadrado5, quadrado7);
        mudaVencedor(quadrado3);
        return;
    }
}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#00ff44'
    quadrado2.style.background = '#00ff44'
    quadrado3.style.background = '#00ff44'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    let eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (let i =1 ; i<= 9; i++){
        let quadrado = document.getElementById(i);
        quadrado.style.background ='#eee';
        quadrado.style.color ='#eee';
        quadrado.innerHTML ='-';
    }

    mudarJogador('X');
}