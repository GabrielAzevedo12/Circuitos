//Funções Para Manipular elementos html

console.log('Foi iniciado o arquivo Main.js');

const fgs = {

Adicionar_class : (e, name_class) => {
  if(e) {
    e.classList.add(name_class);
  }
},

Remover_class : (e, name_class) => {
  if(e) {
    e.classList.remove(name_class);
  }
},

Existe_Class : (e, name_class)  => {

  let exibir = false;
  if (e) {
    for(var x of e.classList) {
    
      if (exibir) {console.log(x);}
  
      if(x === name_class) {
  
          return true;
          break;
   
      } else {
  
          continue;
  
      }
  
   }
  }

},

new_text : (e, text) => {
  e.textContent = text;
},

$ : (NomeDaIndent) => {
  /*O argumento é obrigatoriamento uma string*/
  if (NomeDaIndent && NomeDaIndent !== '' && NomeDaIndent !== '#' && NomeDaIndent !== '.') {
    var ElementoHtml = document.querySelector(NomeDaIndent); // BOM.
    return ElementoHtml;
  }

},

S1 : (e, tipo_style, valor_style) => {

  let el = document.querySelector(e);
  el["style"][tipo_style] = valor_style;

},

S2 : (e, tipo_style, valor_style) => {

  e["style"][tipo_style] = valor_style;

},

def_dimensoes : (e,w,h) => {
  e["style"]["width"] = w;
  e["style"]["height"] = h;
},

Analise_class_p_2 : (name_class, solucoes, cond) => {
  if (cond === name_class['1'] || cond === null) {
    console.log('Existe o elemento ' + name_class['1']);
    solucoes['1']();
  } else if (cond === name_class['2']) {
    console.log('Existe o elemento ' + name_class['2']);
    solucoes['2']();
  } else if (cond === name_class['3']) {
    console.log('Existe o elemento ' + name_class['3']);
    solucoes['3']();
  } else if (cond === name_class['4']) {
    console.log('Existe o elemento ' + name_class['4']);
    solucoes['4']();
  } else if (cond === name_class['5']) {
    console.log('Existe o elemento ' + name_class['5']);
    solucoes['5']();
  }
},

}

const exibir = (e) => {

  if (fgs.Existe_Class(e,"displayFalse")) {
    fgs.Remover_class(e,"displayFalse");
    fgs.Adicionar_class(e,"displayTrue");
  }

}

const esconder = (e) => {
  if (fgs.Existe_Class(e,"displayTrue")) {
    fgs.Remover_class(e,"displayTrue");
    fgs.Adicionar_class(e,"displayFalse");
}

}

const ElementMouseMove = {
  e: undefined
}

document.body.onmousemove = (event) => {
  ElementMouseMove.e = event;
}