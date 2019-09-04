const $campoConteudo = document.querySelector('.campo-conteudo');
const $campoResultado = document.querySelector('.texto');
const $botao = document.querySelector('.botao');
const $campoCasas = document.querySelector('#campo-casas');

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
const posicoesLetras = [];

let value;
let casas;

// 26

const cliptografa = () => {
    [...value].map(letra => {
        [...alfabeto].map((item, index) => {
            if (item == letra.toLowerCase()) posicoesLetras.push(index);
        })
    })
}

const imprimirTexto = () => {
    posicoesLetras.map(posicao => {
        (posicao + casas > 25) ? $campoResultado.textContent = $campoResultado.textContent + alfabeto[25 - casas]:
            $campoResultado.textContent = $campoResultado.textContent + alfabeto[posicao + casas]
    })
}

$botao.addEventListener('click', () => {
    cliptografa();
    imprimirTexto();
});

$campoConteudo.addEventListener('change', () => {
    value = $campoConteudo.value;
})

$campoCasas.addEventListener('change', () => {
    if (parseInt($campoCasas.value) > 25) {
        casas = parseInt($campoCasas.value) % 25
    } else {
        casas = parseInt($campoCasas.value)
    };
})