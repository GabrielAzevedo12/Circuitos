let
quadro = fgs.$("#quadro_drag");

quadro.ondrop = (e) => {

    /*
    e.preventDefault();
    const 
    data = e.dataTransfer.getData ("element"),
    element = document.getElementById(data);
    let 
    [data_geometria,parent_geometria] = [element.getBoundingClientRect(), e.target.getBoundingClientRect()],
    rv_perpendicular = fgs.$("#rv_perpendicular"),
    rh_perpendicular = fgs.$("#rh_perpendicular"),
    quadro = fgs.$("#quadro_drag");
    */

    //Deslocar_xy(element,e.target);
    /*
    let
    [d1,d2] = [
        element.getBoundingClientRect(),
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
    */
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
}
*/
/*
    if(fgs.Existe_Class(element,"ponto_ligacao_ligar")) {
        if_ponto_ligaçao(element);
    }
    
    if(fgs.Existe_Class(element,"transistor")) {
        if_transistor(element,e.target);
    }

    esconder(rv_perpendicular);
    esconder(rh_perpendicular);
    fgs.Remover_class( obj_arrastado.fila, "sinalizar_fila");

    obj_arrastado.element = undefined;
    obj_arrastado.fila = undefined;
*/
};

quadro.ondragover = (e) => {

    //e.preventDefault();

};

