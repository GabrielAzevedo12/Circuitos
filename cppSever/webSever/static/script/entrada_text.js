const entrada_text = (id_ei,parent_ei) => {
let
entradaText_Identificaçao = {
    typeElement: "div",
    pai: parent_ei ,
    id: id_ei + "_text_transistor",
    className: "text_transistor",
    styleText: "",
},

entradaText_Geometria = {
    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    pontoInicial: undefined,
    unidadeDeslocamento: "vw",
},

entradaText_Event = {
    events: [],
    function_events: [],
},

text = new ElementG(entradaText_Identificaçao,entradaText_Geometria,entradaText_Event);
text.Create();
return text;

}