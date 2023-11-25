const 
onmouseover_caixa_xy = (e) => {

    let 
        [rv, rh] = [fgs.$("#rv_perpendicular"), fgs.$("#rh_perpendicular")],
        [rv_d, rh_d] = [rv.getBoundingClientRect(), rh.getBoundingClientRect()],
        [d1,d2] = [
            undefined,
            {
                x: ElementMouseMove.e.clientX,
                y: ElementMouseMove.e.clientY
            }
        ];

        rv["style"]["height"] = document.body.clientHeight + "px";
        rv["style"]["width"] = 0.1*window.innerWidth*0.01 + "px"
        rh["style"]["width"] = document.body.clientWidth + "px";
        rh["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";

        exibir(rv);
        exibir(rh);
        setTimeout(() => {
            exibir(rh);
            exibir(rh);
        }, "500");
                
        Deslocar_posAtual(rv, d2.x - rv_d.x, 0 - rv_d.y);
        Deslocar_posAtual(rh, undefined, d2.y - rh_d.y);
        if(Deslocar_obj_2.permissao_deslocamento === false) {
        
        }
        fgs.Adicionar_class( fgs.$("#fila_xyP" + cat_y(e.target)), "sinalizar_fila");

}
/*

    let 
        rv_perpendicular = fgs.$("#rv_perpendicular"),
        rh_perpendicular = fgs.$("#rh_perpendicular");

        rv_perpendicular["style"]["height"] = window.innerHeight + + 3*window.innerWidth*0.01 + "px";
        rv_perpendicular["style"]["width"] = 0.1*window.innerWidth*0.01 + "px";

        rh_perpendicular["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";
        rh_perpendicular["style"]["width"] = window.innerWidth + "px";

        exibir(rv_perpendicular);
        exibir(rh_perpendicular);
        setTimeout(() => {
            exibir(rh_perpendicular);
            exibir(rh_perpendicular);
        }, "500");
                
        Deslocar_xy( rv_perpendicular, fgs.$("#Px" + cat_x(e.target) + "Py49" ));
        Deslocar_xy( rh_perpendicular, fgs.$("#Px1Py" + cat_y(e.target) ));
        fgs.Adicionar_class( fgs.$("#fila_xyP" + cat_y(e.target)), "sinalizar_fila");
*/