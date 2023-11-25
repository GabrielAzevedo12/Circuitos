fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_titulo").addEventListener('click', (e) => {
    console.log("e.target")
    if( fgs.Existe_Class( fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit"), "displayFalse") ) {
        exibir(fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit"));
    } else {
        esconder(fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit"));
    }
})