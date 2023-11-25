class Transistor2  {
    /*
    
    transistor = {
    
        typeTransitor: type string,
        entradaFinal: type obj,
        entradaInicial: type obj,
        Divtext: type obj,
    
    }
    
    Ex :
    
    
    transistor_Identificaçao = {
    
        typeElement: undefined,
        pai: undefined,
        id: "transistor_basic_x",
        className: undefined,
        styleText: undefined,
    
    };
    
    transistor_Geometria = {
    
        x: undefined,
        y: undefined,
        height: undefined,
        width: undefined,
        DeslocamentoTo : undefined,
        pontoInicial: undefined,
        unidadeDeslocamento: undefined,
    
    };
    
    transistor_Event = {
    
        events: [],
        function_events: [],
    
    };
    
    transistor_transistor = {
    
        typeTransitor: "basic",
        entradaFinal: undefined,
        entradaInicial: undefined,
        entradaText: undefined,
    
    };
    
    */
    
    //-------------------------------------------------------------------------------------------
    
    constructor(Identificaçao_arg, Geometria, Event, Atributos, Transistor) {
    
        this.def_Geometria = () => {
        
            this.Geometria = Geometria;
    
            if(this.Geometria !== undefined) {
    
            if (this.Geometria.width === undefined || this.Geometria.width === 0 || this.Geometria.width === null) {
    
                console.log("Largura não está definida")
                //this.Geometria.width = 0;
    
            } else {
    
                console.log("largura")
                this.Geometria.width = this.Geometria.width;
                this.element["style"]["width"] = this.Geometria.width + this.Geometria.unidadeDeslocamento;
                console.log(this.element["style"]["width"])
    
            }
    
            if (this.Geometria.height === undefined || this.Geometria.height === 0 || this.Geometria.height === null) {
    
                console.log("A altura não está definida");
                //this.Geometria.height = 0;
    
            } else {
    
                this.Geometria.height = this.Geometria.height;
                this.element["style"]["height"] = this.Geometria.height + this.Geometria.unidadeDeslocamento;
                console.log(this.element["style"]["height"]);
    
            }
    
            def_Deslocamento();
    
        } else {
    
            console.log("O objeto Geometria não foi definido");
    
        }
    
    }
    
        let def_Deslocamento = () => {
            
            let 
            def_unidadeDeslocamento = () => {
    
                if (this.Geometria.unidadeDeslocamento === undefined) {
    
                    console.log("A unidade de deslocamento não foi definida");
                    this.Geometria.unidadeDeslocamento = "px";
    
                } else {
    
                    this.Geometria.unidadeDeslocamento = this.Geometria.unidadeDeslocamento;
    
                }
    
            },
            def_posiçaoHorizontal = () => {
    
                if (this.Geometria.x === undefined) {
    
                    console.log("deslocamento horizontal não foi definido")
                    this.Geometria.x = 0;
    
                } else {
    
                    this.Geometria.x = this.Geometria.x;
    
                }
    
            },
            def_posiçaoVertical = () => {
    
                 if (this.Geometria.y === undefined) {
    
                     console.log("deslocamento vertical não foi definido")
                     this.Geometria.y = 0;
    
                 } else {
    
                     this.Geometria.y = this.Geometria.y;
    
                }
    
            };
    
            this.Deslocar_to = (e) => {
    
                Deslocar_xy(this.element,e);
    
            }
            this.Deslocar = (x,y) => {
    
                Deslocar(this.element,x,y);
    
            }
    
            if (this.Geometria.DeslocamentoTo === undefined || this.Geometria.DeslocamentoTo === 0 || this.Geometria.DeslocamentoTo === null) {
    
                this.Geometria.DeslocamentoTo  = this.Geometria.pontoInicial ;
    
                def_unidadeDeslocamento();
                def_posiçaoHorizontal();
                def_posiçaoVertical();
    
            } else {
    
                def_unidadeDeslocamento();
                def_posiçaoHorizontal();
                def_posiçaoVertical();
    
            }
    
        }    
    
        this.def_events = () => {
    
            this.Event = Event;
    
            if(this.Event !== undefined) {
    
                if (this.Event.events === undefined) {
    
                    console.log("evento não foi definido")
    
                } else {
    
                for(var i = 0 ; i < this.Event.events.length ; i++) {
    
                    this.element.addEventListener(this.Event.events[i],this.Event.function_events[i]);
    
                }
    
            }
    
        }
    
    }
    
    this.def_Atributos = () => {
    
        this.Atributos = Atributos;
        if(this.Atributos === undefined) {
    
            console.log("O objeto ATRIBUTO está indefinido !!");
    
        } else {
    
            for(var i = 0 ; i < this.Atributos.nomes.length ; i++) {
        
                console.log("Definindo atributos");
                this.element.setAttribute(this.Atributos.nomes[i],this.Atributos.valores[i]);
    
            }
    
        }
    
    }

    this.def_entradas = () => {

        if(this.transistor.typeTransistor === "ligarDesligar") {

            this.transistor.entradaFinal = entrada_final_class(this.Identificaçao.id,this.element,"entrada_final_ligar");
            this.transistor.entradaText = entrada_text(this.Identificaçao.id,this.element);
            this.transistor.entradaInicial_1 = entrada_inicial_class(this.Identificaçao.id,this.element,"entrada_inicial_ligar");
    
            fgs.new_text(this.transistor.entradaText.element, this.transistor.text);
            fgs.new_text(this.transistor.entradaFinal.element, "F");
            fgs.new_text(this.transistor.entradaInicial_1.element, "I");

    }  else if ( this.transistor.typeTransistor === "and" ) {
        
        this.transistor.entradaFinal = entrada_final_class(this.Identificaçao.id,this.element,"entrada_final_and");
        this.transistor.entradaText = entrada_text(this.Identificaçao.id,this.element);
        this.transistor.entradaInicial_1 = entrada_inicial_class(this.Identificaçao.id + "_1",this.element,"entrada_inicial entrada_inicial_1");
        this.transistor.entradaInicial_2 = entrada_inicial_class(this.Identificaçao.id + "_2",this.element,"entrada_inicial entrada_inicial_2");

        fgs.new_text(this.transistor.entradaText.element, this.transistor.text);
        fgs.new_text(this.transistor.entradaFinal.element, "F");
        fgs.new_text(this.transistor.entradaInicial_1.element, "I");
        fgs.new_text(this.transistor.entradaInicial_2.element, "I");

    }  else if ( this.transistor.typeTransistor === "or" ) {
        
        this.transistor.entradaFinal = entrada_final_class(this.Identificaçao.id,this.element,"entrada_final_or");
        this.transistor.entradaText = entrada_text(this.Identificaçao.id,this.element);
        this.transistor.entradaInicial_1 = entrada_inicial_class(this.Identificaçao.id + "_1",this.element,"entrada_inicial entrada_inicial_1");
        this.transistor.entradaInicial_2 = entrada_inicial_class(this.Identificaçao.id + "_2",this.element,"entrada_inicial entrada_inicial_2");

        fgs.new_text(this.transistor.entradaText.element, this.transistor.text);
        fgs.new_text(this.transistor.entradaFinal.element, "F");
        fgs.new_text(this.transistor.entradaInicial_1.element, "I");
        fgs.new_text(this.transistor.entradaInicial_2.element, "I");

    } else if (this.transistor.typeTransistor === "~") {

        this.transistor.entradaFinal = entrada_final_class(this.Identificaçao.id,this.element,"entrada_final_negaçao");
        this.transistor.entradaText = entrada_text(this.Identificaçao.id,this.element);
        this.transistor.entradaInicial_1 = entrada_inicial_class(this.Identificaçao.id,this.element,"entrada_inicial_negaçao");

        fgs.new_text(this.transistor.entradaText.element, this.transistor.text);
        fgs.new_text(this.transistor.entradaFinal.element, "F");
        fgs.new_text(this.transistor.entradaInicial_1.element, "I");

}
     else {

        this.transistor.entradaFinal = entrada_final_class(this.Identificaçao.id,this.element,"entrada_final");
        this.transistor.entradaText = entrada_text(this.Identificaçao.id,this.element);
        this.transistor.entradaInicial_1 = entrada_inicial_class(this.Identificaçao.id,this.element,"entrada_inicial");

        fgs.new_text(this.transistor.entradaText.element, this.transistor.text);
        fgs.new_text(this.transistor.entradaFinal.element, "F");
        fgs.new_text(this.transistor.entradaInicial_1.element, "I");

    }

}
    
    this.defs = () => {
    
        this.def_Geometria();
        this.def_events();
        this.def_Atributos();
    
    } 

    this.transistor = Transistor;
    this.Identificaçao = Identificaçao_arg;
    
    if ( this.transistor.typeTransistor === "basic" ) {
    
                    this.Identificaçao.typeElement = "div";
                    this.element = document.createElement(this.Identificaçao.typeElement);
                    this.Identificaçao.pai = document.querySelector(".transistors");
                    this.Identificaçao.className = "transistor basic flex-column " + Identificaçao_arg.className;
                    this.element.style.cssText = this.Identificaçao.styleText; 
                    this.transistor.text = "Basic";
                    this.defs();
    
                    //gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);
    
                } else if ( this.transistor.typeTransistor === "ligarDesligar" ) {
    
                    this.Identificaçao.typeElement = "div";
                    this.element = document.createElement(this.Identificaçao.typeElement);
                    this.Identificaçao.pai = document.querySelector(".transistors");
                    this.Identificaçao.className = "transistor ligar_desligar off flex-column droptarget " + Identificaçao_arg.className;
                    this.element.style.cssText = this.Identificaçao.styleText;
                    this.transistor.text = "Off";
                    this.defs();
    
                    //gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);
                } 
                 else if ( this.transistor.typeTransistor === "and" ) {
    
                    this.Identificaçao.typeElement = "div";
                    this.element = document.createElement(this.Identificaçao.typeElement);
                    this.Identificaçao.pai = document.querySelector(".transistors");
                    this.Identificaçao.className = "transistor and flex-column " + Identificaçao_arg.className;
                    this.element.style.cssText = this.Identificaçao.styleText;
                    this.transistor.text = "AND";
                    this.defs();
    
                    //gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);
    
                } else if ( this.transistor.typeTransistor === "or" ) {
    
                    this.Identificaçao.typeElement = "div";
                    this.element = document.createElement(this.Identificaçao.typeElement);
                    this.Identificaçao.pai = document.querySelector(".transistors");
                    this.Identificaçao.className = "transistor or flex-column " + Identificaçao_arg.className;
                    this.element.style.cssText = this.Identificaçao.styleText;
                    this.transistor.text = "OR";
                    this.defs();
    
                    //gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);
    
                } else if ( this.transistor.typeTransistor === "~" ) {
    
                    this.Identificaçao.typeElement = "div";
                    this.element = document.createElement(this.Identificaçao.typeElement);
                    this.Identificaçao.pai = document.querySelector(".transistors");
                    this.Identificaçao.className = "transistor negaçao flex-column " + Identificaçao_arg.className;
                    this.element.style.cssText = this.Identificaçao.styleText;
                    this.transistor.text = "~";
                    this.defs();
    
                    //gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);
    
                } 
    
                this.Create = () => {

                    this.element.className = this.Identificaçao.className;
                    this.element.id = this.Identificaçao.id;
                    this.Identificaçao.pai.append(this.element); 
                    this.def_entradas();
    
                }
//-------------------------------------------------------------------------------------------            
    
            }
    
        }
    

    
