let ondrop_entrada_inicial = () => {

    let 
    ei_transistor_ligar = fgs.$("#entrada_inicial_transistor_ligar"),
    fio_transistor_ligar = reta2.element,
    fioParent_transistor_ligar = reta2.element.parentElement;

    let ondrop_ei_transistor_ligar = (e) => {

        e.preventDefault();
        const data = e.dataTransfer.getData("element");
        e.target.append(document.getElementById(data));
        console.log("O elemento foi dropado");
        var 
        data_geometria = document.getElementById(data).getBoundingClientRect(),
        parent_geometria = e.target.getBoundingClientRect();
        document.getElementById(data).style.top = parent_geometria.width + "px";
        document.getElementById(data).style.left = (parent_geometria.width*0.5 - data_geometria.width*0.5) + "px";
        document.getElementById(data).style.position = "absolute";

    };
    let ondragover_ei_transistor_ligar = (e) => {

        e.preventDefault();
        
    };

    /*
    let ondragstart_fio_transistor_ligar = () => {

    };
    let ondrag_fio_transistor_ligar = () => {

    };
    */
    
    fioParent_transistor_ligar.addEventListener("drop",(e) => { ondrop_ei_transistor_ligar(e); });
    fioParent_transistor_ligar.addEventListener("dragover",(e) => { ondragover_ei_transistor_ligar(e); });
    ei_transistor_ligar.addEventListener("drop",(e) => { ondrop_ei_transistor_ligar(e); });
    ei_transistor_ligar.addEventListener("dragover",(e) => { ondragover_ei_transistor_ligar(e); });
/*
    fio_transistor_ligar.addEventListener("dragstart",() => { ondragstart_fio_transistor_ligar(); })
    fio_transistor_ligar.addEventListener("drag",() => { ondrag_fio_transistor_ligar(); })
*/

}

//ondrop_entrada_inicial();