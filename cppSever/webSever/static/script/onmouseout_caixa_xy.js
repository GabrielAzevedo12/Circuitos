const 
onmouseout_caixa_xy = (e) => {
   
    let 
    rv_perpendicular = fgs.$("#rv_perpendicular"),
    rh_perpendicular = fgs.$("#rh_perpendicular");

    //esconder(rv_perpendicular);
    //esconder(rh_perpendicular);
    fgs.Remover_class( fgs.$("#fila_xyP" + cat_y(e.target)), "sinalizar_fila");

}