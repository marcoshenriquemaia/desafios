const frase = 'Frase de teste'
const vogais = ['A', 'E', 'I', 'O', 'U']

const contar = () => {
    const resultado = [...frase.toUpperCase()].filter(letra => vogais.some(vogal => vogal === letra));
    console.log(resultado.length);
};

contar();

