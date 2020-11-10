function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado(a) ' + nota)

    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    /**
     * só tem uma unica variavel no teste do if, então vai se valer do fato
     * nesse contesto, mesmo que passe um valor inteiro, ou uma string, ou um
     * array, ou mesmo um objeto, o js endende que tem que ter um valor verdadeiro
     * ou falso, então automaticamente ele vai pegar esse objeto vai converter
     * para verdadeiro ou falso, então o js só vai imprimir no console se de
     * fato for convertido para true.
     */
    if(valor) {
        console.log('É verdade .... ' + valor)
    }
}

seForVerdadeEuFalo()//undefined falso
seForVerdadeEuFalo(null)//falso
seForVerdadeEuFalo(undefined)//....
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

seForVerdadeEuFalo(-1)//verdade
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
