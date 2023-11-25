const deslocar_mouse_1 = () => {
    console.log ("deslocar_mouse_1 está sendo executada");
    var body = document.body,
        exibirCoordenadas = (event) => {
            console.log ("coordenada x : " + event.clientX + ", coordenada y : " + event.clientY );
        },
        
        interromperMouseEvent = () => {
            document.body.onmousemove = (event) => {
                Deslocar_obj_2.arg1 = undefined;
            }
        };
 /*       
        for (x of document.getElementsByClassName("Caixa_xy")) {
            x.style.display = "none";
        }
   */     
        body.onmousemove = (event) => {
            ElementMouseMove.e = event;
            if(Deslocar_obj_2.arg1) {

                //Deslocar_xy(Deslocar_obj_2.arg1,event.target)
                let 
                [d1,d2] = [
                    Deslocar_obj_2.arg1.getBoundingClientRect(),
                    {
                        x: event.clientX,
                        y: event.clientY
                    }
                ],
                [dx,dy] = [
                    d2.x - d1.x,
                    d2.y - d1.y
                ],
                [rv, rh] = [fgs.$("#rv_perpendicular"), fgs.$("#rh_perpendicular")],
                [rv_d, rh_d] = [rv.getBoundingClientRect(), rh.getBoundingClientRect()];

                Deslocar_posAtual(Deslocar_obj_2.arg1,dx,dy);
                if(fgs.Existe_Class(Deslocar_obj_2.arg1,"ponto_ligaçao")) {
                    if_ponto_ligaçao(Deslocar_obj_2.arg1);
                }
                if(fgs.Existe_Class(Deslocar_obj_2.arg1,"transistor")) {
                    if_transistor(Deslocar_obj_2.arg1,undefined);
                }

                rv["style"]["height"] = document.body.clientHeight + "px";
                rv["style"]["width"] = 0.1*window.innerWidth*0.01 + "px"
                rh["style"]["width"] = document.body.clientWidth + "px";
                rh["style"]["height"] = 0.1*window.innerWidth*0.01 + "px";

                exibir(rv);
                exibir(rh);

                Deslocar_posAtual(rv, d2.x - rv_d.x, 0 - rv_d.y);
                Deslocar_posAtual(rh, undefined, d2.y - rh_d.y);

                //console.log(rv_d, d2.x - rv_d.x);
                //console.log(rh_d, d2.y - rh_d.y);
                //console.log(event);

            }
        }
        

}

const deslocar_mouse_2 = () => {
    console.log ("deslocar_mouse_2 está sendo executada");
    var body = document.body,
        exibirCoordenadas = (event) => {
            console.log ("coordenada x : " + event.clientX + ", coordenada y : " + event.clientY );
        },
        
        interromperMouseEvent = () => {
            document.body.onmousemove = (event) => {
                Deslocar_obj_2.arg1 = undefined;
            }
        };
/*
        for (x of document.getElementsByClassName("Caixa_xy")) {
            x.style.display = "";
        }
*/
        body.onmousemove = (event) => {
            ElementMouseMove.e = event; 
            //esconder(rv);
            //esconder(rh);   
        }
       

}