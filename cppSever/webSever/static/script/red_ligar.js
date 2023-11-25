const red_ligar = (transistor) => {

    for ( const x of transistor.childNodes ) {

        let
        ifEntrada = fgs.Existe_Class(x,"entrada") || fgs.Existe_Class(x,"ponto_ligacao_ligar"),
        ifEntrada_s1 = () => {
            (x.vinculo.state === true) ? red_ligar_2(x) : console.log("A entrada não possui vínculo") ;        
        } ,
        ifEntrada_s2 = () => {
            console.log("Não é uma entrada ou não é um ponto de ligação ...")
        } ;

        ifEntrada ? ifEntrada_s1() : ifEntrada_s2();

    }
},
red_ligar_ponto_ligaçao = (ponto_ligacao) => {

    const exibir = 0;
    console.log("red_ligar_ponto_ligaçao");
    console.log(ponto_ligacao);

    if(ponto_ligacao.vinculo.state) {

        red_ligar_3(ponto_ligacao);
/*
        for ( const x of ponto_ligacao.childNodes ) {

            if(x.vinculo.state) {
    
                if(fgs.Existe_Class(x,"ponto_ligacao_ligar")) {
    
                    red_ligar_3(x);
    
                    for ( const child_ponto_ligaçao of x.childNodes) {
                        if (fgs.Existe_Class(child_ponto_ligaçao,"child_ponto_ligacao")) {
                            red_ligar_3(child_ponto_ligaçao);
                        }
                        if (fgs.Existe_Class(child_ponto_ligaçao,"entrada")) {
                            red_ligar_2(child_ponto_ligaçao);
                        }
                    }
                
    
                } else {
                    if(exibir) {
                        console.log("Não é um ponto de ligação ...");
                    }
                }
    
                if(fgs.Existe_Class(x,"transistor")) {
    
                    for ( const child_transistor of transistor.childNodes) {
                        if (fgs.Existe_Class(child_transistor,"entrada")) {
                            red_ligar_2(child_transistor);
                        }
                        if (fgs.Existe_Class(child_transistor,"child_ponto_ligacao")) {
                            red_ligar_3(child_transistor);
                        }
                    }
                
                } else {
                    if(exibir) {
                        console.log("Não é um ponto de ligação ...");
                    }
                }
    
            }
        
        }  */
    
    } 

      
};
    
/*
    if (entradaInicial.vinculo.id) {
        let 
            fios = entradaInicial.vinculo.ligaçoes,
            vinculado = entradaInicial.vinculo.id; 

            console.log(entradaInicial);

            if(vinculado.vinculo.id === entradaInicial) {
                let
                cond_l1 = (entradaInicial.vinculo.ligamento_partida === entradaInicial),
                cond_l1_s1 = () => {
                    console.log("cond_l1_s1")
                    Ligar_obj.arg1 = entradaInicial;
                    Ligar_obj.arg2 = vinculado;
                },
                cond_l1_s2 = () => {
                    console.log("cond_l1_s2")
                    Ligar_obj.arg1 = vinculado;
                    Ligar_obj.arg2 = entradaInicial;
                };

                cond_l1 ? cond_l1_s1() :  cond_l1_s2() ;

                console.log(cond_l1)

                Ligar_obj.Invalido = (if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2));

                if (Ligar_obj.Invalido) {

                    Ligar_xy_2(Ligar_obj.arg1,Ligar_obj.arg2);

                } else {

                    console.log("Isto não é uma entrada de um transitor");

                }

                Ligar_obj.Invalido = undefined;
            }
    } else {
        console.log("O elemento não tem vínculo ... ")
    }
*/
const red_ligar_2 = (entrada) => {

    if (entrada.vinculo.id) {
        let 
            fios = entrada.vinculo.ligaçoes,
            vinculado = entrada.vinculo.id; 

            //console.log(entrada);

            if(vinculado.vinculo.id === entrada) {
                let
                cond_l1 = (entrada.vinculo.ligamento_partida === entrada),
                cond_l1_s1 = () => {
                    console.log("cond_l1_s1")
                    Ligar_obj.arg1 = entrada;
                    Ligar_obj.arg2 = vinculado;
                },
                cond_l1_s2 = () => {
                    console.log("cond_l1_s2")
                    Ligar_obj.arg1 = vinculado;
                    Ligar_obj.arg2 = entrada;
                };

                cond_l1 ? cond_l1_s1() :  cond_l1_s2() ;

                //console.log(cond_l1)

                Ligar_obj.Invalido = (if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2));

                if (Ligar_obj.Invalido) {

                    Ligar_xy_2(Ligar_obj.arg1,Ligar_obj.arg2);

                } else {

                    console.log("Isto não é uma entrada de um transitor");

                }

                Ligar_obj.Invalido = undefined;
            }
    } else {
        console.log("O elemento não tem vínculo ... ")
    }

}

const red_ligar_3 = (entrada) => {

    if (entrada.vinculo.id[0]) {
        let vinculado = entrada.vinculo.id; 
        //console.log(entrada, vinculado);
    
        for ( const ponto_ligaçao of vinculado) {

            Ligar_obj.arg1 = analisar_ligamentoPartida_2(entrada,ponto_ligaçao).partida;
            Ligar_obj.arg2 = analisar_ligamentoPartida_2(entrada,ponto_ligaçao).chegada;
            Ligar_obj.Invalido = (if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2));

            if (Ligar_obj.Invalido) {
                Ligar_xy_3(Ligar_obj.arg1,Ligar_obj.arg2);
            } else {
                //console.log("Isto não é um ponto de ligação");
            }
            
            Ligar_obj.Invalido = undefined;

            }

        } else {
            //console.log("O elemento não tem vínculo ... ");
        }

        for ( const transistor of document.getElementsByClassName("transistor") ) {

            transistor ? red_ligar(transistor) : console.log(x + " já está vinculado" )

        }

}

const red_ligar_4 = (entrada) => {

    if (entrada.vinculo.id[0]) {
        let vinculado = entrada.vinculo.id; 

            console.log(entrada, vinculado);
    
            for ( const ponto_ligaçao of vinculado) {

                if(analisar_vinculoId(ponto_ligaçao,entrada)) {
                    let
                    cond_l1 = (analisar_ligamentoPartida(entrada)),
                    cond_l1_s1 = () => {
                        console.log("cond_l1_s1")
                        Ligar_obj.arg1 = entrada;
                        Ligar_obj.arg2 = ponto_ligaçao;
                    },
                    cond_l1_s2 = () => {
                        console.log("cond_l1_s2")
                        Ligar_obj.arg1 = ponto_ligaçao;
                        Ligar_obj.arg2 = entrada;
                    };
    
                    cond_l1 ? cond_l1_s1() :  cond_l1_s2() ;
    
                    console.log(cond_l1)
    
                    Ligar_obj.Invalido = (if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2));
    
                    if (Ligar_obj.Invalido) {
    
                        Ligar_xy_3(Ligar_obj.arg1,Ligar_obj.arg2);
    
                    } else {
    
                        console.log("Isto não é uma entrada de um transitor");
    
                    }
    
                    Ligar_obj.Invalido = undefined;
                }

            }

    } else {
        console.log("O elemento não tem vínculo ... ")
    }

}