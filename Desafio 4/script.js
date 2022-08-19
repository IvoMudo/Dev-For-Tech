//Desafio 4: Triangulo

const triangleBase = Number(prompt('Qual o tamanho da base do triâsngulo?'))

const triangleChar = prompt('De qual caractere o tringulo será feito?', '*')

for (let i = 0; i <= triangleBase; i++) {
    let row = '';
    for (let j = 0; j <= i; j++) {
        row += triangleChar
    }
    console.log(row)
}