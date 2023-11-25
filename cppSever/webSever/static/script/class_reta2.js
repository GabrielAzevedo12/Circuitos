class Reta2 extends ElementG {

    /*
    constructor(Identificaçao, Geometria, Event, Atributos) {

        super(Identificaçao, Geometria, Event, Atributos);

    }
    */

}

rv_perpendicular = gerarReta_vertical("rv_perpendicular","perpendicular"),
rh_perpendicular = gerarReta_horizontal("rh_perpendicular","perpendicular");

fgs.$("#div_retas_perpendiculares").append(rv_perpendicular.element) 
fgs.$("#div_retas_perpendiculares").append(rh_perpendicular.element) 

fgs.Adicionar_class(rv_perpendicular.element,"displayFalse");
fgs.Adicionar_class(rh_perpendicular.element,"displayFalse");
/*
let retaClass_vertical = gerarReta_vertical("retaClass_vertical","");
let retaClass_horizontal = gerarReta_horizontal("retaClass_horizontal","");
retaClass_vertical.Deslocar_to(retaClass_vertical.Geometria.pontoInicial);
retaClass_horizontal.Deslocar_to(retaClass_horizontal.Geometria.pontoInicial);
*/


