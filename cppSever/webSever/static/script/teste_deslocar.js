let teste_deslocar = () => {
    let 
    fio = new Reta("div", ".retas", "reta reta_vertical", "reta_entrada_inicial_transistor_ligar", undefined, undefined, undefined, "vw",  undefined, 10),
    entrada_inicial = fgs.$("#entrada_inicial_transistor_ligar"),
    entrada_iniciald = entrada_inicial.getBoundingClientRect();

    fio.Create();
    fio.Deslocar_to();

    let fiod = reta.element.getBoundingClientRect();

    dy = entrada_iniciald.width;
    dx = entrada_iniciald.width*0.5 - fiod.width*0.5;

    Deslocar_xy(fio.element,entrada_inicial);
    Deslocar(fio.element,dx,dy);

    /*
    let 
    x1 = fgs.$("#transistor_teste").getBoundingClientRect(), 
    x2 = fgs.$("#entrada_final_transistor_teste").getBoundingClientRect();

    let y1 = (x2.width - (x1.top - x2.top)) + (x2.width);
    console.log(y1);
    Deslocar(fgs.$("#entrada_final_transistor_teste"),0,-1*y1)
    */

}
