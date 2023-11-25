var Global = {Element: undefined};

document.addEventListener("drop" , (e) => {
    
    e.preventDefault();
    const 
    data = e.dataTransfer.getData ("element"),
    element = document.getElementById(data);
    let 
    [data_geometria,parent_geometria] = [element.getBoundingClientRect(), e.target.getBoundingClientRect()],
    rv_perpendicular = fgs.$("#rv_perpendicular"),
    rh_perpendicular = fgs.$("#rh_perpendicular"),
    quadro = fgs.$("#quadro_drag");

    let
    [d1,d2] = [
        data_geometria,
        {
            x: e.clientX,
            y: e.clientY
        }
    ],
    [dx,dy] = [
        d2.x - d1.x,
        d2.y - d1.y
    ];
    Deslocar_posAtual(element,dx,dy);
    esconder(quadro);
    /*
    if(element.childNodes[0]) {
        for (child_element of element.childNodes) {
            if(fgs.Existe_Class(child_element,"ponto_ligacao_ligar")) {
                if_ponto_ligaçao(child_element);
            }
        if(fgs.Existe_Class(child_element,"transistor")) {
            if_transistor(child_element);
        }
    }
}*/

    if(fgs.Existe_Class(element,"Redimensionar")) {
        if_Redimensionar(element);
    }
    
    if(fgs.Existe_Class(element,"transistor")) {
        if_transistor(element,e.target);
    }

    if(fgs.Existe_Class(element,"ponto_ligacao_ligar")) {
        if_ponto_ligaçao(element);
    }

    if(fgs.Existe_Class(e.target,"PermissaoDrop")) {
        if (e.target !== element && !(fgs.Existe_Class(e.target,"Redimensionar")) ) {
            e.target.append(element);
            element["style"]["left"] = '';
            element["style"]["top"] = '';
            element["style"]["position"] = "relative";
        }
    }

    esconder(rv_perpendicular);
    esconder(rh_perpendicular);
    fgs.Remover_class( obj_arrastado.fila, "sinalizar_fila");

    obj_arrastado.element = undefined;
    obj_arrastado.fila = undefined;

})
document.addEventListener("dragover" , (e) => {
    e.preventDefault();
    let 
    [d2] = [
        {
            x: e.clientX,
            y: e.clientY
        }
    ],
    [rv, rh] = [fgs.$("#rv_perpendicular"), fgs.$("#rh_perpendicular")],
    [rv_d, rh_d] = [rv.getBoundingClientRect(), rh.getBoundingClientRect()],
    quadro = fgs.$("#quadro_drag"),
    quadro_d = quadro.getBoundingClientRect(),
    element = obj_arrastado.element,
    element_d = element.getBoundingClientRect();

    rv["style"]["height"] = document.body.clientHeiht + "px";
    rv["style"]["width"] = 0.1*window.innerWidth*0.01 + "px"
    rh["style"]["width"] = document.body.clientWidth + "px";
    rh["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";

    exibir(rv);
    exibir(rh);
/*
    quadro["style"]["height"] = element.getBoundingClientRect().height + "px";
    quadro["style"]["width"] = element.getBoundingClientRect().width + "px";

    exibir(quadro);
*/
    Deslocar_posAtual(rv, d2.x - rv_d.x, 0 - rv_d.y);
    Deslocar_posAtual(rh, undefined, d2.y - rh_d.y);
    Deslocar_posAtual(element, d2.x - element_d.x, d2.y - element_d.y );

    if( element === Rd_OBJ.parent ) {
        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
    }
    if(fgs.Existe_Class(element,"Redimensionar")) {
        if_Redimensionar(element, e);
    }
    if(fgs.Existe_Class(element,"ponto_ligacao_ligar")) {
        if_ponto_ligaçao(element);
    }
    if(fgs.Existe_Class(element,"transistor")) {
        if_transistor(element,undefined);
    }

})

var menuManipulacao = document.querySelector("#div_menuManipulacaoHtml");
menuManipulacao.style.left = "0px";
menuManipulacao.style.top = "0px";

document.addEventListener("click" , (e) => {
//e.target !== menuManipulacao || e.target.parentElement !== menuManipulacao
    Global.Element = e.target;
    let c = fgs.Existe_Class(menuManipulacao, "displayTrue") &&
     ( 
        e.target !== fgs.$("#menuManipulacaoHtml_Adicionar_titulo") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Adicionar") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_titulo") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Adicionar_lista_Tipo_textEdit_input") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Estilo") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Estilo_titulo") &&
        e.target !== fgs.$("#menuManipulacaoHtml_Estilo_textArea") &&
        e.target !== fgs.$("#textarea") 
    )
//console.log(c, e.target.parentElement, e.target); 
    if( c ) {
        esconder(menuManipulacao);
        menuManipulacao.style.left = "0px";
        menuManipulacao.style.top = "0px";
    }

})

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    if( fgs.Existe_Class(e.target, "permissao_manipular") ) {
        Manipulacao_OBJ.Element = e.target;
        e.preventDefault();
        exibir(menuManipulacao);
        Deslocar_posAtual(menuManipulacao, e.clientX - menuManipulacao.getBoundingClientRect().x, e.clientY - menuManipulacao.getBoundingClientRect().y)
        Deslocar_posAtual(menuManipulacao, undefined, e.clientY - menuManipulacao.getBoundingClientRect().y)
    }
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    if( fgs.Existe_Class(e.target, "permissao_manipular") ) {
        Manipulacao_OBJ.Element = e.target;
        Deslocar_posAtual(menuManipulacao, e.clientX - menuManipulacao.getBoundingClientRect().x, e.clientY - menuManipulacao.getBoundingClientRect().y)
        Deslocar_posAtual(menuManipulacao, undefined, e.clientY - menuManipulacao.getBoundingClientRect().y)
        exibir(menuManipulacao);
    }
    window.event.returnValue = false;
  });
}