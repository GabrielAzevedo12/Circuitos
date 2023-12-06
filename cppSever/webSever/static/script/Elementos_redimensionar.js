const zerar_pos = (e) => {
    e["style"]["left"] = "0px";
    e["style"]["top"] = "0px";
}

const Rd_OBJ = {
    v1 : '',
    v2 : '',
    v3 : '',
    v4 : '',
    vertice_topLeft: '',
    vertice_topRight: '',
    vertice_bottomLeft: '',
    vertice_bottomRight: '',
    parent: ''
}

var 
    rv_1 = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertical_left" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    rv_2 = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertical_right" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    rh_1 = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar horizontal_top" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    rh_2 = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar horizontal_bottom" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    vertice_topLeft = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertice_Redimensionar vertice_topLeft" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    vertice_bottomLeft = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertice_Redimensionar vertice_bottomLeft" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),
    vertice_bottomRight = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertice_Redimensionar vertice_bottomRight" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined ),        
    vertice_topRight = gerarElementoHtml(
        "alterarDimensoes"+Math.round(Math.random()*10**3),
        "Redimensionar vertice_Redimensionar vertice_topRight" + " displayFalse flex-row deslocamentoPeloMouse PermissaoDrop" || "" ,
        "div",
        fgs.$("#elementosRedimensionar"),
        undefined,
        undefined );    

    var
    [rv_1_d, rv_2_d] = [rv_1.element.getBoundingClientRect(), rv_2.element.getBoundingClientRect()],
    [rh_1_d, rh_2_d] = [rh_1.element.getBoundingClientRect(), rh_2.element.getBoundingClientRect()];
/*
    zerar_pos(rv_1.element);
    zerar_pos(rv_2.element);
    zerar_pos(rh_1.element);
    zerar_pos(rh_2.element);
    zerar_pos(vertice_topLeft.element);
    zerar_pos(vertice_topRight.element);
    zerar_pos(vertice_bottomLeft.element);
    zerar_pos(vertice_bottomRight.element);
*/
    Rd_OBJ.v1 = rv_1.element;
    Rd_OBJ.v2 = rv_2.element;
    Rd_OBJ.v3 = rh_1.element;
    Rd_OBJ.v4 = rh_2.element;
    Rd_OBJ.vertice_topLeft = vertice_topLeft.element;
    Rd_OBJ.vertice_topRight = vertice_topRight.element;
    Rd_OBJ.vertice_bottomLeft = vertice_bottomLeft.element;
    Rd_OBJ.vertice_bottomRight = vertice_bottomRight.element;

const Def_Redimensionar = (elementParent) => {

    exibir(Rd_OBJ.v1)
    exibir(Rd_OBJ.v2)
    exibir(Rd_OBJ.v3)
    exibir(Rd_OBJ.v4)
    exibir(Rd_OBJ.vertice_topLeft)
    exibir(Rd_OBJ.vertice_topRight)
    exibir(Rd_OBJ.vertice_bottomLeft)
    exibir(Rd_OBJ.vertice_bottomRight)
        
/*
        elementParent.append(rv_1.element);
        elementParent.append(rv_2.element);
        elementParent.append(rh_1.element);
        elementParent.append(rh_2.element);
*/
        //Deslocar_posAtual(fgs.$("#alterarDimensoes458"), Global.Element.getBoundingClientRect().right - fgs.$("#alterarDimensoes458").getBoundingClientRect().right, Global.Element.getBoundingClientRect().top - fgs.$("#alterarDimensoes458").getBoundingClientRect().top);
/*
        Deslocar_posAtual(rv_1.element, ep_d.left - rv_1_d.right, ep_d.top - rv_1_d.top);
        Deslocar_posAtual(rv_2.element, ep_d.right - rv_2_d.right, ep_d.top - rv_2_d.top);
        Deslocar_posAtual(rh_1.element, ep_d.left - rh_1_d.left, ep_d.top - rh_1_d.bottom);
        Deslocar_posAtual(rh_2.element, ep_d.left - rh_2_d.left, ep_d.bottom - rh_2_d.bottom); 
*/
        //var [ep_d] = [elementParent.getBoundingClientRect()];

        Rd_OBJ.parent = elementParent;v

        Rd_OBJ.v1["style"]["height"] = elementParent.clientHeight + "px";
        Rd_OBJ.v1["style"]["width"] = 0.1*window.innerWidth*0.01 + "px"

        Rd_OBJ.v2["style"]["height"] = elementParent.clientHeight + "px";
        Rd_OBJ.v2["style"]["width"] = 0.1*window.innerWidth*0.01 + "px"

        Rd_OBJ.v3["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";
        Rd_OBJ.v3["style"]["width"] = elementParent.clientWidth + "px";

        Rd_OBJ.v4["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";
        Rd_OBJ.v4["style"]["width"] = elementParent.clientWidth + "px";

        Deslocar_posAtual(Rd_OBJ.v1, elementParent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, elementParent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, elementParent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, elementParent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, elementParent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, elementParent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, elementParent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, elementParent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, elementParent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (elementParent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, elementParent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (elementParent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, elementParent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, elementParent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, elementParent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, elementParent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);

    for( const x of document.getElementsByClassName("Redimensionar")) {  
        /*
          x.vinculo = {
              state : false,
              id : [],
              ligaçoes : [],
              ligamento_partida : [],
              boolean: false,
          };
        */
            x.addEventListener('mouseover', (e) => { 
            //onclick_ponto_ligacao(e);
            }) 
            x.addEventListener('mouseout', (e) => { 
            //onclick_ponto_ligacao(e);
            })
           x.addEventListener('drag', (e) => { 
            obj_arrastado.element = e.target;
            }) 
           x.addEventListener('dragstart', (e) => { 
            e.dataTransfer.setData("element", e.target.id);
            }) 
           x.addEventListener('dragover', (e) => { 
            //onclick_ponto_ligacao(e);
            }) 
           x.addEventListener('drop', (e) => { 
            //onclick_ponto_ligacao(e);
             }) 
    } 

}

  
//class : "class_teste_3 Redimensionar ponto_ligacao_ligar off displayFalse flex-row deslocamentoPeloMouse"
   
  