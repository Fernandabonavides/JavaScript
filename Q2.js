//Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares.//


// Inicialize as variáveis para contar números pares e ímpares
let numerosPares = 0;
let numerosImpares = 0;

// Use um loop for para solicitar 10 números
for (let i = 1; i <= 10; i++) {
  // Solicite um número ao usuário
  const numero = parseInt(prompt(`Digite o ${i}º número:`));

  // Verifique se o número é um inteiro válido
  if (!isNaN(numero)) {
    // Verifique se o número é par ou ímpar
    if (numero % 2 === 0) {
      numerosPares++;
    } else {
      numerosImpares++;
    }
  } else {
    // Se o usuário não inseriu um número válido, mostre uma mensagem de erro
    alert(`Você não digitou um número válido para o ${i}º número. Por favor, tente novamente.`);
    i--; // Subtrai 1 de 'i' para repetir a entrada do número inválido
  }
}

// Exiba o resultado
alert(`Quantidade de números pares: ${numerosPares}`);
alert(`Quantidade de números ímpares: ${numerosImpares}`);
