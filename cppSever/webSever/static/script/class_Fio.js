let Fios = {};

class Fio {

        constructor (fonte_partida,fonte_chegada,id, dto, x, y, ud, w) {

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
                    this.def_DeslocamentoTo = fgs.$("#Px15Py1");
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

            if (fonte_partida !== undefined && fonte_chegada !== undefined) {

                this.typeElement = "div";
                this.pai = document.querySelector(".Fios");
                this.class = "fio desligado";
                posiçoes1 = fonte_partida.getBoundingClientRect();
                posiçoes2 = fonte_chegada.getBoundingClientRect();

                if( posiçoes2.left - posiçoes1.left ===  posiçoes1.width )  {

                }
                /*
                this.id = id;
                this.element = document.createElement(this.typeElement);
                */

                defs();

            } else {

                
            } 
        }
 
    } 
