let 
entrada_inicial = fgs.$(".entrada_inicial_ligar"),
entrada_inicial_pai = entrada_inicial.parentElement,
entrada_inicial_text = fgs.$("#text_transistor_ligar");

entrada_inicial.onclick = (e) => {

    if ( fgs.Existe_Class(entrada_inicial_pai,"off") ) {

        fgs.new_text(entrada_inicial_text,"On");
        fgs.Remover_class(entrada_inicial_pai,"off");
        fgs.Remover_class(entrada_inicial_pai,"off");
        fgs.Adicionar_class(entrada_inicial_pai,"on");
        fgs.Adicionar_class(entrada_inicial_pai,"on");

   
    } else {

        fgs.new_text(entrada_inicial_text,"Off");
        fgs.Remover_class(entrada_inicial_pai,"on");
        fgs.Remover_class(entrada_inicial_pai,"on");
        fgs.Adicionar_class(entrada_inicial_pai,"off");
        fgs.Adicionar_class(entrada_inicial_pai,"off");

    }
    
    console.log(e.target)

}