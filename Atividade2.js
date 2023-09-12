/*A média ponderada: 1ª nota - peso 2; 2ª nota - peso 3; 3ª nota - peso 5*/

// Criando as váriaveis

let Lista_notas = [];
let Pesos = [2, 3, 5];
let Soma_notas = 0;

// Solicitar as 3 notas e adiciona na Lista_notas

for(let i = 0; i < 3; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`));
        if (isNaN(nota)) {
            alert('Digite um número valido');
    }
    } while (isNaN(nota));
    Lista_notas.push(nota);
}
console.log(Lista_notas);

// Realiza a soma das notas ponderadas

for(let i = 0; i < 3; i++)
    Soma_notas += Lista_notas[i] * Pesos[i];

// Calcula a média

let media_ponderada = Soma_notas/ 10;

// Mostra os resultados

console.log('Relação das notas:', Lista_notas);
console.log('Peso das notas:', Pesos);
console.log(`A média ponderada é: ${media_ponderada.toFixed(2)}`);
alert(`A média ponderada é: ${media_ponderada.toFixed(2)}`);




