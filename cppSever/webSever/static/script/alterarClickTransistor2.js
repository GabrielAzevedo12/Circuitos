const alterarClickTransistor2 = () => {
    console.log("Foi iniciada alterarClickTransistor2");
    for( const x of document.getElementsByClassName("deslocamentoPeloMouse")) {
        /*
        x.onclick = (e) => {
            Deslocar_obj_2.Deslocar(e.target);
        }
        */
       x.addEventListener('click', (e) => {
            Deslocar_obj_2.Deslocar(e.target);
        })
    }
}
