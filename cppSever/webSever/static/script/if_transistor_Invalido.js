const if_transistor_Invalido = (e) => {

    if(fgs.Existe_Class(e,"text_transistor") || fgs.Existe_Class(e,"entrada") || fgs.Existe_Class(e,"Caixa_xy")) {
        return false;
    } else {
        return true;
    }

}