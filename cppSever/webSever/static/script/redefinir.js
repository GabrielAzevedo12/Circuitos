const redefinir_dimensoes = (e) => {

    e.style.top = 0;
    e.style.left = 0;
    let wh = (h,w) => {
        e.style.height = h;
        e.style.width = w;
    }

    fgs.Existe_Class(e,"reta_horizontal") ? wh("0.25vw",0) : wh(0,"0.25vw");


}