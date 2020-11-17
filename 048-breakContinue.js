const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) { //se o indice for igual a cinco vai encontrar um break
        /**
         * o break não aje em cima do bloco if, o break vai ajir em cima do bloco mais
         * broximo dele do tipo for, while, ou do tipo switch, nesse casso o bloco mais
         * proximo do break é o for(não é o if cabeçãoa).
         * Break vai desviar o fluxo da aplicação para fora do bloco for.
         */
        break 
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        /**
         * o continue não aje em cima do bloco if, o continue vai ajir em cima do bloco mais
         * broximo dele do tipo for, while, ou do tipo switch, nesse casso o bloco mais
         * proximo do continue é o for(não é o if cabeçãoa).
         * continue vai imterromper a repetição atual e vai direto para proxima repetição ex:
         * quando chegar no indice 4 = 5 vai pular o indice 5 = 6(y == 5) e vai continuar apartir do
         * indice 6 = 7 em diante.
         */
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//externo é um rotulo e esta associado ao laço for for, externo é o nome que eu dei ao rotulo.
//for pode ficar na frente do rotulo ou abaixo do rotulo.
 externo: for (a in nums) {
     for (b in nums) {
         if (a == 2 && b == 3) {
             break externo /**
                            se eu apenas ussar break ele vai chamar o break do bloco mais interno,
                            para ussar o break em um bloco mais externo tem que ussar o rotulo
                           */
         }
         console.log(`Par = ${a}, ${b}`)
     }
 }

console.log('Fim')
