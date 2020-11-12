function teste1 (num) {
    if(num > 7)
    console.log(num)
    console.log('Final!!')
}

teste1(6)//Final!!
teste1(8)/* 8
            Final!!
          */
         
/**
 * Nesse caso acima o usso do bloco(que são as chaves{}) fica obcional dentro de uma estrutura if,
 * só que o if fica apenas com a unica sentença de código associada aquele bloco if, console.log('Final!!')
 * esta indentado mas não esta associado ao bloco if, o js não é baseado em indetação.
 * Para ter varias sentenças de código associado a estrutura if tem que ussar chaves({}), se quiser apens uma
 * nõa precisa ussar chaves.
 */

 function teste2 (num) {
     if(num > 7){
         console.log(num)
     }
 }
 teste2(6)
 teste2(8)//8

 function teste3 (num) {
    if(num > 7)
        ;//cuidade com o ';' na estrutura de controle
    {
        console.log(num)
    }
}
teste3(6)//6
teste3(8)//8
