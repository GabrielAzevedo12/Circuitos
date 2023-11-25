fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit_button").addEventListener('click', (e) => {
    let 
    input = fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit_input"),
    element = gerarElementoHtml(
        "element"+Math.round(Math.random()*10**3),
        " class_teste_2 flex-row deslocamentoPeloMouse PermissaoDrop permissao_manipular " || "" ,
        input.value,
        Manipulacao_OBJ.Element,
        undefined,
        undefined );

})