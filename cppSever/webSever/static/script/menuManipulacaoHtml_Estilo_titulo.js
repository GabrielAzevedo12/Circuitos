fgs.$("#menuManipulacaoHtml_Estilo_button").style.display = "none";
fgs.$("#menuManipulacaoHtml_Estilo_titulo").addEventListener('click', (e) => {
    //console.log(e.target)
    if( fgs.Existe_Class( fgs.$("#menuManipulacaoHtml_Estilo_textArea"), "displayFalse") ) {
        exibir(fgs.$("#menuManipulacaoHtml_Estilo_textArea"));
        fgs.$("#menuManipulacaoHtml_Estilo_button").style.display = "flex";
    } else {
        esconder(fgs.$("#menuManipulacaoHtml_Estilo_textArea"));
        fgs.$("#menuManipulacaoHtml_Estilo_button").style.display = "none";
    }
})