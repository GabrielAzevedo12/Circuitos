let Deslocar_xy_upOrDown = class {

    constructor(e1,e2,Direçao) {

        //O e1 está abaixo de  e2 no viewport e e1 está a esquerda de e2
        if (Direçao === "topRight") { 

            console.log("Direção e top right") 
            this.x = e2.getBoundingClientRect().left - e1.getBoundingClientRect().left;
            this.y = -(e1.getBoundingClientRect().top - e2.getBoundingClientRect().top);

        }
       //O e1 está abaixo de  e2 no viewport e e1 está a direita de e2
        else if (Direçao === "topLeft") { 

            this.x = -(e2.getBoundingClientRect().left - e1.getBoundingClientRect().left);
            this.y = -(e1.getBoundingClientRect().top - e2.getBoundingClientRect().top);

        }
        //O e1 está acima de  e2 no viewport e e1 está a esquerda de e2
        else if (Direçao === "DownRight") {

            this.x = e2.getBoundingClientRect().left - e1.getBoundingClientRect().left;
            this.y = e2.getBoundingClientRect().top - e1.getBoundingClientRect().top;

        }
        //O e1 está acima de  e2 no viewport e e1 está a direita de e2
        else if (Direçao === "DownLeft") {

            this.x = -(e2.getBoundingClientRect().left - e1.getBoundingClientRect().left);
            this.y = e2.getBoundingClientRect().top - e1.getBoundingClientRect().top;

        }

        this.deslocar_e1 = () => {

            e1.style.left = this.x + "px";
            e1.style.top = this.y + "px";

        }

        this.deslocar_e2 = () => {

            e2.style.left = -this.x + "px";
            e2.style.top = -this.y + "px";

        }

        this.deslocar_e1_to = (x,y) => {

            e1.style.left = x + "px";
            e1.style.top = y + "px";

        }

        this.deslocar_e2_to = (x,y) => {

            e2.style.left = x + "px";
            e2.style.top = y + "px";

        }

    }
}

const Deslocar_xy = (e1,e2) => {
    let x,y,
    xAtual = parseFloat( vaziaString( splitL(e1["style"]["left"],'p') ) ),
    yAtual = parseFloat( vaziaString( splitL(e1["style"]["top"],'p') ) );

    //console.log ( vaziaString( splitL(e1["style"]["left"],'p') ) )
    x = (e2.getBoundingClientRect().left - e1.getBoundingClientRect().left) + xAtual;
    y = (e2.getBoundingClientRect().top - e1.getBoundingClientRect().top) + yAtual;

    e1.style.position = "relative";
    e1.style.left = x + "px";
    e1.style.top = y + "px";

}

const Deslocar = (e,x,y) => {
/*
    let
    xAtual = parseFloat( vaziaString( splitL(e["style"]["left"],'p') ) ),
    yAtual = parseFloat( vaziaString( splitL(e["style"]["top"],'p') ) );
*/
    if(x === undefined || x === null) {

        console.log("o deslocamento horizontal está indefinido");

    } else {

      //e.style.left = (x+xAtual) + "px";
      e.style.left = (x) + "px";

    }

    if(y === undefined || y === null) {

        console.log("o deslocamento vertical está indefinido");

    } else {

  //e.style.top = (y+yAtual) + "px";
    e.style.top = (y) + "px";

    }

}

const Deslocar_posAtual = (e,x,y) => {

    let
    xAtual = parseFloat( vaziaString( splitL(e["style"]["left"],'p') ) ),
    yAtual = parseFloat( vaziaString( splitL(e["style"]["top"],'p') ) );

    let exibir = 0;
    
    e.style.position = "relative";
    
    if(x === undefined || x === null) {

        if(exibir) {console.log("o deslocamento horizontal está indefinido");}

    } else {
        
        e.style.left = (x+xAtual) + "px";
        //e.style.left = (x) + "px";

    }

    if(y === undefined || y === null) {

        if(exibir) {console.log("o deslocamento vertical está indefinido");}

    } else {

        e.style.top = (y+yAtual) + "px";
        //e.style.top = (y) + "px";

    }
}

