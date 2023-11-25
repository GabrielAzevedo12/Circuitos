const Def_ElementoHtml = () => {
  for( const x of document.getElementsByClassName("ElementoHtml")) {  
        console.log(x)
        x.vinculo = {
            state : false,
            id : [],
            ligaçoes : [],
            ligamento_partida : [],
            boolean: false,
        };
        console.log(x.vinculo)
        x.addEventListener('click', (e) => { 
         onclick_ponto_ligacao(e);
        }) 
  }
}

//class : "class_teste_3 ElementoHtml ponto_ligacao_ligar off zIndex flex-row deslocamentoPeloMouse"
 
