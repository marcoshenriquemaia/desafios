const $campoConteudo = document.querySelector('.campo-conteudo');
const $campoResultado = document.querySelector('.texto');
const $botao = document.querySelector('.botao');
const $campoCasas = document.querySelector('#campo-casas');

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
let criptografado = [];

let texto;
let casas;

const criptografa = () => {
    [...texto].forEach(letra => {
        [...alfabeto].map((item, index) => {
            if (item == letra.toLowerCase()) criptografado.push(alfabeto[(index + casas) % alfabeto.length])
        })
    })
}

const imprimirTexto = () => {
    $campoResultado.textContent = criptografado.join('');
}

const limpaResultado = () =>{
    $campoResultado.textContent = '';
}

const resetCritografado = () =>{
    criptografado = [];
}

$botao.addEventListener('click', () => {
    resetCritografado();
    limpaResultado();
    criptografa();
    imprimirTexto();
});

$campoConteudo.addEventListener('change', e => {   
    texto = e.target.value;
})

$campoCasas.addEventListener('change', e => {
    casas = parseInt(e.target.value);
})

