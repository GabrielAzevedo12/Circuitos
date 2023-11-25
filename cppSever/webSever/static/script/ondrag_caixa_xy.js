const 
ondragover_caixa_xy = (e) => {

    e.preventDefault();

    /*
    let t = obj_arrastado.element;

    console.log(t)
    fgs.Adicionar_class(e.target,"Sinalizar_caixa");

    let rv_perpendicular = fgs.$("#rv_perpendicular"),
        rh_perpendicular = fgs.$("#rh_perpendicular"),
        ultima_fila = fgs.$("#fila_xyP49").getBoundingClientRect();
    
    rv_perpendicular["style"]["height"] = window.innerHeight + 3*window.innerWidth*0.01 + "px";
    rh_perpendicular["style"]["width"] = window.innerWidth + "px";
            
    fgs.Remover_class(rv_perpendicular,"displayFalse");
    fgs.Remover_class(rh_perpendicular,"displayFalse");
    fgs.Adicionar_class(rv_perpendicular,"displayTrue");
    fgs.Adicionar_class(rh_perpendicular,"displayTrue");

    let
    [tx,ty] = [t.getBoundingClientRect().x,t.getBoundingClientRect().y],
    [rvx,rvy] = [rv_perpendicular.getBoundingClientRect().x,rv_perpendicular.getBoundingClientRect().y],
    [rhx,rhy] = [rh_perpendicular.getBoundingClientRect().x,rh_perpendicular.getBoundingClientRect().y];

    Deslocar(rv_perpendicular, tx - rvx, ultima_fila.y - rvy);
    */
    let 
        rv_perpendicular = fgs.$("#rv_perpendicular"),
        rh_perpendicular = fgs.$("#rh_perpendicular"),
        quadro = fgs.$("#quadro_drag"),
        fila = fgs.$("#fila_xyP" + cat_y(e.target)),
        element = obj_arrastado.element;
/*
        rv_perpendicular["style"]["height"] = window.innerHeight + 3*window.innerWidth*0.01 + "px";
        rh_perpendicular["style"]["width"] = window.innerWidth + "px";
        
        quadro["style"]["height"] = element.getBoundingClientRect().height + "px";
        quadro["style"]["width"] = element.getBoundingClientRect().width + "px";
        
        exibir(rv_perpendicular);
        exibir(rh_perpendicular);
        exibir(quadro);
            
        Deslocar_xy( rv_perpendicular, fgs.$("#Px" + cat_x(e.target) + "Py49" ));
        Deslocar_xy( rh_perpendicular, fgs.$("#Px1Py" + cat_y(e.target) ));
        Deslocar_xy( quadro, fgs.$("#Px" + cat_x(e.target) + "Py" + cat_y(e.target) ));
        */
        fgs.Adicionar_class( fila , "sinalizar_fila" );
        obj_arrastado.fila = fila;
/*
        if(obj_arrastado.fila === fila) {
            fgs.Remover_class( fila , "sinalizar_fila" );
        } else {
            fgs.Adicionar_class( fila , "sinalizar_fila" );
            obj_arrastado.fila = fila;
        }
*/
},

ondragleave_caixa_xy = (e) => {

    e.preventDefault();
    fgs.Remover_class( obj_arrastado.fila , "sinalizar_fila" );    
    obj_arrastado.fila = undefined;

};