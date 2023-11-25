var subCaixa_obj = {};

let create_subCaixa = (iter_caixa) => {

let subCaixa, subCaixa_Identificaçao, subCaixa_Geometria, subCaixa_Event, subCaixa_styleText;

subCaixa_styleText = "\
color: blue;\
"

subCaixa_Identificaçao = {

    typeElement: "div",
    pai: fgs.$("#reta" + 49),
    id: "subCaixa" + iter_caixa,
    className: "subCaixa",
    styleText: subCaixa_styleText,

};

subCaixa_Geometria = {

    x: undefined,
    y: undefined,
    height: undefined,
    width: undefined,
    DeslocamentoTo : undefined,
    pontoInicial: undefined,
    unidadeDeslocamento: "vw",

};

subCaixa_Event = {

    events: ["click"],
    function_events: [(e) => {
        Deslocar_obj.Deslocar(e.target);
        console.log(e.target)
    }],

};

subCaixa = new ElementG(subCaixa_Identificaçao,subCaixa_Geometria,subCaixa_Event)

subCaixa.Create();
subCaixa_obj["subCaixa"+iter_caixa] = subCaixa;

}

let remove_subCaixa = (iter_caixa) => {
    element = fgs.$("#subCaixa" + iter_caixa);
    element.remove();
}

//iteration_1(1,25000,create_subCaixa);

/*
for(var i = 1 ; i <= 49; i++ ) {

    create_retas(i);

    for(var j = 1 ; j <= 10000; j++ ) {

        create_subCaixa (j,i);

    }
}
*/