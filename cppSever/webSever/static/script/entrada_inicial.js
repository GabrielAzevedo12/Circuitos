const entrada_inicial_class = (id_ei,parent_ei,class_ei) => {

let
entradaInicial_Identificaçao = {
    typeElement: "div" ,
    pai: parent_ei ,
    id: id_ei + "_entrada_inicial" ,
    className: "entrada flex-column entrada_inicial " + class_ei,
    styleText: "",
},

entradaInicial_Geometria = {
    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    pontoInicial: undefined,
    unidadeDeslocamento: "vw",
},

entradaInicial_Event = {
    events: ["drop","dragover","click"],
    function_events: [
    (e) => {
        ondrop_entrada(e);
    },
    (e) => {
        ondragover_entrada(e);
    },
    (e) => {
        onclick_entrada_inicial(e);
    }
],
},
/*
entradaInicial_Atributos = {
    nomes: ["vinculo_state","vinculo_id","vinculo_ligaçoes","vinculo_numero_ligaçoes"],
    valores: ["false","","",""],
};
*/

inicial = new ElementG(entradaInicial_Identificaçao,entradaInicial_Geometria,entradaInicial_Event);

inicial.element.vinculo = {

    state : false,
    id : undefined,
    ligaçoes : undefined,
    ligamento_partida : undefined,
    boolean: false,
    /*
    boolean: {
        e1: false,
        e2: false
    },
    */

};

inicial.Create();
return inicial;

  }
