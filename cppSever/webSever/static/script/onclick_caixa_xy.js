const 
onclick_caixa_xy = (e) => {

    Deslocar_obj.Deslocar(e.target);
    var ponto = document.createElement("div"),
        ponto_o = {
            class: "ponto",
            id: "",
            /*
            x: cat_x(e.target) - 0.5*vw,
            y: cat_y(e.target) - 0.5*vw,
            */
            coordenadas: {
                x0: cat_x(e.target),
                y0: cat_y(e.target),
            },
            deslocar: {
                    x0: "0.5vw",
                    y0: "-0.5vw",
            }
        };

    ponto_o.id = "px" + ponto_o.coordenadas.x0 + "py" + ponto_o.coordenadas.y0;

    ponto.className = ponto_o.class;
    ponto.id = ponto_o.id;
    ponto.style.left = ponto_o.deslocar.x0;
    ponto.style.top = ponto_o.deslocar.y0;
 
     e.target.append(ponto);

                 }