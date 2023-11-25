fgs.$("#button_input_vertical").onclick = (e) => {

    var input_vertical_altura = fgs.$("#input_vertical_altura"), text_altura, text_nome, reta, input_vertical_nome = fgs.$("#input_vertical_nome");
    console.log("button_onclick_vertical iniciada");

    text_altura = input_vertical_altura.value;
    text_nome = input_vertical_nome.value;
    console.log(text_altura,text_nome)
    input_vertical_altura.value = '';
    input_vertical_nome.value = '';

    reta = new Reta("div", ".retas", "reta reta_vertical", text_nome, undefined, undefined, undefined, "vw",  undefined, text_altura);

    reta.Create();
    reta.Deslocar_to();
    reta.element.onclick = (e) => {

        console.log("onclick_" + text_nome + " está sendo executada");
        Deslocar_obj.Deslocar(e.target);

    }

      
}

