fgs.$("#vertical").onclick = (e) => {

    var w,div_input_vertical = fgs.$("#div_input_vertical"), valorAtualTop;
    console.log("onclick_vertical iniciada");

    if ( fgs.Existe_Class(div_input_vertical,"displayFalse") ) {

        fgs.Remover_class(div_input_vertical,"displayFalse");
        fgs.Remover_class(div_input_vertical,"displayFalse");
        fgs.Adicionar_class(div_input_vertical,"displayTrue");
        fgs.Adicionar_class(div_input_vertical,"displayTrue");
       
        Deslocar_xy(div_input_vertical,e.target);

        valorAtualTop = parseFloat(splitL(div_input_vertical.style.top,"p"));
        valorDeslocamento = div_input_vertical.getBoundingClientRect().top - div_input_vertical.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_vertical,null,w) ;
   
    } else {

        Deslocar_xy(div_input_vertical,e.target);

        valorAtualTop = parseFloat(splitL(div_input_vertical.style.top,"p"));
        valorDeslocamento = div_input_vertical.getBoundingClientRect().top - div_input_vertical.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_vertical,null,w) ;

        fgs.Remover_class(div_input_vertical,"displayTrue");
        fgs.Remover_class(div_input_vertical,"displayTrue");
        fgs.Adicionar_class(div_input_vertical,"displayFalse");
        fgs.Adicionar_class(div_input_vertical,"displayFalse")

    }

   
}

