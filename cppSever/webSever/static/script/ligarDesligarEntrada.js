let ligarDesligarEntrada = (entrada) => {
    let 
        entrada_pai = entrada.target.parentElement,
        entrada_pai_text = fgs.$("#" + entrada_pai.id + "_text_transistor");

    if ( fgs.Existe_Class(entrada_pai,"off") ) {

        fgs.new_text(entrada_pai_text,"On");
        fgs.Remover_class(entrada_pai,"off");
        fgs.Adicionar_class(entrada_pai,"on");
        gerarCorrente(entrada.target);

    } else {

        fgs.new_text(entrada_pai_text,"Off");
        fgs.Remover_class(entrada_pai,"on");
        fgs.Adicionar_class(entrada_pai,"off");
        resistirCorrente(entrada.target);

    }
}