class ElementG {
    /*
    Definições : 
    
    * Indentificaçao = {
    
        id: nome único,
        class: c,
    
    }
    * Geometria = {
    
        x: r1,
        y: r2,
        height: r1,
        width: r2,
        pontoInicial: elementHtml,
        unidadeDeslocamento: px ou vm ou vh ... ,
    
    }
    * Event = {
    
        events: [e1,e2, ... en],
        function_events: [f1,f2, ... , fn],
    
    };
    */
        constructor (Identificaçao, Geometria, Event, Atributos) {

            let exibir = false;
            this.def_Geometria = () => {
    
                this.Geometria = Geometria;
    
                if(this.Geometria !== undefined) {
    
                if (this.Geometria.width === undefined || this.Geometria.width === 0 || this.Geometria.width === null) {
                    
                    if(exibir) {
                        console.log("Largura não está definida")
                    }
                    this.Geometria.width = 10;
    
                } else {
    
                    this.Geometria.width = this.Geometria.width;
                    this.element["style"]["width"] = this.Geometria.width + this.Geometria.unidadeDeslocamento;
    
                }
    
                if (this.Geometria.height === undefined || this.Geometria.height === 0 || this.Geometria.height === null) {
    
                    if(exibir) {
                        console.log("A altura não está definida");
                    }
                    this.Geometria.height = 10;
    
                } else {

                    this.Geometria.height = this.Geometria.height;
                    this.element["style"]["height"] = this.Geometria.height + this.Geometria.unidadeDeslocamento;
    
                }
    
                def_Deslocamento();
    
            } else {
                if (exibir) {
                    console.log("O objeto Geometria não foi definido");
                }
    
            }
    
    }
    
            let def_Deslocamento = () => {
                
                let 
                def_unidadeDeslocamento = () => {

                    if (this.Geometria.unidadeDeslocamento === undefined) {

                        if(exibir) {
                            console.log("A unidade de deslocamento não foi definida");
                        }
                        this.Geometria.unidadeDeslocamento = "px";
        
                    } else {
        
                        this.Geometria.unidadeDeslocamento = this.Geometria.unidadeDeslocamento;
        
                    }
        
                },
                def_posiçaoHorizontal = () => {

                    if (this.Geometria.x === undefined) {
        
                        if (exibir) {
                            console.log("deslocamento horizontal não foi definido")
                        }
                        this.Geometria.x = 1;
        
                    } else {
        
                        this.Geometria.x = this.Geometria.x;
        
                    }
        
                },
                def_posiçaoVertical = () => {
        
                     if (this.Geometria.y === undefined) {
        
                        if (exibir) {
                            console.log("deslocamento vertical não foi definido")
                        }
                         this.Geometria.y = 1;
        
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
    
                        if(exibir) {
                            console.log("evento não foi definido")
                        }
        
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
    
                if (exibir) {
                    console.log("O objeto ATRIBUTO está indefinido !!");
                }
    
            } else {
    
                for(var i = 0 ; i < this.Atributos.nomes.length ; i++) {
            
                    if (exibir) {
                        console.log("Definindo atributos");
                    }
                    this.element.setAttribute(this.Atributos.nomes[i],this.Atributos.valores[i]);
    
                }
    
                
        }
    
        }

        this.defs = () => {

            this.def_Geometria();
            this.def_events();
            this.def_Atributos();

        }
        
        if (Identificaçao.typeElement !== undefined) {
    
                this.Identificaçao = Identificaçao;
                this.element = document.createElement(this.Identificaçao.typeElement);
                this.element.style.cssText = this.Identificaçao.styleText;
                this.defs();
    
                this.Create = () => {
    
                    this.element.className = this.Identificaçao.className;
                    this.element.id = this.Identificaçao.id;
                    this.Identificaçao.pai.append(this.element);      
            
            }
                
        } else {

            this.Identificaçao = Identificaçao;
            this.defs();
            if (exibir) {
                console.log("O tipo de elemento não foi definido");
            }

        }
    
    
    }
    
    }
    
    
    