const 
ondrop_entrada = (e) => {

    e.preventDefault();
    const data = e.dataTransfer.getData("element");
    const element = document.getElementById(data);
    let [data_geometria,parent_geometria] = [element.getBoundingClientRect(), e.target.getBoundingClientRect()];

    e.target.append(element);
    console.log("O elemento foi dropado");

    fgs.S2(element,"top",parent_geometria.width + "px");
    fgs.S2(element,"left",(parent_geometria.width*0.5 - data_geometria.width*0.5) + "px");
    fgs.S2(element,"position","absolute");

    element.setAttribute("transistor_vinculado",e.target.id);
    e.target.setAttribute("fio_vinculado_1",e.target.id);
    console.log("Este é o transistor vinculado de id : " + element.getAttribute("transistor_vinculado"));
//  fgs.Remover_class(e.target,"Sinalizar_transistor");

};