let Retas = {};

class Reta {

        constructor (e, p, className, id, dto, x, y, ud, w, h) {

            let pontoInicial_vertical;
            this.typeElement = e;
            this.pai = document.querySelector(p);
            this.class = className;
            this.id = id;
            this.element = document.createElement(this.typeElement);

            if (ud === undefined) {

                console.log("Unidade não definida")
                this.unidadeDeslocamento = px;

            } else {

                this.unidadeDeslocamento = ud;

            }

            
            if (w === undefined) {

                console.log("Largura não definida")

            } else {

                this.width = w;
                this.element["style"]["width"] = this.width + ud;

            }

            if (h === undefined) {

                console.log("altura não definida")
                pontoInicial_vertical = false

            } else {

                pontoInicial_vertical = true 
                this.height = h;
                this.element["style"]["height"] = this.height + ud;

            }


            if (dto === undefined) {

                console.log("deslocamento para um dado ponto em viewPort não foi definido")

                if (pontoInicial_vertical) {

                    let y = parseInt( splitL(this.element["style"]["height"],"v") );
                    this.deslocamento_to = fgs.$("#Px1Py"+y)

                } else {

                    this.deslocamento_to = fgs.$("#Px1Py"+1)

                }
                
                this.Deslocar_to = () => {

                    Deslocar_xy(this.element,this.deslocamento_to);

                }

            } else {

                this.deslocamento_to = dto;
                this.Deslocar_to = () => {

                    Deslocar_xy(this.element,this.deslocamento_to);

                }

            }


            if (x === undefined) {

                console.log("deslocamento horizontal não foi definido")
                this.x = 0;

            } else {

                this.x = x;

            }

             if (y === undefined) {

                 console.log("deslocamento horizontal não foi definido")
                 this.y = 0;

             } else {

                 this.y = y;

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
