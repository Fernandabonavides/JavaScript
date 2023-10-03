// Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.//


let quantNumeros = parseInt(prompt("Quantos números você deseja inserir:"));
let menorValor = Number.MAX_VALUE; 
let maiorValor = Number.MIN_VALUE; 
let soma = 0;

for (let i = 0; i < quantNumeros; i++) {
  let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  
  soma += numero;
  if (numero < menorValor) {
    menorValor = numero;
  }
  if (numero > maiorValor) {
    maiorValor = numero;
  }
}

alert(`Menor valor: ${menorValor}`);
alert(`Maior valor: ${maiorValor}`);
alert(`Soma dos valores: ${soma}`);