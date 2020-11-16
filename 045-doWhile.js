function getInteiroAleatorioEntre(min, max) {
    valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = -1 //no exemplo anterior já ia sair do laço na primeira repetição mas com o do while não.

do { //nesse caso a expreção while vai por ultimo
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
}while (opcao != -1)//pode ussar -1 porque só vai executar o while depois da sentença(porque o while esta por ultimo)

console.log('Até a prôxima!')
// a maioria dos programadores não ussam o do while
