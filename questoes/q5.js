// Escreva um programa que inverta os caracteres de um string.

function inverter(string) {
    let novaString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }

    return novaString;
}

console.log(inverter('pedro')); // entrada do dado