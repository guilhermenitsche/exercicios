/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
 Fibonacci utilizando um loop for. 
 A sequência de Fibonacci é calculada iterativamente, onde cada termo é a soma dos dois anteriores. Começando com 0 e 1, a sequência se forma como: 0, 1, 1, 2, 3, 5, 8, 13, 21, etc. 
Como calcular:
Comece com os primeiros termos: A sequência começa com 0 e 1.
Calcule o próximo termo: Para obter o próximo termo, some os dois termos anteriores. Por exemplo, 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, e assim por diante.
Continue o processo: Repita o passo 2 para gerar mais termos da sequência. 
Fórmula matemática:
A sequência de Fibonacci pode ser definida matematicamente como:
F(n) = F(n-1) + F(n-2)

 */

let a = 0, b = 1

console.log(a)
console.log(b) 
console.log("Esses são os 10 primeiros números da sequência de Fibonacci: ")

for (let i = 2; i < 10; i++) {
    let next = a + b
    console.log(next)
    a = b
    b = next
}

