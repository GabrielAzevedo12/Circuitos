cond_1 = (r1,r2,r3) => {
    
        console.log("As entradas foram definidas corretamente ... ")

//-----------------------------------------------------------------------------------------------------        
        let 
        r1_pos = r1.element.getBoundingClientRect(),
        [height_r1, width_r1] = [dy + 2*h1 - h2, undefined],
        [posiçao_r1_x, posiçao_r1_y] = [x2 + w2*0.5, y2 + h2]; 
            
        deslocar_ligar_2(r1.element, posiçao_r1_x, posiçao_r1_y, height_r1, width_r1);
        r1_pos = r1.element.getBoundingClientRect();
            
//-----------------------------------------------------------------------------------------------------
            
        let 
        r2_pos = r2.element.getBoundingClientRect(),
        [height_r2, width_r2] = [undefined, np(dx - w1*0.5 + w2*0.5)],
        [posiçao_r2_x, posiçao_r2_y] = [x1 + w1*0.5, height_r1 + y2 + h2 - r2_pos.height];

        x2-x1 < 0  ? posiçao_r2_x = x2 + w2*0.5 : console.log("e1 está atrás de e2");

        deslocar_ligar_2(r2.element, posiçao_r2_x, posiçao_r2_y, height_r2, width_r2);
        r2_pos = r2.element.getBoundingClientRect();

//-----------------------------------------------------------------------------------------------------

        let 
        r3_pos,
        [height_r3, width_r3] =[np(posiçao_r2_y - (y1 + h1) + r2_pos.height), undefined],
        [posiçao_r3_x, posiçao_r3_y] = [x1 + w1*0.5, y1 + h1];

        deslocar_ligar_2(r3.element, posiçao_r3_x, posiçao_r3_y, height_r3, width_r3);
        r3_pos = r3.element.getBoundingClientRect()
        
    };
