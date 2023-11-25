const entrada_final_class = (id_ei,parent_ei,class_ei) => {
    
//console.log(id_ei,parent_ei,class_ei);

let
entradaFinal_Identificaçao = {
    typeElement: "div",
    pai: parent_ei ,
    id: id_ei + "_entrada_final" ,
    className: "entrada flex-column entrada_final " + class_ei,
    styleText: "",
},

entradaFinal_Geometria = {
    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    pontoInicial: undefined,
    unidadeDeslocamento: "vw",
},

entradaFinal_Event = {
    events: ["drop","dragover","click"],
    function_events: [
        (e) => {
            ondrop_entrada(e);
        },
        (e) => {
            ondragover_entrada(e);
        },
        (e) => {
            onclick_entrada_final(e);
        }
],
},

final = new ElementG(entradaFinal_Identificaçao,entradaFinal_Geometria,entradaFinal_Event,undefined);

final.element.vinculo = {

    state : false,
    id : undefined,
    ligaçoes : undefined,
    ligamento_partida : undefined,
    boolean: false

};

final.Create();
return final;

}