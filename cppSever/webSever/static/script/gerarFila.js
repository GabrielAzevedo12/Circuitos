let gerarFila = (filaId,filaClass,filaPai) => {

    let fila, fila_Identificaçao, fila_Geometria, fila_Event, fila_styleText;
    
    fila_styleText = "";
    
    fila_Identificaçao = {
    
        typeElement: "div",
        pai: filaPai,
        id: filaId,
        className: "fila_xy " + filaClass,
        styleText: fila_styleText,
    
    };
    
    fila_Geometria = {
    
        x: undefined,
        y: undefined,
        height: undefined,
        width: undefined,
        DeslocamentoTo : undefined,
        pontoInicial: undefined,
        unidadeDeslocamento: "vw",
    
    };
    
    fila_Event = {
    
        events: ["click"],
        function_events: [
        (e) => {
         onclick_fila_xy(e);
        }
    ],
    
    };
    
    fila = new ElementG(fila_Identificaçao,fila_Geometria,fila_Event);
    fila.Create();
    return fila;
    
    }
    
    //create_fila();
    
    //iteration_1(1,49,create_fila);
    
    