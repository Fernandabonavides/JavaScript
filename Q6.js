function calcularMontante() {
    // Solicitar ao usuário os valores de capital inicial, taxa de juros e tempo em meses
    var capitalInicial = parseFloat(prompt("Digite o capital inicial:"));
    var taxaDeJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
    var tempoMeses = parseInt(prompt("Digite o tempo de investimento em meses:"));
  
    // Converter a taxa de juros de percentual para decimal
    var taxaDecimal = taxaDeJuros / 100;
  
    // Calcular o montante usando a fórmula M = C * (1+i)^t
    var montante = capitalInicial * Math.pow(1 + taxaDecimal, tempoMeses);
  
    // Arredondar o montante para duas casas decimais
    montante = montante.toFixed(2);
  
    // Exibir o resultado
    alert("O montante após " + tempoMeses + " meses será de R$" + montante);
  }
  
  // Chamar a função para calcular o montante
  calcularMontante();
  