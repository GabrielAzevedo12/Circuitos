const criarFilas = () => {

    const Grade_xy = fgs.$("#Grade_xy");

    var fila, filaClass, filaId, caixa, caixaClass, caixaId, vw = window.outerWidth*1/100;
    //Criando Filas
    for( i=1 ; i<50 ; i++) {

         filaId = "fila_xyP" + i;
         fila = gerarFila(filaId,"",Grade_xy);

         //Criando Caixas
        for( j=1 ; j<=100 ; j++) {

            caixaId = "Px" + j + "Py" + i;
            caixaClass = "Caixa_xyP" + i;
            gerarCaixa(caixaId,caixaClass,fila.element);

        }
  
    }

}

criarFilas();

let Vetores = {};

let criarPontos = (QuantidadePontos,regrax,regray) => {       

    console.log("Iniciada a função CriarPontos no elemento ");

   for( i=1 ; i<=QuantidadePontos ; i++) {

       var  vx = regrax(i), vy = regray(vx);
       Vetores["Vetor"+i] = new ponto("div", ".pontos", "ponto",
           "vx"+vx+"vy"+vy, vx, vy, "vw"); 

       Vetores["Vetor"+i].Create();
       Vetores["Vetor"+i].Deslocar();

   }

    return Vetores;

}

var teste_criarPontos = () => {

    let rx = (t) => {
        return t*0.01
    };

    let ry = (x) => {
        return -1*(20**2 - (x-20)**2)**0.5 - 20
    };

    let ry_inverso = (x) => {
        return (20**2 - (x-0.2)**2)**0.5 - 20
    };

    let rx_inverso = (t) => {
        return -1*t*0.01
    };

    criarPontos(4000,rx,ry);
    criarPontos(4000,rx,ry_inverso);

}; 

teste_criarPontos();

const cat_x = (ex) => {

    var s = split(ex.id,"x","P");
    return parseFloat(s);

}

const cat_y = (ey) => {

    var s = split(ey.id,"y","");
    return parseFloat(s);

}


let caixa_xy = fgs.$(".Caixa_xy");

const createCompTest = () => {

    let compx = document.createElement("div");
    compx.ClassName = "compx_teste";

}

const posiçaoRelativa_x = (e) => {

    return parseFloat( vaziaString( splitL(e["style"]["left"],'p') ) );

}

const posiçaoRelativa_y = (e) => {

    return parseFloat( vaziaString( splitL(e["style"]["top"],'p') ) );
    
}

let desloc = () => {

    let f = (t) => {
        return t*0.001
    };

    let Atualizar = (t) => {
        return t + 1
    };

    let Desloc = (elemento,limite,transformarx) => {

        let x = posiçaoRelativa_x(elemento);

        if (x >= limite) {

            clearInterval(Desloc_interval);

        } else {

            x = transformarx(x);
            Deslocar(elemento, x, undefined);

        } 

    }

    let Desloc_interval = setInterval(() => {
        Desloc(fgs.$("#retaClass_horizontal"),1000,Atualizar)
    },0);

}
