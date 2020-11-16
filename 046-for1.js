let contador = 1
while (contador <= 10) {
    /*
    dentro do while eu vou ter que fazer alguma coisa para que esse contador possa ir sendo modificado para que
    em determinado momento ele passe a ser maior do que 10. Assim essa expressão passa a ser falsa ele sai do laço.
     */
    console.log(`contator = ${contador}`)
    contador++
    /*
    cada vez que ele faz uma repetição aqui ele acrescenta uma unidade ao contador até um determinado momento o 
    contador passa a valer mais do que 10 e essa expressão vira falso.
     */
}

/*
Pegando a mesma estrutura acima:
Então se esses três elementos a declaração de uma variavel(let contador = 1), a expressão((contador <= 10))para dizer 
se continua ou não no laço e o incremento(contador++) estão presentes no laço for
 */

for (let i = 1; i <= 10; i++) {/*primeiro declaração da variavel(let i = 1),  ponto e vírgula(;) separador da primeira parte. 
                         A segunda parte a expressão(i <= 10) que vai dizer se ele vai continuar ou não dentro do laço, ponto
                         e virgula(;) e finalmente o incremento(i++).*/
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}
