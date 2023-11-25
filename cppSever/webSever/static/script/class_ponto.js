class ponto {

    constructor (e, p, className, id, x, y,ud) {

        this.typeElement = e;
        this.pai = document.querySelector(p);
        this.class = className;
        this.id = id;
        this.x = x;
        this.y = y;
        this.unidadeDeslocamento = ud;
        this.element = document.createElement(this.typeElement);

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