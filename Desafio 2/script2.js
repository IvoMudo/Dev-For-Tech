//Desafio 2: Calculadora
let numberA = Number(prompt('Digite o primeiro numero'))
let numberB = Number(prompt('Digite o segundo numero'))

let operator = prompt('operação')

let result = 0
switch (operator) {
    case '+':
        result=(numberA+numberB)
        break
    case '-':
        result=(numberA-numberB)
        break
    case '*':
        result=(numberA*numberB)
        break
    case '/':
        result=(numberA/numberB)
        break
    case '^':
        result=(numberA^numberB)
        break
    default:console.log('nao foi digitada uma operação')
}

alert(result)