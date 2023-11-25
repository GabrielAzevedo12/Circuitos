let teste_transistor = () => {

    let teste = fgs.$("#transistor_teste"),
    entrada_inicial = fgs.$("#entrada_inicial_transistor_teste"),
    entrada_final = fgs.$("#entrada_final_transistor_teste"),
    ponto_inicial_teste = fgs.$("#Px1Py5");

    Deslocar_xy (teste,ponto_inicial_teste);

    teste.onclick = (e) => {

        console.log("teste transistor está sendo executada");
        console.log(Deslocar_obj.permissao_deslocamento);
        Deslocar_obj.Deslocar(e.target);

    }
    

}

let teste_transistor_ligar = () => {

    let teste = fgs.$("#transistor_ligar"),
    ponto_inicial_teste = fgs.$("#Px1Py2");

    Deslocar_xy (teste,ponto_inicial_teste);

    teste.onclick = (e) => {

        Deslocar_obj.Deslocar(e.target);

    }
    

}

teste_transistor();
teste_transistor_ligar();