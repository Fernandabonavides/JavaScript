// Variável para armazenar a soma
let soma = 0;

// Solicitar ao usuário quantos números deseja somar
const quantidadeNumeros = parseInt(prompt("Quantos números você deseja somar?"));

// Verificar se é um número válido
if (isNaN(quantidadeNumeros)) {
  alert("Por favor, insira um número válido.");
} else {
  // Loop para solicitar os números e somá-los
  for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
    
    // Verificar se a entrada é um número válido
    if (!isNaN(numero)) {
      soma += numero;
    } else {
      alert("Por favor, insira um número válido.");
      i--; // Decrementar o índice para solicitar novamente o número inválido
    }
  }

  // Imprimir o resultado da soma
  alert(`A soma dos números é: ${soma}`);
}