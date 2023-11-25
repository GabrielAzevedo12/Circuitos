let Ligar_obj = {

    permissao_ligamento : false ,
    arg1 : undefined,
    arg2 : undefined,
    Invalido: undefined,
    Ligar: (e) => {

        if(Ligar_obj.permissao_ligamento === true) {

            console.log("Ligar_obj.Ligar está sendo executada")
            if(Ligar_obj.arg1 === undefined && Ligar_obj.arg2 === undefined) {

                console.log("Condiçao 1 está sendo executada")
                fgs.Adicionar_class(e,"entrada1_ativada");
                Ligar_obj.arg1 = e; 
                Ligar_obj.arg2 = undefined;
                Ligar_obj.arg1.vinculo.ligamento_partida = e ;
            
            } else if(Ligar_obj.arg1 === undefined && Ligar_obj.arg2 !== undefined) { 
                
                console.log("Condiçao 2 está sendo executada")
            
            } else if(Ligar_obj.arg1 !== undefined && Ligar_obj.arg2 === undefined) {
 
                console.log("Condiçao 3 está sendo executada");
                fgs.Adicionar_class(e,"entrada2_ativada");
                Ligar_obj.arg2 = e
                Ligar_obj.Invalido = if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2);
                console.log(Ligar_obj.Invalido);

                if (Ligar_obj.Invalido) {

                    if(Ligar_obj.arg1.vinculo.id === Ligar_obj.arg2) {
                        red_ligar_2(Ligar_obj.arg1);
                    } else {
                        Ligar_xy_2(Ligar_obj.arg1,Ligar_obj.arg2);
                    }

                } else {
                    console.log("Isto não é uma entrada de um transitor");
                }

                Ligar_obj.Invalido = undefined;
            
            } else if(Ligar_obj.arg1 !== undefined && Ligar_obj.arg2 !== undefined) {

                console.log("Condiçao 4 está sendo executada")

                fgs.Remover_class(Ligar_obj.arg1,"entrada1_ativada");
                fgs.Remover_class(Ligar_obj.arg2,"entrada2_ativada");

                Ligar_obj.arg1 = undefined;
                Ligar_obj.arg2 = undefined;
            
            }
        }
    
    },
    Ligar_2: (e) => {

        if(Ligar_obj.permissao_ligamento === true) {

            console.log("Ligar_obj.Ligar está sendo executada")
            if(Ligar_obj.arg1 === undefined && Ligar_obj.arg2 === undefined) {

                console.log("Condiçao 1 está sendo executada")
                fgs.Adicionar_class(e,"entrada1_ativada");
                Ligar_obj.arg1 = e; 
                Ligar_obj.arg2 = undefined;
            
            } else if(Ligar_obj.arg1 === undefined && Ligar_obj.arg2 !== undefined) { 
                
                console.log("Condiçao 2 está sendo executada")
            
            } else if(Ligar_obj.arg1 !== undefined && Ligar_obj.arg2 === undefined) {
 
                console.log("Condiçao 3 está sendo executada");
                fgs.Adicionar_class(e,"entrada2_ativada");
                Ligar_obj.arg2 = e;
                Ligar_obj.arg1.vinculo.ligamento_partida.push({partida: Ligar_obj.arg1, chegada: Ligar_obj.arg2}) ;
                Ligar_obj.arg2.vinculo.ligamento_partida.push({partida: Ligar_obj.arg1, chegada: Ligar_obj.arg2}) ;
                Ligar_obj.Invalido = if_entrada_Invalida(Ligar_obj.arg1) && if_entrada_Invalida(Ligar_obj.arg2) && (Ligar_obj.arg1 !== Ligar_obj.arg2);
                console.log(Ligar_obj.Invalido);

                if (Ligar_obj.Invalido) {

                    if(analisar_vinculoId(Ligar_obj.arg1,Ligar_obj.arg2)) {
                        red_ligar_ponto_ligaçao(Ligar_obj.arg1);
                    } else {
                        Ligar_xy_3(Ligar_obj.arg1,Ligar_obj.arg2);
                    }

                } else {
                    console.log("Isto não é uma entrada de um transitor");
                }

                Ligar_obj.Invalido = undefined;
            
            } else if(Ligar_obj.arg1 !== undefined && Ligar_obj.arg2 !== undefined) {

                console.log("Condiçao 4 está sendo executada")

                fgs.Remover_class(Ligar_obj.arg1,"entrada1_ativada");
                fgs.Remover_class(Ligar_obj.arg2,"entrada2_ativada");

                Ligar_obj.arg1 = undefined;
                Ligar_obj.arg2 = undefined;
            
            }
        }
    
    }

}

Ligar_obj.permissao_ligamento = true;