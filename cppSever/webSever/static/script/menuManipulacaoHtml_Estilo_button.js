//fgs.$("#textarea").textContent
fgs.$("#menuManipulacaoHtml_Estilo_button").addEventListener('click', (e) => {
    //Manipulacao_OBJ.Element
    console.log(Manipulacao_OBJ.Element);
    Manipulacao_OBJ.Element.style.cssText = Manipulacao_OBJ.Element.style.cssText + " " + fgs.$("#textarea").value;
    fgs.$("#textarea").value = '' ;
    esconder(fgs.$("#menuManipulacaoHtml_Estilo_textArea"));
    fgs.$("#menuManipulacaoHtml_Estilo_button").style.display = "none";
    //console.log(fgs.$("#textarea").textContent);
})