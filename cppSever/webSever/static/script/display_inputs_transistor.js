const display_inputs_transistor = (e) => {
    var w,div_input_transistor_basic = fgs.$("#div_input_transistor_basic"), valorAtualTop;
    if ( fgs.Existe_Class(div_input_transistor_basic,"displayFalse") ) {

        exibir(div_input_transistor_basic);
        Deslocar_xy(div_input_transistor_basic,e);
    
        div_input_transistor_basic.setAttribute("typeTransistor", e.getAttribute("typeTransistor"))
        valorAtualTop = parseFloat(splitL(div_input_transistor_basic.style.top,"p"));
        valorDeslocamento = div_input_transistor_basic.getBoundingClientRect().top - div_input_transistor_basic.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;
    
        Deslocar(div_input_transistor_basic,null,w) ;
    
    } else {
    
        Deslocar_xy(div_input_transistor_basic,e);
    
        div_input_transistor_basic.setAttribute("typeTransistor", "")
        valorAtualTop = parseFloat(splitL(div_input_transistor_basic.style.top,"p"));
        valorDeslocamento = div_input_transistor_basic.getBoundingClientRect().top - div_input_transistor_basic.getBoundingClientRect().bottom ;
        w = valorAtualTop + valorDeslocamento ;
    
        Deslocar(div_input_transistor_basic,null,w) ;
        esconder(div_input_transistor_basic);
    
    }   
    
}