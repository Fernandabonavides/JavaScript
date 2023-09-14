// Array para armazenar notas
let notas = [];

// Solicita as 3 notas e armazena na Array
for (let i = 1; i <= 3; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i}:`));
    notas.push(nota);
}

// Calcula a média das 3 notas
let soma = 0;
let media;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
media = soma / notas.length;

// Resultado: Aprovado, reprovado, recuperação
if (media >= 7) {
    console.log(`O aluno está aprovado com média ${media.toFixed(2)}`);
} else if (media >= 4) {
    console.log(`O aluno está em recuperação com média ${media.toFixed(2)}`);
    let notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
    let novaMedia = (media + notaRecuperacao) / 2;
    if (novaMedia >= 5) {
        console.log(`O aluno está aprovado após a recuperação com média ${novaMedia.toFixed(2)}`);
    } else {
        console.log(`O aluno está reprovado após a recuperação com média ${novaMedia.toFixed(2)}`);
    }
} else {
    console.log(`O aluno está reprovado com média ${media.toFixed(2)}`);
}