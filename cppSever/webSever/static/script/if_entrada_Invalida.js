const if_entrada_Invalida = (e) => {

    if(fgs.Existe_Class(e,"entrada") || fgs.Existe_Class(e,"ponto_ligacao_ligar")) {

        return true;

    } else {

        return false;
        
    }

}