let Deslocar_obj = {

    permissao_deslocamento : false ,
    arg1 : undefined,
    arg2 : undefined,
    text_transistor: undefined,
    Deslocar: (e) => {

        if(Deslocar_obj.permissao_deslocamento === true) {

            console.log("Deslocar_obj.Deslocar está sendo executada")
            if(Deslocar_obj.arg1 === undefined && Deslocar_obj.arg2 === undefined) {

                console.log("Condiçao 1 está sendo executada")
                fgs.Adicionar_class(e,"coordenada1_ativada");
                Deslocar_obj.arg1 = e; 
                Deslocar_obj.arg2 = undefined;
            
            } else if(Deslocar_obj.arg1 === undefined && Deslocar_obj.arg2 !== undefined) { 
                
                console.log("Condiçao 2 está sendo executada")
            
            } else if(Deslocar_obj.arg1 !== undefined && Deslocar_obj.arg2 === undefined) {
 
                console.log("Condiçao 3 está sendo executada")
                Deslocar_obj.arg2 = e;
                Deslocar_obj.text_transistor = if_transistor_Invalido(Deslocar_obj.arg1);

                if (Deslocar_obj.text_transistor) {

                    Deslocar_xy(Deslocar_obj.arg1,Deslocar_obj.arg2);

                    if(fgs.Existe_Class(Deslocar_obj.arg1,"transistor")) {
                        if_transistor(Deslocar_obj.arg1);
                    }
                    
                    fgs.Remover_class(Deslocar_obj.arg1,"coordenada1_ativada");
                    Deslocar_obj.arg1 = undefined;
                    Deslocar_obj.arg2 = undefined;

                } else {

                    console.log("Isto é um texto do transitor");

                }

                Deslocar_obj.text_transistor = undefined;
                
            
            } else if(Deslocar_obj.arg1 !== undefined && Deslocar_obj.arg2 !== undefined) {

                console.log("Condiçao 4 está sendo executada")

                fgs.Remover_class(Deslocar_obj.arg1,"coordenada1_ativada");

                Deslocar_obj.arg1 = undefined;
                Deslocar_obj.arg2 = undefined;
            
            }
        }
    
    }

}

let Deslocar_obj_2 = {

    permissao_deslocamento : false ,
    arg1 : undefined,
    text_transistor: undefined,
    Deslocar: (e) => {

        if(Deslocar_obj_2.permissao_deslocamento === true) {

            console.log("Deslocar_obj_2.Deslocar está sendo executada");

            if(Deslocar_obj_2.arg1 === undefined) {

                console.log("Condiçao 1 está sendo executada")
                Deslocar_obj_2.arg1 = e; 
                console.log(Deslocar_obj_2.arg1);
                Deslocar_obj_2.text_transistor = if_transistor_Invalido(Deslocar_obj_2.arg1);

                if (Deslocar_obj_2.text_transistor) {

                    Deslocar_obj_2.arg1 = e; 
                    
                    for (child_element of Deslocar_obj_2.arg1.childNodes) {
                        if(fgs.Existe_Class(child_element,"ponto_ligacao_ligar")) {
                            if_ponto_ligaçao(child_element);
                        }
                        if(fgs.Existe_Class(child_element,"transistor")) {
                            if_transistor(child_element);
                        }
                    }
                    if(fgs.Existe_Class(Deslocar_obj_2.arg1,"ponto_ligacao_ligar")) {
                        if_ponto_ligaçao(Deslocar_obj_2.arg1);
                    }
                    if(fgs.Existe_Class(Deslocar_obj_2.arg1,"transistor")) {
                        if_transistor(Deslocar_obj_2.arg1,e.target);
                    }

                } else {

                    console.log("Isto é um texto do transitor");
                    Deslocar_obj_2.arg1 = undefined; 

                }

                Deslocar_obj_2.text_transistor = undefined;
            } else {

                console.log("Condiçao 2 está sendo executada")

                fgs.Existe_Class(Deslocar_obj_2.arg1,"transistor") ? 
                if_transistor(Deslocar_obj_2.arg1,undefined) : 
                console.log(0);
                
                Deslocar_obj_2.arg1 = undefined;
            
            }
        }
    
    }

}


