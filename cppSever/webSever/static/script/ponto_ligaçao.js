const ponto_ligaçao_obj = {

}

let onclick_ponto_ligacao = (e) => {

    console.log("Está sendo executada a função onclick_ponto_ligacao no elemento : " + e.target);

    let ponto_ligacao_pai = e.target.parentElement,
        ponto_ligacao = e.target;

    if(fgs.Existe_Class(e.target,"ponto_ligacao_ligar")) {

        if(e.target.vinculo.state === true) {

            if ( fgs.Existe_Class(ponto_ligacao,"off") ) {

                fgs.Remover_class(ponto_ligacao,"off");
                fgs.Adicionar_class(ponto_ligacao,"on");
                gerarCorrente_ponto_ligaçao(ponto_ligacao);
       
            } else {
    
                fgs.Remover_class(ponto_ligacao,"on");
                fgs.Adicionar_class(ponto_ligacao,"off");
                resistirCorrente__ponto_ligaçao(ponto_ligacao);

            }

        } else {
            Ligar_obj.Ligar(ponto_ligacao);
        }

    } else {
        Ligar_obj.Ligar(ponto_ligacao);
    }

};

let ponto_ligaçao = () => {

    let ponto_ligaçao = gerarElementoHtml(
        "ponto_ligaçao_"+ Math.round(Math.random()*10**3),
        "ponto_ligaçao ponto_ligacao_ligar off zIndex flex-row deslocamentoPeloMouse",
        "div",
        fgs.$("#div_ponto_ligacao"),
        undefined, 
        undefined )

        ponto_ligaçao.element.vinculo = {

            state : false,
            id : undefined,
            ligaçoes : undefined,
            ligamento_partida : undefined,
            boolean: false,
        };

        ponto_ligaçao.element.onclick = (e) => {
            onclick_ponto_ligacao(e);
        }

        Deslocar_xy( ponto_ligaçao.element, fgs.$("#Px1Py" + 1 ) );

        ponto_ligaçao_obj[ponto_ligaçao.element.id] = ponto_ligaçao.element ;

}

ponto_ligaçao();
ponto_ligaçao();
