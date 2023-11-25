let Transistors = {};

class Transistor {

        constructor (typeTransistor,id, dto, x, y, ud, w) {

            let def_unidadeDeslocamento = () => {

                if (ud === undefined) {
    
                    console.log("Unidade não definida")
                    this.unidadeDeslocamento = px;
    
                } else {
    
                    this.unidadeDeslocamento = ud;
    
                }
    
            }
    
            let def_width = () => {

                    if (w === undefined || w === 0 || w === null) {
    
                        console.log("Largura não definida")
                        this.w = 10;
        
                    } else {
        
                        this.width = w;
                        this.element["style"]["width"] = this.width + ud;
        
                    }
    
            }
    
            let def_DeslocamentoTo = () => {
    
                if (dto === undefined || dto === 0 || dto === null) {
    
                    console.log("deslocamento para um dado ponto em viewPort não foi definido");
                    this.def_DeslocamentoTo = fgs.$("#Px1Py5");
                    this.Deslocar_to = () => {

                        Deslocar_xy(this.element,this.deslocamento_to);
    
                    }
    
                } else {
    
                    this.deslocamento_to = dto;
                    this.Deslocar_to = () => {
    
                        Deslocar_xy(this.element,this.deslocamento_to);
    
                    }
    
                }
    
            }    
    
            let def_posiçaoHorizontal = () => {
    
                if (x === undefined) {
    
                    console.log("deslocamento horizontal não foi definido")
                    this.x = 0;
    
                } else {
    
                    this.x = x;
    
                }
    
            }
    
            let def_posiçaoVertical = () => {
    
                 if (y === undefined) {
    
                     console.log("deslocamento vertical não foi definido")
                     this.y = 0;
    
                 } else {
    
                     this.y = y;
    
                }
    
            }

            let defs = () => {

                def_unidadeDeslocamento();
                def_width();
                def_DeslocamentoTo();
                def_posiçaoHorizontal();
                def_posiçaoVertical();

            }

            if (typeTransistor === "basic") {

                this.typeElement = "div";
                this.pai = document.querySelector(".transistors");
                this.class = "transistor basic flex-column";
                this.id = id;
                this.element = document.createElement(this.typeElement);
                this.element.append(" Basic ");

                defs();
                gerarLigar("ligarTo_" + id, fgs.$("#Px1Py1"), this.element);

            } else if (typeTransistor === "and" ) {

                this.typeElement = "div";
                this.pai = document.querySelector(".transistors");
                this.class = "transistor and";
                this.id = id;
                this.element = document.createElement(this.typeElement);
                defs();

            } else if ( typeTransistor === "or" ) {

                this.typeElement = "div";
                this.pai = document.querySelector(".transistors");
                this.class = "transistor or";
                this.id = id;
                this.element = document.createElement(this.typeElement);
                defs();

            } 

            this.Create = () => {

                this.element.className = this.class;
                this.element.id = this.id;
                this.pai.append(this.element);

            }

            this.Deslocar = () => {
                
                this.element.style.top = this.y + this.unidadeDeslocamento;
                this.element.style.left = this.x + this.unidadeDeslocamento;

            }

        }
 
    } 
