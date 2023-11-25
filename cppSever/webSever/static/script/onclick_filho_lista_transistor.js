fgs.$("#button_input_transistor_basic").onclick = (e) => {

    var text_largura, text_nome, text_posiçaoInicial, text_tipo, transistor,
    input_transistor_largura = fgs.$("#input_transistor_largura"),
    input_transistor_nome = fgs.$("#input_transistor_nome"),
    input_transistor_deslocamentoTo = fgs.$("#input_transistor_deslocamentoTo"),
    input_transistor_tipo = fgs.$("#input_transistor_tipo");

    console.log("button_onclick_transistor_basic iniciada");

    text_largura = input_transistor_largura.value;
    text_nome = input_transistor_nome.value;
    text_tipo = input_transistor_tipo.value;
    text_posiçaoInicial = input_transistor_deslocamentoTo.value;

    cond_preDefault = ( text_nome === '' && text_tipo === '' ) ;

    cond_preDefault ?
    (() => {
        console.log("cond_preDefault1 está sendo executada");
        var transistor_x = gerarTransistor("id"+Math.round(Math.random()*10**3), e.target.parentElement.getAttribute("typeTransistor"));
        fgs.$(".transistors").append(transistor_x.element);
        Deslocar_xy( transistor_x.element, fgs.$("#Px1Py" + 5) )    
    } )() :
    (() => {
        console.log("cond_preDefault2 está sendo executada");
    } )() 
    
    console.log(text_largura, text_nome, text_posiçaoInicial);

    input_transistor_largura.value = '';
    input_transistor_nome.value = '';
    input_transistor_deslocamentoTo.value = '';
    input_transistor_tipo.value = '';

    transistor = gerarTransistor(text_nome,text_tipo);
    transistor.Deslocar_to(fgs.$("#Px1Py10"));
      
}

let lista_transistors = document.getElementsByClassName("filho_lista_transistor");

for (let x of lista_transistors) {

    console.log("iteração input_trans");
        
    x.onclick = (e) => {
            console.log("onclick_button_transistor_basic iniciada");
            display_lista_transistor(e.target.parentElement);
            display_inputs_transistor(e.target.parentElement);
    }

}