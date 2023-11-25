const gerarReta_vertical = (e_id,e_class) => {

let 
reta_vertical, retas_Identificaçao, retas_Geometria, retas_Event, retas_styleText, retas_Atributos;

retas_styleText = "\
color: white;\
"

retas_Identificaçao = {

    typeElement: "div",
    pai: fgs.$(".retas"),
    id: e_id,
    className: "flex-row reta reta_vertical droptarget " + e_class,
    styleText: retas_styleText,

};

retas_Geometria = {

    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    //20vw é o valor pré-definido da altura da reta
    pontoInicial: fgs.$("#Px1Py" + 20),
    unidadeDeslocamento: "vw",

};

retas_Event = {

    events: ["click","dragstart","drag"],
    function_events: [
    (e) => {
     Deslocar_obj.Deslocar(e.target);
     //   console.log(e.target)
    },
    (e) => {
        e.dataTransfer.setData("element", e.target.id);
    },
    (e) => {
        console.log("O elemento de id : " +  e.target.id + " está sendo deslocado");
    }
],

};

retas_Atributos = {

    nomes: ["draggable"],
    valores: ["true"],

};

reta_vertical = new Reta2(retas_Identificaçao,retas_Geometria,retas_Event,retas_Atributos)
reta_vertical.Create();
//reta_vertical.Deslocar_to(reta_vertical.Geometria.pontoInicial);

return reta_vertical;

}