fgs.$("#horizontal").onclick = (e) => {

    var w,div_input_horizontal = fgs.$("#div_input_horizontal"), valorAtualTop;
    console.log("onclick_horizontal iniciada");

    if ( fgs.Existe_Class(div_input_horizontal,"displayFalse") ) {

        fgs.Remover_class(div_input_horizontal,"displayFalse");
        fgs.Remover_class(div_input_horizontal,"displayFalse");
        fgs.Adicionar_class(div_input_horizontal,"displayTrue");
        fgs.Adicionar_class(div_input_horizontal,"displayTrue");
       
        Deslocar_xy(div_input_horizontal,e.target);

        valorAtualTop = parseFloat(splitL(div_input_horizontal.style.top,"p"));
        valorDeslocamento = div_input_horizontal.getBoundingClientRect().top - div_input_horizontal.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_horizontal,null,w) ;
   
    } else {

        Deslocar_xy(div_input_horizontal,e.target);

        valorAtualTop = parseFloat(splitL(div_input_horizontal.style.top,"p"));
        valorDeslocamento = div_input_horizontal.getBoundingClientRect().top - div_input_horizontal.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_horizontal,null,w) ;

        fgs.Remover_class(div_input_horizontal,"displayTrue");
        fgs.Remover_class(div_input_horizontal,"displayTrue");
        fgs.Adicionar_class(div_input_horizontal,"displayFalse");
        fgs.Adicionar_class(div_input_horizontal,"displayFalse")

    }

   
}

