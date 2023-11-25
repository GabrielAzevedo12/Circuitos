const alterarDimensoesElemento_OBJ  = {
    element: undefined
};

const gerarElementoHtml = (e_id,e_class,e_type,e_pai,e_width,e_height) => {
    let
    elemento_html_Identificaçao = {
    
        typeElement: e_type,
        pai: e_pai,
        id: e_id,
        className: e_class,
        styleText: undefined,
    
    },
    
    elemento_html_Geometria = {
    
        x: e_width,
        y: e_height,
        height: undefined,
        width: undefined,
        DeslocamentoTo : undefined,
        pontoInicial: undefined,
        unidadeDeslocamento: undefined,
    
    },
    
    elemento_html_Event = {
        events: ["click","dragstart","drag","drop","dragover"],
        function_events: [
            (e)=>{
                //click
                //alterarDimensoesElemento_OBJ.element = e.target;
            },
            (e) => {
                //dragstart
                e.dataTransfer.setData("element", e.target.id);
            },
            (e) => {
                //drag
                //console.log("O elemento de id : " +  e.target.id + " está sendo deslocado");
                //console.log(e.target.parentElement);
                obj_arrastado.element = e.target;
                //fgs.$(".transistors").append(e.target);
                /*
                obj_arrastado.element = e.target;
                let 
                rv_perpendicular = fgs.$("#rv_perpendicular"),
                rh_perpendicular = fgs.$("#rh_perpendicular"),
                ultima_fila = fgs.$("#fila_xyP49").getBoundingClientRect();

                rv_perpendicular["style"]["height"] = window.innerHeight + 3*window.innerWidth*0.01 + "px";
                rh_perpendicular["style"]["width"] = window.innerWidth + "px";
                        
                fgs.Remover_class(rv_perpendicular,"displayFalse");
                fgs.Remover_class(rh_perpendicular,"displayFalse");
                fgs.Adicionar_class(rv_perpendicular,"displayTrue");
                fgs.Adicionar_class(rh_perpendicular,"displayTrue");

                let
                [tx,ty] = [e.target.getBoundingClientRect().x,e.target.getBoundingClientRect().y],
                [rvx,rvy] = [rv_perpendicular.getBoundingClientRect().x,rv_perpendicular.getBoundingClientRect().y],
                [rhx,rhy] = [rh_perpendicular.getBoundingClientRect().x,rh_perpendicular.getBoundingClientRect().y];

                Deslocar(rv_perpendicular, tx - rvx, ultima_fila.y - rvy);
                */
            },
            (e) => {
                //drop
                e.preventDefault();
                const 
                data = e.dataTransfer.getData("element"),
                element = document.getElementById(data);

                if(fgs.Existe_Class(e.target,"PermissaoDrop")) {
                    if (e.target !== element && !(fgs.Existe_Class(e.target,"Redimensionar")) ) {
                        e.target.append(element);
                        element["style"]["left"] = '';
                        element["style"]["top"] = '';
                        element["style"]["position"] = "relative";
                    }
                }

            },
            (e) => {
                e.preventDefault();
            }
        ],
    
    },
    
    elemento_html_Atributos = {

        nomes: ["draggable"],
        valores: ["true"],
    
    };
    
    let elemento_html = new ElementG(elemento_html_Identificaçao, elemento_html_Geometria, elemento_html_Event, elemento_html_Atributos);

    elemento_html.Create();

    elemento_html.element.propsClass = {

    "Identificaçao_arg" : elemento_html_Identificaçao, 
    "Geometria" : elemento_html_Geometria,
    "Event" : elemento_html_Event

    };

    return elemento_html;

}

fgs.$("#GerarElemento").onclick = (e) => {

    var w,div_elementoHtmlListaDefault = fgs.$("#div_elementoHtmlListaDefault"), valorAtualTop;
    console.log("onclick_GerarElemento iniciada");

    if ( fgs.Existe_Class(div_elementoHtmlListaDefault,"displayFalse") ) {
        //exibição true
        exibir(div_elementoHtmlListaDefault);
        
    } else {

        //exibição false
        esconder(div_elementoHtmlListaDefault);

    }

   
}

fgs.$("#elementoHtmlDefault").onclick = (e) => {

    var w,div_lista_elementoHtml = fgs.$("#div_lista_elementoHtml"), valorAtualTop;
    console.log("onclick_elementoHtmlDefault iniciada");

    if ( fgs.Existe_Class(div_lista_elementoHtml,"displayFalse") ) {
        //exibição true
        exibir(div_lista_elementoHtml);
    } else {
        //exibição false
        esconder(div_lista_elementoHtml);
    }

   
}

fgs.$("#button_elementoHtml_gerar").onclick = (e) => {

    var 
    input_elementoHtml_id = fgs.$("#input_elementoHtml_id"),
    input_elementoHtml_class = fgs.$("#input_elementoHtml_class"),
    input_elementoHtml_largura = fgs.$("#input_elementoHtml_width"),
    input_elementoHtml_altura = fgs.$("#input_elementoHtml_height"),
    input_elementoHtml_type = fgs.$("#input_elementoHtml_type"),
    input_elementoHtml_pai = fgs.$("#input_elementoHtml_pai");

    console.log("button_onclick_GerarElemento iniciada");
    
    cond_preDefault = ( input_elementoHtml_id.value === '' && input_elementoHtml_type.value === '' ) ;

    cond_preDefault ?
    (() => {
        console.log("cond_preDefault1 está sendo executada");
        var 
        elemento_x = gerarElementoHtml(
            "id"+Math.round(Math.random()*10**3),
            input_elementoHtml_class.value + " permissao_manipular class_teste_1 zIndex flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
            "div",
            fgs.$("#elementosGeraisHtml") || document.body,
            undefined,
            undefined ),
        elemento_x_dimensoes = elemento_x.element.getBoundingClientRect();
        fgs.$("#Px1Py1") ?
        Deslocar_xy( elemento_x.element, fgs.$("#Px1Py" + parseInt(elemento_x_dimensoes.height) ) || fgs.$("#Px1Py" + 10 ) ) :
        console.log("O elemento será adicionado no final do documento ... ") ;
    } )() :
    (() => {
        console.log("cond_preDefault2 está sendo executada");
        var 
        elemento_x = gerarElementoHtml(
            input_elementoHtml_id.value || "id"+ Math.round(Math.random()*10**3),
            input_elementoHtml_class.value || "",
            input_elementoHtml_type.value || "div",
            fgs.$("#" + input_elementoHtml_pai.value) || fgs.$("#elementosGeraisHtml"),
            input_elementoHtml_largura.value || undefined, 
            input_elementoHtml_altura.value || undefined ) ,
        elemento_x_dimensoes = elemento_x.element.getBoundingClientRect();
        fgs.$("#Px1Py1") ?
        Deslocar_xy( elemento_x.element, fgs.$("#Px1Py" + parseInt(elemento_x_dimensoes.height) || "#Px1Py" + 10 ) ) :
        console.log("O elemento será adicionado no final do documento ... ") ;
    } )() 

    input_elementoHtml_id.value = '';
    input_elementoHtml_class.value = '';
    input_elementoHtml_type.value = '';
    input_elementoHtml_pai.value = '';
    input_elementoHtml_largura.value = '';
    input_elementoHtml_altura.value = '';
      
}
