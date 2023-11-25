const 
gerarCorrente_ponto_ligaçao = (e) => {

    console.log("gerarCorrente está sendo executada");

    for (let fios of e.vinculo.ligaçoes) {
        for ( let fio of fios.array ) {
            if(fio) { 
                console.log(fio)
                fgs.Adicionar_class(fio, "gerarCorrente");
                fgs.Adicionar_class(e.parentElement, "gerarCorrente_transistor");
                for ( vinculado of e.vinculo.id) {
                    fgs.Adicionar_class(vinculado.parentElement, "gerarCorrente_transistor");
                    vinculado.vinculo.boolean = true;
                }
            }
    
        }
    }

    for (vinculado of e.vinculo.id) {
        let  pai_vinculado = vinculado.parentElement; 

        if(fgs.Existe_Class(pai_vinculado,"and")) {

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
    
                    let s1 = (fio_and) => {
                        console.log("Ou a entrada1 é falsa ou a entrada2 é falsa do transistor : " + entrada_and_final)
                        fgs.Remover_class(fio_and, "gerarCorrente");
                    }
    
                    fio_and ? s1(fio_and) : console.log("O fio não está definido");
        
                 }
                entrada_and_final.vinculo.boolean = false;
    
            }
    
         }
    
        if(fgs.Existe_Class(pai_vinculado,"or")) {
           var a = [], i=0, transistor_or = e.vinculo.id.parentElement, 
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
        if(fgs.Existe_Class(pai_vinculado,"negaçao")) {
            var entrada_inicial_negaçao , transistor_negaçao = e.vinculo.id.parentElement, 
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
                     console.log("A entrada1 é falsa e a entrada2 é falsa do transistor : " + entrada_negaçao_final)
                     fgs.Remover_class(fio_negaçao, "gerarCorrente");
                 }
                 fio_negaçao ? s1(fio_negaçao) : console.log("O fio não está definido");
                 }
                entrada_negaçao_final.vinculo.boolean = false;
            }
     
         }
        
        let
        entrada_andOr_final = pai_vinculado.childNodes[0],
        entrada_vinculo = entrada_andOr_final.vinculo.id;
    
        if(fgs.Existe_Class(entrada_vinculo,"entrada_inicial")) {
            let parent = entrada_vinculo.parentElement,
            s1_c1 = () => {
                if (entrada_andOr_final.vinculo.boolean) {
                    entrada_vinculo.vinculo.boolean = true;
                } else {
                    entrada_vinculo.vinculo.boolean = false;
                }
                if_and(entrada_vinculo);
            },
            s1_c2 = () => {
                console.log("Não é um transistor and");
            },
            s2_c1 = () => {
                if (entrada_andOr_final.vinculo.boolean) {
                    entrada_vinculo.vinculo.boolean = true;
                } else {
                    entrada_vinculo.vinculo.boolean = false;
                }
                if_or(entrada_vinculo);
            },
            s2_c2 = () => {
                console.log("Não é um transistor or");
            },
            s3_c1 = () => {
                if (entrada_andOr_final.vinculo.boolean) {
                    entrada_vinculo.vinculo.boolean = true;
                } else {
                    entrada_vinculo.vinculo.boolean = false;
                }
                if_n(entrada_vinculo);
            },
            s3_c2 = () => {
                console.log("Não é um transistor negaçao");
            };
    
            fgs.Existe_Class(parent,"and") ? s1_c1() : s1_c2();
            fgs.Existe_Class(parent,"or") ?  s2_c1() : s2_c2();
            fgs.Existe_Class(parent,"negaçao") ?  s3_c1() : s3_c2();
    
        } 
    }
    
    /*
    if(fgs.Existe_Class(e.vinculo.id.parentElement,"basic")) {
        var a = [], i=0, transistor_basic = e.vinculo.id.parentElement, 
        entrada_basic_final = transistor_basic.childNodes[0], fios_basic_final = entrada_basic_final.vinculo.ligaçoes;
        for ( const x of transistor_basic.childNodes )  {
         if(fgs.Existe_Class(x,"entrada_inicial")) {
             
             a[i] = x;
             i = i+1;
         } 
        }

        console.log(a);
        var basic_boolean = ( a[0].vinculo.boolean || a[1].vinculo.boolean ) ;
        console.log(fios_basic_final);

        if(basic_boolean) {

         for ( let fio_basic of fios_basic_final ) {
             fgs.Adicionar_class(fio_basic, "gerarCorrente");
         }
         entrada_basic_final.vinculo.boolean = true; 
     
        } else {

            for ( let fio_basic of fios_basic_final ) {
                console.log("A entrada1 é falsa e a entrada2 é falsa do transistor : " + entrada_basic_final)
                fgs.Remover_class(fio_basic, "gerarCorrente");
 
             }
            entrada_basic_final.vinculo.boolean = false;
        }
     }
     */

}