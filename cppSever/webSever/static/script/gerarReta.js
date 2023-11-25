let GerarReta = fgs.$("#GerarRetas");
class Button {

        constructor (e, p, className, id, t, event, function_event) {

            this.typeElement = e;
            this.pai = document.querySelector(p);
            this.class = className;
            this.id = id;
            this.text = t;
            this.element = document.createElement(this.typeElement);
            if (event === undefined) {

                console.log("evento não foi definido")

            } else {

            this.events = [ event, function_event ] ;
            for(var i = 0 ; i <= event.length ; i++) {

                this.element.addEventListener(event[i],function_event[i]);

            }

            }

            this.Create = () => {

                this.element.className = this.class;
                this.element.id = this.id;
                fgs.new_text(this.element,this.text);
                this.pai.append(this.element);
                

            }

        }
 
}

let GerarReta_obj = {
    
    "display" : {

        "vertical" : false,
        "horizontal" : false, 

    }

}

let GerarReta_createInherint = () => {

 let div_Retas, vertical, horizontal;

    div_Retas = fgs.$("#div_Retas");
   
    vertical = new Button("div","#div_lista_retas","filho_lista_retas","vertical","Vertical");
    horizontal = new Button("div","#div_lista_retas","filho_lista_retas","horizontal","Horizontal");

    vertical.Create();
    horizontal.Create();

}

GerarReta_createInherint();

GerarReta.onclick = () => {

    let GerarRetas  = fgs.$("#GerarRetas"), div_lista_retas = fgs.$("#div_lista_retas"), vertical  = fgs.$("#vertical"), horizontal  = fgs.$("#horizontal");

    if ( fgs.Existe_Class(div_lista_retas,"displayFalse") ) {

        fgs.Adicionar_class(GerarRetas,"buttons_true");
        fgs.Remover_class(GerarRetas,"buttons_false");
        exibir(div_lista_retas);
   
    } else {

        fgs.Adicionar_class(GerarRetas,"buttons_false");
        fgs.Remover_class(GerarRetas,"buttons_true");
        esconder(div_lista_retas);

    }

}



