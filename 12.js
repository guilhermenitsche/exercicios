//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//    10) utilizando um loop for.
const prompt = require('prompt-sync')()

let numero = prompt("Digite um número para ver a tabuada:")

numero = parseInt(numero)

if (numero) {
  console.log("Tabuada do numero :"+numero)
  for (let i = 1; i <= 10; i++) {
    console.log(numero+ 'x' +i+  '=' +numero * i)
  }
} else {
  console.log("Por favor, digite um número válido.")
}
