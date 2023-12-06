//Deslocar Rd_OBJ.parent para o element arrastado 
const if_Redimensionar = (e, eventDrag) => {

    //console.log("Redimensionar");
    if(eventDrag) {
        let 
        [eventDrag_d] = [
                {
                    x: eventDrag.clientX,
                    y: eventDrag.clientY
                }
        ]
    }
    
    if(fgs.Existe_Class(e,"vertical_left")) {

        if( e.getBoundingClientRect().left < Rd_OBJ.parent.getBoundingClientRect().left ) {
            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            largura_nova = Rd_OBJ.parent.getBoundingClientRect().left - e.getBoundingClientRect().right,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
        }

        if( e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().left ) {
            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            largura_nova = Rd_OBJ.parent.getBoundingClientRect().left - e.getBoundingClientRect().right,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
        }

        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);        

    }

    if(fgs.Existe_Class(e,"vertical_right")) {

        if( e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth ) {
            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
        }

        if( e.getBoundingClientRect().left < Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth ) {
            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
        }

        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);

    }

    if(fgs.Existe_Class(e,"horizontal_top")) {

        if( e.getBoundingClientRect().top < Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().top,
            altura_nova = 0.5,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
        }

        if( e.getBoundingClientRect().top > Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().top,
            altura_nova = -1,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
        }

        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
        
    }

    if(fgs.Existe_Class(e,"horizontal_bottom")) {
        
        if( e.getBoundingClientRect().bottom > Rd_OBJ.parent.getBoundingClientRect().bottom + e.clientHeight ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            altura_nova =  e.getBoundingClientRect().top - Rd_OBJ.parent.getBoundingClientRect().bottom,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
        }

        if( e.getBoundingClientRect().bottom < Rd_OBJ.parent.getBoundingClientRect().bottom ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            altura_nova =  e.getBoundingClientRect().bottom - Rd_OBJ.parent.getBoundingClientRect().bottom,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
        }

        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);

    }

    if(fgs.Existe_Class(e,"vertice_topRight")) {
        
        //console.log("vertice_topRight");

        if( (e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth) ) {

            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            //largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura_nova = 0.5,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
                
            }
        
        if( (e.getBoundingClientRect().top < Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight) ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().bottom,
            altura_nova = 0.5,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";

                
            }

        if( (e.getBoundingClientRect().left < Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth) ) {

            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            //largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura_nova = -1,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
                
        }

        if( (e.getBoundingClientRect().top > Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight) ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().bottom,
            altura_nova = -1,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
                
            }
    
        if ( (e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth) && (e.getBoundingClientRect().top < Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight) ) {

            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().bottom,
            altura_nova = 0.5,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";

            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            //largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura_nova = 0.5,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
                
            }

        if( (e.getBoundingClientRect().left < Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth) && (e.getBoundingClientRect().top > Rd_OBJ.parent.getBoundingClientRect().top + e.clientHeight) ) {
            let 
            altura_atual = Rd_OBJ.parent.clientHeight, 
            //altura_nova = Rd_OBJ.parent.getBoundingClientRect().top - e.getBoundingClientRect().bottom,
            altura_nova = -1,
            altura = altura_atual + altura_nova;

            Rd_OBJ.parent['style']['height'] = altura + "px";
            Rd_OBJ.v1["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";
            Rd_OBJ.v2["style"]["height"] = Rd_OBJ.parent.clientHeight + "px";

            let 
            largura_atual = Rd_OBJ.parent.clientWidth, 
            //largura_nova = e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right,
            largura_nova = -1,
            largura = largura_atual + largura_nova;

            Rd_OBJ.parent['style']['width'] = largura + "px";
            Rd_OBJ.v3["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
            Rd_OBJ.v4["style"]["width"] = Rd_OBJ.parent.clientWidth + "px";
                
            }           

        Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
        Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
        Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
        //Deslocar_posAtual(Rd_OBJ.parent, e.getBoundingClientRect().left - Rd_OBJ.parent.getBoundingClientRect().right, e.getBoundingClientRect().bottom - Rd_OBJ.parent.getBoundingClientRect().top);
        //Deslocar_posAtual(Rd_OBJ.parent, eventDrag.x - Rd_OBJ.parent.getBoundingClientRect().right, eventDrag.y - Rd_OBJ.parent.getBoundingClientRect().top);
        
        }

    if(fgs.Existe_Class(e,"vertice_topLeft")) {
    
            if( e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth ) {
                
            }
        
            Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
            Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
        
        }

    if(fgs.Existe_Class(e,"vertice_bottomRight")) {
    
            if( e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth ) {
                
            }
        
            Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
            Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
        
        }    

    if(fgs.Existe_Class(e,"vertice_bottomLeft")) {
    
            if( e.getBoundingClientRect().left > Rd_OBJ.parent.getBoundingClientRect().right + e.clientWidth ) {
                
            }
        
            Deslocar_posAtual(Rd_OBJ.v1, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v1.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v1.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v2, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.v2.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v2.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.v3, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v3.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().top - Rd_OBJ.v3.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.v4, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.v4.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.v4.getBoundingClientRect().bottom); 
            Deslocar_posAtual(Rd_OBJ.vertice_topLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_topLeft.getBoundingClientRect().left, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topLeft.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_topRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_topRight.getBoundingClientRect().right, (Rd_OBJ.parent.getBoundingClientRect().top - 0.1*window.innerWidth*0.01) - Rd_OBJ.vertice_topRight.getBoundingClientRect().top);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomLeft, Rd_OBJ.parent.getBoundingClientRect().left - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().left, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomLeft.getBoundingClientRect().bottom);
            Deslocar_posAtual(Rd_OBJ.vertice_bottomRight, Rd_OBJ.parent.getBoundingClientRect().right - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().right, Rd_OBJ.parent.getBoundingClientRect().bottom - Rd_OBJ.vertice_bottomRight.getBoundingClientRect().bottom);
        
        }    
        
}