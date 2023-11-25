const iteration_1 = (valor_inicial,valo_final,ação_repetida) => {
    for( i=valor_inicial ; i<=valo_final ; i++) {
       ação_repetida(i); 
    }
}
const iteration_2 = (valor_inicial,valor_final,ação_repetida) => {
    var i = valor_inicial, atualizar, analise_condiçao;

    atualizar = () => {
        return i+1;
    }

    analise_condiçao = () => {
        if(i >= valor_final) {

            console.log("O laço terminou")
    
        } else {
    
            ação_repetida(i);
            i=atualizar();
            analise_condiçao();
    
        }
    }

    analise_condiçao();

}

