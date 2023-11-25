fgs.$("#ExibirlistaHeader_id").onclick = (e) => {
    const listaHeader = fgs.$("#lista_Header");
    if ( fgs.Existe_Class(listaHeader,"displayFalse") ) {
        exibir(listaHeader);
        fgs.Adicionar_class(e.target,"listaHeader_Controle")
        fgs.Remover_class(e.target,"ExibirlistaHeader_class")
    } else {
        esconder(listaHeader);
        fgs.Adicionar_class(e.target,"ExibirlistaHeader_class")
        fgs.Remover_class(e.target,"listaHeader_Controle")
    }
}