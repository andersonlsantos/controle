const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//for in ele não vai te dar as notas em si ele vai te dar o índice de cada um dos elementos
for(let i in notas) {// para cada um dos elementos da nota ele vai devolver o índice i
    console.log(i, notas[i])
}

/**
 Da mesma forma que eu consigo pegar os atributos que são seus índices eu também consigo pegar os 
 atributos de um objeto.
 */

 const pessoa = {
     nome: 'Ana',
     sobrenome: 'Silva',
     idade: 29,
     peso: 64
 }
 for (let atributo in pessoa) {
     console.log(`${atributo} = ${pessoa[atributo]}`)
 }
 