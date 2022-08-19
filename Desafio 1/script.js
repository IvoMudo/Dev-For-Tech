// Desafio 1: Calcular média
getNumber()

function getNumber() {
    const numbersQnt = Number(prompt('De quantos numero você quer fazer a média'));
    if (numbersQnt === 0 || isNaN(numbersQnt)) {
        if (
            confirm('Entrada invalida, deseja tentar novemnte?')
        ) {
            getNumber()
        }
        return
    }
    medCalc(numbersQnt)
}

function medCalc(inputNumber) {
    let numberSum = 0;

    for (let i = 1; i <= inputNumber; i++) {
        numberSum = numberSum + Number(prompt(`Digite o seu o seu numero ${i}º numero`));

        if (isNaN(numberSum)) {
            alert('Voce não digitou um numero');
            return
        }
    }
    alert(`Á média final é ${numberSum / inputNumber}`);
}