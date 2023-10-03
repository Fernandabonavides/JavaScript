function calcularAreaEPerimetroDoCirculo(raio) {
    // Verifique se o raio é um número positivo
    if (raio <= 0) {
      return "O raio deve ser um número positivo.";
    }
  
    // Calcule a área do círculo usando a fórmula π * raio^2
    const area = Math.PI * Math.pow(raio, 2);
  
    // Calcule o perímetro (circunferência) do círculo usando a fórmula 2 * π * raio
    const perimetro = 2 * Math.PI * raio;
  
    return {
      area: area,
      perimetro: perimetro
    };
  }
  
  // Exemplo de uso da função
  const raio = 5;
  const resultado = calcularAreaEPerimetroDoCirculo(raio);
  alert(`Área do círculo: ${resultado.area}`);
  alert(`Perímetro do círculo: ${resultado.perimetro}`);
  