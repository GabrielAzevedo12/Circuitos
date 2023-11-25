fgs.$("#button_input_horizontal").onclick = (e) => {

    var input_horizontal_width = fgs.$("#input_horizontal_width"), text_width, text_nome, reta, input_horizontal_nome = fgs.$("#input_horizontal_nome");
    console.log("button_onclick_horizontal iniciada");

    text_width = input_horizontal_width.value;
    text_nome = input_horizontal_nome.value;
    console.log(text_width,text_nome)
    input_horizontal_width.value = '';
    input_horizontal_nome.value = '';

    reta = new Reta("div", ".retas", "reta reta_horizontal", text_nome, undefined, undefined, undefined, "vw",  text_width, undefined);

    reta.Create();
    reta.Deslocar_to();
    reta.element.onclick = (e) => {

        console.log("onclick_" + text_nome + " está sendo executada");
        Deslocar_obj.Deslocar(e.target);

    }

      
}

