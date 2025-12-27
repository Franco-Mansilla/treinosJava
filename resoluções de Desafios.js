//Criar uma função que exibe "Olá, mundo!" no console.
function exibirNoConsole() {
    console.log('Olá, Mundo!')
}
 exibirNoConsole();

 // Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function cumprimento(nome) {
    console.log(`Olá, ${nome}!`);
}
cumprimento('Franco')

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
let resultado = numeroDobro(5);
function numeroDobro(numero) {
    return numero *2;
}

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
let media = numeroMedia(4, 8, 10)
function numeroMedia(num1, num2, num3) {
    return (num1, num2, num3) / 3;
}

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
let numeroMaior = maiorNumero(5,6);
function maiorNumero(n1, n2) {
    if (n1 > n2) {
        return(n1);
    } else {
        return(n2);
    }
}

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let numeroParamentro = numero(2);
function numero(num) {
    return(num*num);
}