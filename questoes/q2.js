// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function isFibonacci(n) {
    let contador = 0;
    while (fibonacci(contador) <= n) {
        if (fibonacci(contador) === n) {
            return `${n} pertence a sequência de Fibonacci`;
        }
        contador++;
    }
    return `${n} não pertence a sequência de Fibonacci`;
}

console.log(isFibonacci(144)); // entrada do dado