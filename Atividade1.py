# Obtenha dados da altura e o gênero (H ou M) de 15 pessoas e apresente os seguintes resultados:

# Listas vazias para armazenar altura e gênero

alturas = []
generos = []

# Loop para coletar os dados das 15 pessoas

for i in range(15):
    altura_pessoa = float(input(f"Digite a altura da pessoa {i+1} em metros: "))
    genero_pessoa = input(f"Digite o gênero da pessoa {i+1} (H para homem e M para mulher): ").upper()

# Armazenar altura e gênero nas listas
    alturas.append(altura_pessoa)
    generos.append(genero_pessoa)

# A maior e a menor altura do grupo

maior_altura = max(alturas)
menor_altura = min(alturas)

# A média de altura dos homens

alturas_homens = [alturas[i] for i in range(15) if generos[i] == "H"]
media_alturas_homens = sum(alturas_homens) / len(alturas_homens) if alturas_homens else 0  # Evita divisão por zero

# O número de mulheres

num_mulheres = generos.count("M")

# Apresentando os resultados
print(f"A maior altura do grupo é: {maior_altura} metros")
print(f"A menor altura do grupo é: {menor_altura} metros")
print(f"A média da altura dos homens é: {media_alturas_homens:.2f} metros")
print(f"O número de mulheres é: {num_mulheres}")