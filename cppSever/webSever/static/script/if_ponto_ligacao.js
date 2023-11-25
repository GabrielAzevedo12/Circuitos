const if_ponto_ligaçao = (e) => {
    var instrução;
    console.log("if_ponto_ligaçao");
    red_ligar_3(e);
    for ( const ponto_ligacao of document.getElementsByClassName("ponto_ligacao_ligar") ) {

        let cond = ( ponto_ligacao !== e ) ;
        cond ? red_ligar_3(ponto_ligacao) : instrução = 0 ;

    }
}
