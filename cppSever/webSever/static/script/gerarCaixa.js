let gerarCaixa = (caixaId,caixaClass,caixaPai) => {

    let caixas, caixas_Identificaçao, caixas_Geometria, caixas_Event, caixas_styleText;
    
    caixas_styleText = "";
    
    caixas_Identificaçao = {
    
        typeElement: "div",
        pai: caixaPai,
        id: caixaId,
        className: "Caixa_xy displayTrue " + caixaClass,
        styleText: caixas_styleText,
    
    };
    
    caixas_Geometria = {
    
        x: undefined,
        y: undefined,
        height: undefined,
        width: undefined,
        DeslocamentoTo : undefined,
        pontoInicial: undefined,
        unidadeDeslocamento: "vw",
    
    };
    
    caixas_Event = {
    
        events: ["click","dragover","dragleave","drop","mouseover","mouseout"],
        function_events: [
        (e) => {
            onclick_caixa_xy(e);
        },
        (e) => {
            ondragover_caixa_xy(e);
        },
        (e) => {
            ondragleave_caixa_xy(e);
        },                   
        (e) => {
            ondrop_caixa_xy(e);
        },
        (e) => {
            onmouseover_caixa_xy(e);
        },
        (e) => {
            onmouseout_caixa_xy(e);
        } 
    ],
    
    };
    
    caixas = new ElementG(caixas_Identificaçao,caixas_Geometria,caixas_Event);
    caixas.Create();
    return caixas;
    
    }
    
    //create_caixas();
    
    //iteration_1(1,49,create_caixas);
    
    