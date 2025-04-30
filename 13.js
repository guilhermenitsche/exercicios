//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.
const prompt = require('prompt-sync')()

let soma = 0
let quantidade = 0

while (true) {
    let input = prompt("Digite um número decimal (0 para sair):")
    let numero = parseFloat(input)

    if (numero === 0) {
        break;
    }

    if (!isNaN(numero)) {
        soma += numero
        quantidade++
    } else {
        console.log("Entrada inválida. Digite um número decimal.")
    }
}

if (quantidade > 0) {
    let media = soma / quantidade
    console.log("A média aritmética é: " + media)
} else {
    console.log("Nenhum número válido foi inserido.")
}
