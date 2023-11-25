const 
onclick_entrada_final = (e) => {

    console.log("Está sendo executada a função onclick_entrada_final no elemento : " + e.target);

    if(fgs.Existe_Class(e.target,"entrada_final_ligar")) {
        let
        possuiVinculo = (e.target.vinculo.state === true),
        possuiVinculo_s1 = () => {
            //ligarDesligarEntrada(e);
            console.log("Possui vinculo ... ");
        },
        possuiVinculo_s2 = () => {
            Ligar_obj.Ligar(e.target);
        };

        possuiVinculo ? possuiVinculo_s1() : possuiVinculo_s2() ;

    } else {
        Ligar_obj.Ligar(e.target);
    }

};