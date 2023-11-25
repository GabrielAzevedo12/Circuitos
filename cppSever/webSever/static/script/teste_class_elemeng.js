let create_retas = () => {

let retas, retas_Identificaçao, retas_Geometria, retas_Event, retas_styleText;

retas_styleText = "\
color: white;\
"

retas_Identificaçao = {

    typeElement: "div",
    pai: fgs.$(".retas"),
    id: "reta49",
    className: "flex-row retateste",
    styleText: retas_styleText,

};

retas_Geometria = {

    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    pontoInicial: undefined,
    unidadeDeslocamento: "vw",

};

retas_Event = {

    events: ["click","mouseover","mouseout"],
    function_events: [
    (e) => {
     //   Deslocar_obj.Deslocar(e.target);
     //   console.log(e.target)
    },
    (e) => {
     //   ation_1(1,1000,create_subCaixa);
    },
    (e) => {
     //   ation_1(1,1000,remove_subCaixa);
    }
],

};

retas = new ElementG(retas_Identificaçao,retas_Geometria,retas_Event)


console.log(retas)
retas.Create()
retas.Deslocar_to(fgs.$("#Px1Py49"))

}

//create_retas();

//iteration_1(1,49,create_retas);

