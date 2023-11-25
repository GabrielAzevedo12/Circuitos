const catTransistor = (element_id) => {

    for ( var p in Transistors_OBJECT.object_transistors ) {

        if (p === element_id) {

            return Transistors_OBJECT.object_transistors[p];

        }

    }

};

const upTransistor = (element_id,prop,pro_newValue) => {
    

};

const if_transistor = (e,DeslocamentoTo) => {

    /*
    !(DeslocamentoTo) ? 
    upTransistor(e.id,"Geometria",Geometria_update) : 
    console.log("DeslocamentoTo não está definido ... ");
*/
    //console.log(e);
   
    if(e) {
        Transistors_OBJECT.object_transistors[e.id]["Geometria"]["x"] = e.getBoundingClientRect().x ;
        Transistors_OBJECT.object_transistors[e.id]["Geometria"]["y"] = e.getBoundingClientRect().y ;
    }

    if (DeslocamentoTo) {
        Transistors_OBJECT.object_transistors[e.id]["Geometria"]["DeslocamentoTo"] = DeslocamentoTo
    }

    let 
    A1= () => {
        let 
        pai_lista = ( e.parentElement === fgs.$("#lista_transistor_basic") || e.parentElement === fgs.$("#lista_transistor_and") || e.parentElement === fgs.$("#lista_transistor_or") || e.parentElement === fgs.$("#lista_transistor_ligarDesligar") || e.parentElement === fgs.$("#lista_transistor_negaçao") ),
        pai_lista_s1 = () => {
            /*
            display_inputs_transistor(e.parentElement);
            esconder(e.parentElement);
            */
            var transistor_x = gerarTransistor("id"+Math.round(Math.random()*10**3),e.parentElement.parentElement.getAttribute("typeTransistor"));
            e.parentElement.append(transistor_x.element);
            fgs.$(".transistors").append(e);
        },
        pai_lista_s2 = () => {
            //console.log("O elemento já está na div transistors");
        }; 
        
        console.log(pai_lista)
        pai_lista ? pai_lista_s1() : pai_lista_s2() ;

        let 
            s1_vinculoState_2 = (el) => {
                red_ligar_2(el);
                for ( const x of document.getElementsByClassName("transistor") ) {

                    if ( x !== e )  {
                        red_ligar(x)
                    } else {
                        //console.log("O elemento já possui vinculo ... ")
                    }

                }
                red_ligar_2(el);
            }, 
            s2_vinculoState_2 = () => {

                //console.log("A entrada está fora de uso")

            } ;

            esconder(fgs.$("#quadro_drag"));
            for ( const x of e.childNodes ) {

                //console.log(x);
                let
                ifEntrada = fgs.Existe_Class(x,"entrada"),
                ifEntrada_s1 = () => {
                    (x.vinculo.state === true) ? s1_vinculoState_2(x) : s2_vinculoState_2() ;        
                } ,
                ifEntrada_s2 = () => {
                    //console.log("Não é uma entrada ...")
                } ;

                ifEntrada ? ifEntrada_s1() : ifEntrada_s2();

            }

            //(entradaInicial.vinculo.state === true || entradaFinal.vinculo.state === true) ? s1_vinculoState() : s2_vinculoState() ;

    },
    A2= () => {

    };

    if(fgs.Existe_Class(e,"transistor")) {

        //console.log(e + " é um transistor");
        A1();

    } else {

        //console.log(e + " não é um transistor");
        A2();

    }

}