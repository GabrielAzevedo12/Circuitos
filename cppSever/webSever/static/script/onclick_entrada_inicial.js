const 
onclick_entrada_inicial = (e) => {

    console.log("Está sendo executada a função onclick_entrada_inicial no elemento : " + e.target);

    console.log(e.target.vinculo);

    if(fgs.Existe_Class(e.target,"entrada_inicial_ligar")) {
        let 
        entrada_inicial_pai = e.target.parentElement,
        entrada_inicial_text = fgs.$("#" + entrada_inicial_pai.id + "_text_transistor");

        if(e.target.vinculo.state === true) {

            if ( fgs.Existe_Class(entrada_inicial_pai,"off") ) {

                fgs.new_text(entrada_inicial_text,"On");
                fgs.Remover_class(entrada_inicial_pai,"off");
                fgs.Adicionar_class(entrada_inicial_pai,"on");
                gerarCorrente(e.target);
       
            } else {
    
                fgs.new_text(entrada_inicial_text,"Off");
                fgs.Remover_class(entrada_inicial_pai,"on");
                fgs.Adicionar_class(entrada_inicial_pai,"off");
                resistirCorrente(e.target);
    
            }

        } else {
            Ligar_obj.Ligar(e.target);
        }
    
        console.log(e.target);

    } else {
        Ligar_obj.Ligar(e.target);
    }

};