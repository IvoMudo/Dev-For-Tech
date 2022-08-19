//Desafio 3: Impar ou par

let aNumber = Number(prompt('Digite um numero'))

console.log(oddOrEven(aNumber))

alert(`Você digitou o número ${aNumber} e ele é um número ${oddOrEven(aNumber)}`)

function oddOrEven(numberInput){
    if(numberInput%2===0){
        return 'Par'
    }return 'Impar'
}