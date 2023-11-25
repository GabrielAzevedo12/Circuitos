const analise_transistors = (entrada_andOr_final) => {

    /*
    if(fgs.Existe_Class(e,"entrada")) {
//---------------------------------------------------------------------
        if(e.vinculo.state === true) {
//---------------------------------------------------------------------
            if ( fgs.Existe_Class(entrada_inicial_pai,"off") ) {
                gerarCorrente(e);
            } else {
                resistirCorrente(e);
    
            }
//---------------------------------------------------------------------
        }
//---------------------------------------------------------------------
    } else {
        console.log("Não é uma entrada");
    }
*/
    let entrada_vinculo = entrada_andOr_final.vinculo.id;

    if(fgs.Existe_Class(entrada_vinculo,"entrada_inicial")) {
        let parent = entrada_vinculo.parentElement,
        s1_c1 = () => {
            if (entrada_andOr_final.vinculo.boolean) {
                entrada_vinculo.vinculo.boolean = true;
            } else {
                entrada_vinculo.vinculo.boolean = false;
            }
            if_and(entrada_vinculo);
        },
        s1_c2 = () => {
            console.log("Não é um transistor and");
        },
        s2_c1 = () => {
            if (entrada_andOr_final.vinculo.boolean) {
                entrada_vinculo.vinculo.boolean = true;
            } else {
                entrada_vinculo.vinculo.boolean = false;
            }
            if_or(entrada_vinculo);
        },
        s2_c2 = () => {
            console.log("Não é um transistor or");
        },
        s3_c1 = () => {
            if (entrada_andOr_final.vinculo.boolean) {
                entrada_vinculo.vinculo.boolean = true;
            } else {
                entrada_vinculo.vinculo.boolean = false;
            }
            if_n(entrada_vinculo);
        },
        s3_c2 = () => {
            console.log("Não é um transistor negaçao");
        };

        fgs.Existe_Class(parent,"and") ? s1_c1() : s1_c2();
        fgs.Existe_Class(parent,"or") ?  s2_c1() : s2_c2();
        fgs.Existe_Class(parent,"negaçao") ?  s3_c1() : s3_c2();


    }

}