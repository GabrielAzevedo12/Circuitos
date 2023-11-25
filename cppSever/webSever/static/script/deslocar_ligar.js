const deslocar_ligar = (e,parent,x,y,height,width) => {

    parent.append(e);
    if(height) {

        fgs.S2(e, "height", height + "px")

    }
    if(width) {

        fgs.S2(e, "width", width + "px")

    }

    fgs.S2(e, "top", y + "px");
    fgs.S2(e, "left", x + "px");
    fgs.S2(e,"position","absolute");

}

const deslocar_ligar_2 = (e,x,y,height,width) => {

    let [x_atual, y_atual] = [e.getBoundingClientRect().x, e.getBoundingClientRect().y];

    //console.log("Esse é o valor atual vertical : " + (y_atual));
    //console.log("Esse é o valor atual horizontal : " + (x_atual));
    //console.log("Variação vertical : " + (y - y_atual));
    //console.log("Variação horizontal : " + (x - x_atual));

    if(height) {

        fgs.S2(e, "height", height + "px")

    }
    if(width) {

        fgs.S2(e, "width", width + "px")

    }

    fgs.S2(e,"position","relative");
    fgs.S2(e, "top", (y - y_atual) + "px");
    fgs.S2(e, "left", (x - x_atual) + "px");

}

const deslocar_ligar_3 = (e,x,y,height,width) => {

    let [x_atual, y_atual] = [e.getBoundingClientRect().x, e.getBoundingClientRect().y];
    
    if(height) {

        fgs.S2(e, "height", height + "px")

    }
    if(width) {

        fgs.S2(e, "width", width + "px")

    }

    Deslocar_posAtual(e,x - x_atual,y - y_atual);

}

