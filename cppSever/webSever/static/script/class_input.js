class InputSeleçao {
//constructor (e, p, c, this.Inde.id, this.Geometria.DeslocamentoTo, this.Geometria.x, this.Geometria.y, this.Geometria.u, this.Geometria.width, h)
    constructor (e, p, Identificaçao, Geometria) {

        let def_Dimensoes = () => {

            if (this.Geometria.width === undefined || this.Geometria.width === 0 || this.Geometria.width === null) {

                console.log("Largura não está definida")
                this.Geometria.width = 0;

            } else {

                this.Geometria.width = this.Geometria.width;
                this.element["styleyle"]["width"] = this.Geometria.width + this.Geometria.unidadeDeslocamento;

            }

            if (this.Geometria.height === undefined || this.Geometria.height === 0 || this.Geometria.height === null) {

                console.log("A altura não está definida");
                this.Geometria.height = 0;

            } else {

                this.Geometria.height = this.Geometria.height;
                this.element["style"]["height"] = this.Geometria.height + this.Geometria.unidadeDeslocamento;

            }

        }

        let def_Deslocamento = () => {

            if (this.Geometria.DeslocamentoTo === undefined || this.Geometria.DeslocamentoTo === 0 || this.Geometria.DeslocamentoTo === null) {

                this.Geometria.DeslocamentoTo  = fgs.$("#Px15Py1");

                let def_unidadeDeslocamento = () => {

                    if (this.Geometria.unidadeDeslocamento === undefined) {
        
                        this.Geometria.unidadeDeslocamento = "px";
        
                    } else {
        
                        this.Geometria.unidadeDeslocamento = this.Geometria.unidadeDeslocamento;
        
                    }
        
                }
                let def_posiçaoHorizontal = () => {

                    if (this.Geometria.x === undefined) {
        
                        console.log("deslocamento horizontal não foi definido")
                        this.Geometria.x = 0;
        
                    } else {
        
                        this.Geometria.x = this.Geometria.x;
        
                    }
        
                }
                let def_posiçaoVertical = () => {
        
                     if (this.Geometria.y === undefined) {
        
                         console.log("deslocamento vertical não foi definido")
                         this.Geometria.y = 0;
        
                     } else {
        
                         this.Geometria.y = this.Geometria.y;
        
                    }
        
                }

                def_unidadeDeslocamento();
                def_posiçaoHorizontal();
                def_posiçaoVertical();

                this.Deslocar_to = () => {

                    Deslocar_xy(this.element,this.deslocamento_to);

                }

                this.Deslocar = () => {

                    Deslocar(this.element,this.Geometria.x,this.Geometria.y);

                }

            } else {

                this.deslocamento_to = this.Geometria.DeslocamentoTo;
                this.Deslocar_to = () => {

                    Deslocar_xy(this.element,this.deslocamento_to);

                }

            }

        }    

        let defs = () => {

            this.Geometria = Geometria;
            def_Dimensoes();
            def_Deslocamento();

        }

        if (e !== undefined) {

            this.typeElement = e;
            this.pai = p;
            this.Identificaçao = Identificaçao;
            this.element = document.createElement(this.typeElement)
            defs();

            this.Create = () => {

                this.element.className = this.Identificaçao.className;
                this.element.id = this.Identificaçao.id;
                this.pai.append(this.element);
                
        
            }
            
    }


}

}


