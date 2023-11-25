if(fgs.Existe_Class(e.vinculo.id.parentElement,"and")) {

        var a = [], i=0, transistor_and = e.vinculo.id.parentElement, 
        entrada_and_final = transistor_and.childNodes[0], fios_and_final = entrada_and_final.vinculo.ligaçoes;

        for ( const x of transistor_and.childNodes )  {

         if(fgs.Existe_Class(x,"entrada_inicial")) {
             
             a[i] = x;
             i = i+1;

         } 

        }

        console.log(a);
        var valor_boolean = (a[0].vinculo.boolean && a[1].vinculo.boolean) ;
        console.log(fios_and_final);

        if(valor_boolean) {

         for ( let fio_and of fios_and_final ) {

            fio_and ? fgs.Adicionar_class(fio_and, "gerarCorrente") : console.log("O fio não está definido");

         }
         entrada_and_final.vinculo.boolean = true; 
     
        } else {

            for ( let fio_and of fios_and_final ) {

                let s1 = () => {
                    console.log("Ou a entrada1 é falsa ou a entrada2 é falsa do transistor : " + entrada_and_final)
                    fgs.Remover_class(fio_and, "gerarCorrente");
                }

                fio_and ? s1() : console.log("O fio não está definido");
    
             }
            entrada_and_final.vinculo.boolean = false;

        }

     }