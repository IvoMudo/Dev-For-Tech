//Desafio 4: Desenhar triangulo

const triangleBase = Number(prompt('Qual o tamanho da base do triângulo?'))

const triangleChar = prompt('De qual caractere o tringulo será feito?', '*')

for (let i = 0; i < triangleBase; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += triangleChar
    }
    console.log(row)
}