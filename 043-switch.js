const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10: //basicamnete esta dizendo se for 10 ou 9 vai executar o console.log
            //console.log('Quadro de Honrra')//posso abrir varios console.log entre cada case
        case 9:
            console.log('Quadro de Honrra')
            break //se não utilizar o switch emtra em todos os case abaixo
        case 8: case 7: //nõa pode usar numeros com virgula, não pode utilizar intervalos entre números
            console.log('Aprovado')
            break
        case 6: case 5: case 4://case 6-4: vai achar o 6 mas quando chamar os 5 e 4 vai cair no default
            console.log('Recuperação')
            break
        case 3: case 2: case 1://case 3, 2, 1: vai cair direto no default
            console.log('Reprovado') //pode usar chaves ex: case : case : { console.log() break}
            break
        default://default pode ser colocado em quaquer posição(não é obrigado colocar no final), 
            console.log('Nota inválida') //se ficar no meio dos case tem que ussar o break
    }
    console.log('Fim')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
//faz um teste comenta todos imprimirResultado deixa apenas o primeiro sem comentar
//e depois comenta todos os break, testa tambem da sequinte maneira comenta todos impri....
//e só deixa o segundo sem comentar depois vai sequindo a logica
