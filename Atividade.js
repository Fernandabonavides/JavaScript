/*Obtenha dados da altura e o sexo (M ou F) de 15 pessoas e apresente os seguintes resultados:
- A maior e a menor altura do grupo;
- A média de altura dos homens;
- O número de mulheres.*/

//Criando as variáveis
let num_mulheres = 0;
let altura_homens = 0;
let maior_altura = 0;
let menor_altura = Infinity;

//Solicita a altura e genero ao usuário de 15 pessoas
for (let i = 0; i < 15; i++) {
    let altura;
    let genero;

    do {
        altura = parseFloat(prompt(`Digite a altura da ${i + 1}ª pessoa:`));
        if (isNaN(altura)) {
            alert('Por favor, insira uma altura válida.');
        }
    } while (isNaN(altura));

    do {
        let inputGenero = prompt(`Digite o gênero da ${i + 1}ª (M para mulher ou H para homem):`);
        genero = inputGenero.toUpperCase();
        if (genero !== 'M' && genero !== 'H') {
            alert('Por favor, insira um gênero válido (M ou H).');
        }
    } while (genero !== 'M' && genero !== 'H');

    // Maior e menor altura
    if (altura > maior_altura) {
        maior_altura = altura;
    }
    if (altura < menor_altura) {
        menor_altura = altura;
    }

    if (genero === 'H') {
        altura_homens += altura;
    } else if (genero === 'M') {
        num_mulheres++; // Número de mulheres
    }
}

// Exibe o retorno ao usuário
alert(`A maior altura do grupo é de: ${maior_altura}`);
alert(`A menor altura do grupo é de: ${menor_altura}`);
alert(`O número de mulheres no grupo é: ${num_mulheres}`);
alert(`A média de altura dos homens do grupo é de: ${media_altura_homens.toFixed(2)}`);