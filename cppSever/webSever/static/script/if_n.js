const if_n = (e) => {

    if(fgs.Existe_Class(e.parentElement,"negaçao")) {
        var entrada_inicial_negaçao , transistor_negaçao = e.parentElement, 
        entrada_negaçao_final = transistor_negaçao.childNodes[0], fios_negaçao_final = entrada_negaçao_final.vinculo.ligaçoes;
 
        for ( const x of transistor_negaçao.childNodes )  {
         if(fgs.Existe_Class(x,"entrada_inicial")) {
             entrada_inicial_negaçao = x;
         } 
        }

        console.log(entrada_inicial_negaçao);
 
        var valor_boolean = !(entrada_inicial_negaçao.vinculo.boolean) ;

        console.log(fios_negaçao_final);
 
        if(valor_boolean) {
         for ( let fio_negaçao of fios_negaçao_final ) {
             fio_negaçao ? fgs.Adicionar_class(fio_negaçao, "gerarCorrente") : console.log("O fio não está definido");
         }
         entrada_negaçao_final.vinculo.boolean = true; 
     
        } else {
            for ( let fio_negaçao of fios_negaçao_final ) {
             let s1 = (fio_negaçao) => {
                 console.log("A entrada1 é verdadeira do transistor : " + entrada_negaçao_final)
                 fgs.Remover_class(fio_negaçao, "gerarCorrente");
             }
             fio_negaçao ? s1(fio_negaçao) : console.log("O fio não está definido");
             }
            entrada_negaçao_final.vinculo.boolean = false;
        }
 
     }

     analise_transistors(entrada_negaçao_final);

}