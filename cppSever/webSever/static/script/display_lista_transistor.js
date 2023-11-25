const display_lista_transistor = (e) => {

    let g = () => {

        let lista = e.childNodes[3];
        let 
        cond_l = fgs.Existe_Class(lista,"lista"),
        cond_l_s1 = () => {

            console.log("cond_l_s1");
            if ( fgs.Existe_Class(lista,"displayFalse") ) {

                let
                c_child_lista = lista.childNodes[1] !== undefined,
                c_child_lista_s1 = () => {

                    console.log("c_child_lista_s1");
                    exibir(lista);

                },
                c_child_lista_s2 = () => {
                    console.log(c_child_lista_s2)
                    exibir(lista);
                    var transistor_basic = gerarTransistor("id"+Math.round(Math.random()*10**3),e.getAttribute("typeTransistor"));
                    lista.append(transistor_basic.element);
                };
                
                c_child_lista ? c_child_lista_s1() : c_child_lista_s2() ;

            
            } else {
            
                esconder(lista);
//              lista.childNodes[1].remove();
            
            }   

        },
        cond_l_s2 = () => {

            console.log("cond_l_s2")
            console.log("Não é uma lista ... ")

        };

        console.log(lista)
        cond_l ? cond_l_s1() : cond_l_s2() ;

    }

    console.log(e.childNodes)
    e.childNodes[3] ? g() : console.log("Não existe tal elemento filho") 

    

}