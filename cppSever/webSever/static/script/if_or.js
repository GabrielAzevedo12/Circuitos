const if_or = (e) => {
    
    if(fgs.Existe_Class(e.parentElement,"or")) {
        
        var a = [], i=0, transistor_or = e.parentElement, 
        entrada_or_final = transistor_or.childNodes[0], fios_or_final = entrada_or_final.vinculo.ligaçoes;

        for ( const x of transistor_or.childNodes )  {
         if(fgs.Existe_Class(x,"entrada_inicial")) {
             
             a[i] = x;
             i = i+1;
         } 
        }
 
        console.log(a);
        var valor_boolean = ( a[0].vinculo.boolean || a[1].vinculo.boolean ) ;
        console.log(fios_or_final);
 
        if(valor_boolean) {
         for ( let fio_or of fios_or_final ) {
             fio_or ? fgs.Adicionar_class(fio_or, "gerarCorrente") : console.log("O fio não está definido");
         }
         entrada_or_final.vinculo.boolean = true; 
     
        } else {
            for ( let fio_or of fios_or_final ) {
             let s1 = (fio_or) => {
                 console.log("A entrada1 é falsa e a entrada2 é falsa do transistor : " + entrada_or_final)
                 fgs.Remover_class(fio_or, "gerarCorrente");
             }
             fio_or ? s1(fio_or) : console.log("O fio não está definido");
             }
            entrada_or_final.vinculo.boolean = false;
        }
 
     }

     analise_transistors(entrada_or_final);

}