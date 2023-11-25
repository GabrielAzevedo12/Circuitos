var ligarPontos_o = {

    arg1 : {
        id: null,
        x: null,
        y: null,
        state: null,
    },
    arg2 : {
       id: null,
       x: null,
       y: null,
       state: null,
    },
   

}

const ligarPontos_this =  fgs.$("#LigarPontos");

ligarPontos_this.onclick = () => {

    var vx, xy, comp_x, 
        comp_x_o = {
            width: null,
            height: null,
            className: "componente componentex",
            id: null,  
        }, 
        comp_y_o = {
            width: null,
            height: null,
            className: "componente componentey",
            id:null,
        };

    comp_x = document.createElement("div");
    comp_y = document.createElement("div");


    if( ligarPontos_o.arg1.state === true && ligarPontos_o.arg2.state === true ) 
{

    ligarPontos_o.arg1.x = parseFloat(split(ligarPontos_o.arg1.id,"x","p"));
    ligarPontos_o.arg1.y = parseFloat(split(ligarPontos_o.arg1.id,"y",""));
    ligarPontos_o.arg2.x = parseFloat(split(ligarPontos_o.arg2.id,"x","p"));
    ligarPontos_o.arg2.y = parseFloat(split(ligarPontos_o.arg2.id,"y",""));

     vx = [ligarPontos_o.arg2.x - ligarPontos_o.arg1.x,0];
     vy = [0,ligarPontos_o.arg2.y - ligarPontos_o.arg1.y]; 
    //Def valores dos Objetos    
    comp_x_o.width = vx[0]+"vw";
    comp_x_o.height = "0.5vw";
    comp_x_o.id = "px" + vx[0] + "py" + vx[1];

    comp_y_o.height = vy[1]+"vw";
    comp_y_o.width = "0.5vw";
    comp_y_o.id = "vx" + vy[0] + "vy" + vy[1];
    //Def Componentes
    comp_x.style.width = comp_x_o.width;
    comp_x.style.height = comp_x_o.height;
    comp_x.ClassName = comp_x_o.ClassName;
    comp_x.id = comp_x_o.id;

    comp_y.style.width = comp_y_o.width;
    comp_y.style.height = comp_y_o.height;
    comp_y.ClassName = comp_y_o.ClassName;
    comp_y.id = comp_y_o.id

}

}

