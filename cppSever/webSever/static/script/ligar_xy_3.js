let Ligar_xy_3 = (e1,e2) => {

    console.log("Ligar_xy_3 está sendo executada");
    console.log(e1,e2);

    let [posiçao_e1, posiçao_e2] = [e1.getBoundingClientRect(), e2.getBoundingClientRect()];
    let [posiçao_e1_parent, posiçao_e2_parent] = [e1.parentElement.getBoundingClientRect(), e2.parentElement.getBoundingClientRect()];
    if(fgs.Existe_Class(e1,"entrada") && fgs.Existe_Class(e2,"entrada")) {
        let [parent_child1, parent_child2] = [e1.parentElement.childNodes[1].getBoundingClientRect(), e2.parentElement.childNodes[1].getBoundingClientRect()],
        //constantes relativa a janela e variação das entradas 
        [vw, constante_entrada] = [window.innerWidth*0.01, (posiçao_e1_parent.y - parent_child1.y)];
    };
    let 
    //vetor de e1
    [x1, y1] = [posiçao_e1.x, posiçao_e1.y],
    //vetor de e2 
    [x2, y2] = [posiçao_e2.x, posiçao_e2.y],
    //vetor pai e1
    [x1_parent, y1_parent] = [posiçao_e1_parent.x, posiçao_e1_parent.y],
    //vetor pai e2 
    [x2_parent, y2_parent] = [posiçao_e2_parent.x, posiçao_e2_parent.y],
    //Dimensoes e1
    [w1, h1] = [posiçao_e1.width, posiçao_e1.height],
    //Dimensoes e2
    [w2, h2] = [posiçao_e2.width, posiçao_e2.height],
    //Dimensoes pai e1
    [w1_parent, h1_parent] = [posiçao_e1_parent.width, posiçao_e1_parent.height],
    //Dimensoes pai e2
    [w2_parent, h2_parent] = [posiçao_e2_parent.width, posiçao_e2_parent.height],
    //variação horizontal e vertical de e1 e e2
    [dx, dy] = [np(x2-x1), np(y2-y1)],
    //variação horizontal e vertical de e1_parent e e2_parent
    [dx_parent, dy_parent] = [np(x2_parent-x1_parent), np(y2_parent-y1_parent)],
    nomeRelacional = "_vinc_" + e1.id + "_to_" + e2.id,
    //distancia entre as duas entradas
    dr = ( dx**2 + dy**2 )**0.5,
    //distancia entre os dois transistores
    dr_parent = ( dx_parent**2 + dy_parent**2 )**0.5,
    [vw] = [window.innerWidth*0.01];

if (dx && dy && (dx !== 0)) {
    let
    Def_ligaçoes = (array_ligaçoes) => {
        e1.vinculo.state = true;
        e1.vinculo.id.push(e2);
        e1.vinculo.ligaçoes.push({ vinculo: e2, array: array_ligaçoes});

        e2.vinculo.state = true;
        e2.vinculo.id.push(e1);    
        e2.vinculo.ligaçoes.push({ vinculo: e1, array: array_ligaçoes});
    },
    objEntrada = 
{ 

    typeEntrada1: (fgs.Existe_Class(e1,"entrada_final") && fgs.Existe_Class(e2,"entrada_final")),
    typeEntrada2: (fgs.Existe_Class(e1,"entrada_inicial") && fgs.Existe_Class(e2,"entrada_inicial")),
    typeEntrada3: (fgs.Existe_Class(e1,"entrada_inicial") && fgs.Existe_Class(e2,"entrada_final")),
    typeEntrada4: (fgs.Existe_Class(e1,"entrada_final") && fgs.Existe_Class(e2,"entrada_inicial")),
    ponto_ligaçao: {
        codiçao: {
            1: (fgs.Existe_Class(e1,"ponto_ligacao_ligar") && fgs.Existe_Class(e2,"ponto_ligacao_ligar"))
        },
        açao: {
            1: (r1,r2,r3) => {
    
                console.log("As entradas foram definidas corretamente ... ")
        
        //-----------------------------------------------------------------------------------------------------        
        
                let 
                r1_pos,
                [height_r1, width_r1] = [dy + 2*h1 - h2, undefined],
                [posiçao_r1_x, posiçao_r1_y] = [x2 + w2*0.5, y2 + h2]; 
        
                deslocar_ligar_3(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
                /*
                if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
                    deslocar_ligar_3(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
                } else {
                    deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
                }
                */
                r1_pos = r1.getBoundingClientRect();
                    
        //-----------------------------------------------------------------------------------------------------
                    
                let 
                r2_pos = r2.getBoundingClientRect(),
                [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
                [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, height_r1 + y2 + h2 - r2_pos.height];
        
                x2-x1 < 0  ? posiçao_r2_x = x2 + w2*0.5 : console.log("e1 está atrás de e2");
        
                deslocar_ligar_3(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
                /*
                if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
                    deslocar_ligar_3(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
                } else {
                    deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
                }
                */
        
                r2_pos = r2.getBoundingClientRect();
        
        //-----------------------------------------------------------------------------------------------------
        
                let 
                r3_pos = r3.getBoundingClientRect(),
                [height_r3, width_r3] =[np(posiçao_r2_y - (y1 + h1) + r2_pos.height), undefined],
                [posiçao_r3_x, posiçao_r3_y] = [x1 + w1*0.5, y1 + h1];
        
                deslocar_ligar_3(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
                /*
                if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
                    deslocar_ligar_3(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
                } else {
                    deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
                }
                */
                
                r3_pos = r3.getBoundingClientRect();
                
            
        }
    }
    },
    açao_typeEntrada1 : (r1,r2,r3) => {
    
        console.log("As entradas foram definidas corretamente ... ")

//-----------------------------------------------------------------------------------------------------        

        let 
        r1_pos = r1.getBoundingClientRect(),
        [height_r1, width_r1] = [np(y2-y1)+h2, undefined],
        [posiçao_r1_x, posiçao_r1_y] = [ x1 + w1*0.5, y2 - h2 ];

        y2 - y1 > 0 ? [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y1 - h1, (y1+h1) - y1] : console.log("e1 está abaixo de e2");

        deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        r1_pos = r1.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, y2 - h2];

        y2 - y1 > 0 ? [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x1 + w1*0.5, y1 - h1, np(dx - w1*0.5 + w2*0.5)] : 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x1 + w1*0.5, y2 - h2, np(dx - w1*0.5 + w2*0.5)];
        
        x2 - x1 < 0 ? [ posiçao_r2_x ] = [ x2 + w2*0.5 ] : console.log("e1 esta atrás de e2");

        deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        r2_pos = r2.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos = r3.getBoundingClientRect(),
        [height_r3, width_r3] = [ (y2 + h2) - y2, undefined ],
        [posiçao_r3_x, posiçao_r3_y] = [x2 + w2*0.5, y2 - h2 ];

        y2 - y1 > 0 ? [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x2 + w2*0.5, y1 - h1, dy + h2] : console.log("e1 está abaixo de e2");

        deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        r3_pos = r3.getBoundingClientRect();
        
    },
    açao_typeEntrada1_vinc : (r1,r2,r3) => {
    
        console.log("As entradas foram definidas corretamente ... ")

//-----------------------------------------------------------------------------------------------------        

        let 
        r1_pos = r1.getBoundingClientRect(),
        [height_r1, width_r1] = [np(y2-y1)+h2, undefined],
        [posiçao_r1_x, posiçao_r1_y] = [ x1 + w1*0.5, y2 - h2 ];

        y2 - y1 > 0 ? [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y1 - h1, (y1+h1) - y1] : console.log("e1 está abaixo de e2");

        deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        r1_pos = r1.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x2 + w2*0.5, y2 - h2];

//      x2 - x1 > 0 ? [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x2 + w2*0.5, y1 - h1, np(dx - w1*0.5 + w2*0.5)] : console.log("e1 está abaixo de e2");
        y2 - y1 > 0 ? [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x1 + w1*0.5, y1 - h1, np(dx - w1*0.5 + w2*0.5)] : 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x2 + w2*0.5, y1 - h1, np(dx - w1*0.5 + w2*0.5)];
//      x2 - x1 < 0 ? [ posiçao_r2_x ] = [ x2 + w2*0.5 ] : console.log("e1 esta atrás de e2");

        deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        r2_pos = r2.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos = r3.getBoundingClientRect(),
        [height_r3, width_r3] = [ (y2 + h2) - y2, undefined ],
        [posiçao_r3_x, posiçao_r3_y] = [x2 + w2*0.5, y2 - h2 ];

        y2 - y1 > 0 ? [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x2 + w2*0.5, y1 - h1, dy + h2] : console.log("e1 está abaixo de e2");

        deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        r3_pos = r3.getBoundingClientRect();
        
    },
    açao_typeEntrada2: (r1,r2,r3) => {
    
        console.log("As entradas foram definidas corretamente ... ")

//-----------------------------------------------------------------------------------------------------        

        let 
        r1_pos,
        [height_r1, width_r1] = [dy + 2*h1 - h2, undefined],
        [posiçao_r1_x, posiçao_r1_y] = [x2 + w2*0.5, y2 + h2]; 

        deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        /*
        if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
            deslocar_ligar_3(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        } else {
            deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        }
        */
        r1_pos = r1.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, height_r1 + y2 + h2 - r2_pos.height];

        x2-x1 < 0  ? posiçao_r2_x = x2 + w2*0.5 : console.log("e1 está atrás de e2");

        deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        /*
        if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
            deslocar_ligar_3(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        } else {
            deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        }
        */

        r2_pos = r2.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos = r3.getBoundingClientRect(),
        [height_r3, width_r3] =[np(posiçao_r2_y - (y1 + h1) + r2_pos.height), undefined],
        [posiçao_r3_x, posiçao_r3_y] = [x1 + w1*0.5, y1 + h1];

        deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        /*
        if(objEntrada.ponto_ligaçao['1'] && Existe_Vinc) {
            deslocar_ligar_3(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        } else {
            deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        }
        */
        
        r3_pos = r3.getBoundingClientRect();
        
    },
    açao_typeEntrada4_c1 : (r1,r2,r3,r4,r5) => {
    
        console.log("As entradas foram definidas corretamente ... ")
        console.log("Essa é a variação vertical das duas entradas :  " + (y2 - y1));

//-----------------------------------------------------------------------------------------------------        

        let 
        r1_pos = r1.getBoundingClientRect(),
        [height_r1, width_r1] = [np(y2-y1)+(h1+h2), undefined],
        [posiçao_r1_x, posiçao_r1_y] = [ x1 + w1*0.5, y2 - h2 ];

        //se e2 está abaixo de e1 -> r1_d1 ou se e2 está acima de e1 -> r1_d2 
        y2 - y1 > 0 ?
        //r1_d1 
        [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y1 - h1, (y1) - (y1-h1) ] : 
        //r1_d2
        [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y1 + h1, (y1+2*h1) - (y1+h1) ];

        deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        r1_pos = r1.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, y2 - h2];

        y2 - y1 > 0 ? 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ (x2_parent - w2*0.5), y1 - h1, np((x1 + w1*0.5) - (x2_parent - w2*0.5)) ] : 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x1_parent - w1*0.5, y1 + 2*h1, np((x1 + w1*0.5 - x1_parent) + w1*0.5)];
        
        x2 - x1 <= 0 ?
        [ posiçao_r2_x ] = [ (x2_parent - w2*0.5) ] : 
        [ posiçao_r2_x ] = [ (x1 + w1*0.5 ) ];

        (x2_parent <= x1+w1*0.5 && x2_parent >= x1) ?
        [ posiçao_r2_x ] = [ (x2_parent - w2*0.5) ] : 
        console.log(0) ;

        deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        r2_pos = r2.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos = r3.getBoundingClientRect(),
        [height_r3, width_r3] = [ (y2 + h2) - y2, undefined ],
        [posiçao_r3_x, posiçao_r3_y] = [x2 + w2*0.5, y2 - h2 ];

        y2 - y1 > 0 ? 
        [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x2_parent - w2*0.5, y1 - h1, dy + 2*h2 + h1] : 
        [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x1_parent - w1*0.5, y2 - h2, dy + 2*h1 + h2];

        deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        r3_pos = r3.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r4_pos = r4.getBoundingClientRect(),
        [height_r4, width_r4] = [ undefined, undefined ],
        [posiçao_r4_x, posiçao_r4_y] = [undefined, undefined ];
            
        y2 - y1 > 0 ? 
        [ posiçao_r4_x, posiçao_r4_y, width_r4 ] = [ (x2_parent - w2*0.5), y2 + 2*h2, (x2 + w2*0.5) - (x2_parent - w2*0.5) ] : 
        [ posiçao_r4_x, posiçao_r4_y, width_r4 ] = [ (x1_parent - w1*0.5), y2 - h2, (x1_parent - w1*0.5) - (x2 + w2*0.5) ];
            
        deslocar_ligar_2(r4, posiçao_r4_x, posiçao_r4_y, height_r4, width_r4);
        r4_pos = r4.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r5_pos = r5.getBoundingClientRect(),
        [height_r5, width_r5] = [np(y2-y1)+(h1+h2), undefined],
        [posiçao_r5_x, posiçao_r5_y] = [ x1 + w1*0.5, y2 - h2 ];

        //se e2 está abaixo de e1 -> r5_d1 ou se e2 está acima de e1 -> r5_d2 
        y2 - y1 > 0 ?
        //r5_d1 
        [ posiçao_r5_x, posiçao_r5_y, height_r5 ] = [ x2 + w2*0.5, y2 + h2, (y2+2*h2) - (y2+h2) + 0.25*vw ] : 
        //r5_d2
        [ posiçao_r5_x, posiçao_r5_y, height_r5 ] = [ x2 + w2*0.5, y2 - h2, (y2) - (y2-h2) ];

        deslocar_ligar_2(r5, posiçao_r5_x, posiçao_r5_y, height_r5, width_r5);
        r5_pos = r5.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------        

    },
    açao_typeEntrada4_c2 : (r1,r2,r3) => {
    
        console.log("As entradas foram definidas corretamente ... ")

//-----------------------------------------------------------------------------------------------------        

        let 
        r1_pos = r1.getBoundingClientRect(),
        [height_r1, width_r1] = [np(y2-y1)+h2, undefined],
        [posiçao_r1_x, posiçao_r1_y] = [ x1 + w1*0.5, y2 - h2 ];

        y2 - y1 > 0 ? 
        [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y1 + h1, y1+2*h1 - y1+h1  ] :
        [ posiçao_r1_x, posiçao_r1_y, height_r1 ] = [ x1 + w1*0.5, y2 + 2*h2, (y1 - (y2 + 2*h2)) ];

        deslocar_ligar_2(r1, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        r1_pos = r1.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, y2 - h2];

        y2 - y1 > 0 ? 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x2 + w2*0.5, y1 + 2*h1, np(dx - w2*0.5 + w1*0.5) ] : 
        [ posiçao_r2_x, posiçao_r2_y, width_r2 ] = [ x1 + w1*0.5, y2 + 2*h2, np(dx - w1*0.5 + w2*0.5) ] ;
        
        x2 - x1 < 0 ? [ posiçao_r2_x ] = [ x2 + w2*0.5 ] : console.log("e1 esta atrás de e2");

        deslocar_ligar_2(r2, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        r2_pos = r2.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos = r3.getBoundingClientRect(),
        [height_r3, width_r3] = [ (y2 + h2) - y2, undefined ],
        [posiçao_r3_x, posiçao_r3_y] = [x2 + w2*0.5, y2 - h2 ];

        y2 - y1 > 0 ? 
        [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x2 + w2*0.5, y2 + h2, ((y2 + h2) - y2) + 0.25*vw] : 
        [ posiçao_r3_x, posiçao_r3_y, height_r3 ] = [ x2 + w2*0.5, y2 + h2, ((y2 + h2) - y2) + 0.25*vw] ;

        deslocar_ligar_2(r3, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        r3_pos = r3.getBoundingClientRect();
        
    },

},
    Existe_Vinc_s1 = () => {

        console.log("Existe_Vinc_s1()");
    
            if(objEntrada.typeEntrada1) {
                objEntrada.açao_typeEntrada1(a[0],a[1],a[2]);
                Def_ligaçoes(a[0],a[1],a[2]);   
            } else if (objEntrada.typeEntrada2) {
                objEntrada.açao_typeEntrada2(a[0],a[1],a[2]);
                Def_ligaçoes(a[0],a[1],a[2]);   
            } else if (objEntrada.typeEntrada3) {
                
            } else if (objEntrada.typeEntrada4) {    
                y2-y1 > 0 ? 
                objEntrada.açao_typeEntrada4_c1(a[0],a[1],a[2],a[3],a[4]) :
                objEntrada.açao_typeEntrada4_c2(a[0],a[1],a[2]) ;
                Def_ligaçoes(a[0],a[1],a[2],a[3],a[4]);   
            } else if (objEntrada.ponto_ligaçao.codiçao[1]) {

                let grupo_fios = e1.vinculo.ligaçoes ;

                for ( const fios of grupo_fios ) {

                    //console.log(fios,grupo_fios);
                    if(fios.vinculo === e2) {
                        objEntrada.ponto_ligaçao.açao[1](fios.array[0],fios.array[1],fios.array[2]);
                        //fios.array = [fios.array[0],fios.array[1],fios.array[2]];
                        break;
                    }
                    /*
                    for ( let fio of fios ) {
                        console.log(fio);
                        objEntrada.açao_typeEntrada2(fio.element[0],fio.element[1],fio.element[2]);
                    }
       
                    console.log(a);
        
                    for(let r of a) {
                        //redefinir_dimensoes(r)
                        (r === undefined) ? console.log(r + " não está definido") : console.log(r + " está definido");
                    }
*/
        
                }
/*
/*
                for(var i = 0 ; i < grupo_fios.length ; i++) {
                    var fios = grupo_fios[i] ;
                    Def_ligaçoes(fios);
                    if (i + 1 === grupo_fios.length) {
                        break;
                    }

                }
                */
/*                
                for ( ligaçao of array_ligaçoes ) {
                    Def_ligaçoes(ligaçao);
                }
*/
            } 

        
    },
    Existe_Vinc_s2 = () => {

        console.log("Existe_Vinc_s2()")  

        if(objEntrada.typeEntrada1) {

            let
            [reta_vertical_1, reta_horizontal_1, reta_vertical_2] = 
            [
                gerarReta_vertical("v_1" + nomeRelacional, nomeRelacional), 
                gerarReta_horizontal("h_1" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_2" + nomeRelacional, nomeRelacional)
            ];
            objEntrada.açao_typeEntrada1(reta_vertical_1.element,reta_horizontal_1.element,reta_vertical_2.element);
            Def_ligaçoes(reta_vertical_1.element,reta_horizontal_1.element,reta_vertical_2.element, undefined, undefined);

        } else if (objEntrada.typeEntrada2) {

            let
            [reta_vertical_1, reta_horizontal_1, reta_vertical_2] = 
            [
                gerarReta_vertical("v_1" + nomeRelacional, nomeRelacional), 
                gerarReta_horizontal("h_1" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_2" + nomeRelacional, nomeRelacional)
            ];
            objEntrada.açao_typeEntrada2(reta_vertical_1.element,reta_horizontal_1.element,reta_vertical_2.element);
            Def_ligaçoes(reta_vertical_1.element,reta_horizontal_1.element,reta_vertical_2.element, undefined, undefined);
            
        } else if (objEntrada.typeEntrada3) {

            let
            [reta_vertical_1, reta_horizontal_1, reta_vertical_2, reta_horizontal_2, reta_vertical_3] = 
            [
                gerarReta_vertical("v_1" + nomeRelacional, nomeRelacional), 
                gerarReta_horizontal("h_1" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_2" + nomeRelacional, nomeRelacional),
                gerarReta_horizontal("h_2" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_3" + nomeRelacional, nomeRelacional)

            ];
            
        } else if (objEntrada.typeEntrada4) {

            let
            [reta_vertical_1, reta_horizontal_1, reta_vertical_2, reta_horizontal_2, reta_vertical_3] = 
            [
                gerarReta_vertical("v_1" + nomeRelacional, nomeRelacional), 
                gerarReta_horizontal("h_1" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_2" + nomeRelacional, nomeRelacional),
                gerarReta_horizontal("h_2" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_3" + nomeRelacional, nomeRelacional)

            ];
            
            y2-y1 > 0 ? 
            objEntrada.açao_typeEntrada4_c1(reta_vertical_1.element, reta_horizontal_1.element, reta_vertical_2.element, reta_horizontal_2.element, reta_vertical_3.element) :
            objEntrada.açao_typeEntrada4_c2(reta_vertical_1.element, reta_horizontal_1.element, reta_vertical_2.element);

            Def_ligaçoes(reta_vertical_1.element, reta_horizontal_1.element, reta_vertical_2.element, reta_horizontal_2.element, reta_vertical_3.element);
            
        } else if (objEntrada.ponto_ligaçao.codiçao[1]) {

            let
            array,
            [reta_vertical_1, reta_horizontal_1, reta_vertical_2] = 
            [
                gerarReta_vertical("v_1" + nomeRelacional, nomeRelacional), 
                gerarReta_horizontal("h_1" + nomeRelacional, nomeRelacional),
                gerarReta_vertical("v_2" + nomeRelacional, nomeRelacional)
            ];
            array = [reta_vertical_1.element, reta_horizontal_1.element, reta_vertical_2.element] ;
            objEntrada.açao_typeEntrada2(reta_vertical_1.element,reta_horizontal_1.element,reta_vertical_2.element);
            Def_ligaçoes(array);
            
        } 

    };
    
//-----------------------------------------------------------------------------------------------------
    let Existe_Vinc = (e1.vinculo.state === true && e2.vinculo.state === true);

    Existe_Vinc ? Existe_Vinc_s1() : Existe_Vinc_s2() ;
//-----------------------------------------------------------------------------------------------------

    fgs.Remover_class(Ligar_obj.arg1,"entrada1_ativada");
    fgs.Remover_class(Ligar_obj.arg2,"entrada2_ativada");
    Ligar_obj.arg1 = undefined;
    Ligar_obj.arg2 = undefined;

    } else {

        console.log("As entradas não foram definidas corretamente e estão uma em cima da outra ... ")

    }

}

const analisar_vinculoId = (ponto_ligacao_1,ponto_ligacao_2) => {

    for ( const ponto_ligacao of ponto_ligacao_1.vinculo.id ) {
        if(ponto_ligacao === ponto_ligacao_2) {
            return true;
        }
    }

}

const analisar_ligamentoPartida = (ponto_ligacao_1) => {

    var i = 0;
    for ( const ponto_ligacao of ponto_ligacao_1.vinculo.ligamento_partida ) {
        if(ponto_ligacao.partida === ponto_ligacao_1) {
            return true;
            break;
        } 

        i = i+1 ;
    }

    if(ponto_ligacao_1.vinculo.ligamento_partida.length === i + 1) {
        return false ;
    }

}

const analisar_ligamentoPartida_2 = (ponto_ligacao_1,ponto_ligacao_2) => {

    for ( const ponto_ligacao of ponto_ligacao_1.vinculo.ligamento_partida ) {
        
        if ( ponto_ligacao.partida === ponto_ligacao_1 || ponto_ligacao.partida === ponto_ligacao_2 ) {
            return ponto_ligacao;
        }
    }

}