//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()


let opcao = prompt("Escolha uma opção:\n1 - Ver mensagem\n2 - Mostrar data atual\n3 - Sair")

switch (opcao) {
  case "1":
    console.log("Você escolheu ver uma mensagem! Olá, mundo!")
    break;
  case "2":
    let dataAtual = new Date()
    console.log("A data atual é: " + dataAtual.toLocaleDateString())
    break;
  case "3":
    console.log("Saindo do programa. Até mais!")
    break
  default:
    console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.")
}
