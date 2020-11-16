//função que vai retornar um inteiro aleatorio
function getInteiroAleatorioEntre(min, max) {
    /*
    random gera um valor aleatorio entre zero e um, vamos multiplicar o max pelo min, para dar o 
    intervalo que eu quero que fique dentro, multiplicando o random pelo intervalo ele vai te dar 
    um rand maior e finalmente para conseguir ficar dentro do intervalo que eu quero preciso deslocar o
    valor que eu quero para que ele possa chegar do min até o mx que eu quero.
     */
    valor = Math.random() * (max - min) + min //presta atenção nessa expreção cabeção
    return Math.floor(valor)
}

// Vamos fazer um teste
let opcao = 0

//vamos criar um laço de repetição
//enquanto a expreção for verdadeira continue executando o laço até que a expreção se torne falsa
while (opcao != -1) { 
    /*vamos começar alterar o valor da variavel opcao apartir da função criada acima pegando um
    valor aleatorio*/
    opcao = getInteiroAleatorioEntre(-1, 10)/*vai gerar um numero aleatorio enter -1 e 10, se o valor da variavel opcao 
                                              passar a ser -1 vai sair do laço, se for outro valor continua no laço*/
    console.log(`A opção escolhida foi ${opcao}.`)

}

console.log('Até a prôxima!')
//executa pra ver como funciona cabeção.
