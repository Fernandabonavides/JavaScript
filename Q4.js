

// Solicitar ao usuário que insira o salário inicial
let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

// Salário inicial em 1995
let salario = salarioInicial;

// Loop para calcular os aumentos a partir de 1996 até 2023
for (let ano = 1996; ano <= 2023; ano++) {
  
// O aumento é o dobro do percentual do ano anterior
  let aumentoPercentual = 1.5; // 1,5% de aumento em 1996
  salario += (aumentoPercentual / 100) * salario; // Calcula o novo salário
  aumentoPercentual *= 2; // Dobra o aumento percentual para o próximo ano
}

alert(`O salário atual do funcionário em 2023 é de R$ ${salario.toFixed(2)}`);
