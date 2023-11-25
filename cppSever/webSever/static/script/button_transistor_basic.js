fgs.$("#transistor_basic").onclick = (e) => {

    var w,div_input_transistor_basic = fgs.$("#div_input_transistor_basic"), valorAtualTop;
    console.log("onclick_button_transistor_basic iniciada");

    if ( fgs.Existe_Class(div_input_transistor_basic,"displayFalse") ) {

        fgs.Remover_class(div_input_transistor_basic,"displayFalse");
        fgs.Remover_class(div_input_transistor_basic,"displayFalse");
        fgs.Adicionar_class(div_input_transistor_basic,"displayTrue");
        fgs.Adicionar_class(div_input_transistor_basic,"displayTrue");
       
        Deslocar_xy(div_input_transistor_basic,e.target);

        valorAtualTop = parseFloat(splitL(div_input_transistor_basic.style.top,"p"));
        valorDeslocamento = div_input_transistor_basic.getBoundingClientRect().top - div_input_transistor_basic.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_transistor_basic,null,w) ;
   
    } else {

        Deslocar_xy(div_input_transistor_basic,e.target);

        valorAtualTop = parseFloat(splitL(div_input_transistor_basic.style.top,"p"));
        valorDeslocamento = div_input_transistor_basic.getBoundingClientRect().top - div_input_transistor_basic.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;

        Deslocar(div_input_transistor_basic,null,w) ;

        fgs.Remover_class(div_input_transistor_basic,"displayTrue");
        fgs.Remover_class(div_input_transistor_basic,"displayTrue");
        fgs.Adicionar_class(div_input_transistor_basic,"displayFalse");
        fgs.Adicionar_class(div_input_transistor_basic,"displayFalse");

    }

   
}

