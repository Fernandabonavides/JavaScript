/*
Supondo que a população de um país A seja da ordem de 80000 habitantes com
uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
calcule e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
*/

let habitantes_A = 80000;
let habitantes_B = 200000;
let taxa_A = 0.03;
let taxa_B = 0.015;
let anos = 0;

while (habitantes_A < habitantes_B) {
    habitantes_A += habitantes_A * taxa_A;
    habitantes_B += habitantes_B * taxa_B;
    anos++;
}

alert("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");