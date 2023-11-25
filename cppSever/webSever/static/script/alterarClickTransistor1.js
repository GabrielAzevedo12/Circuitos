const alterarClickTransistor1 = () => {
    console.log("Foi iniciada alterarClickTransistor1");
    for( const x of document.getElementsByClassName("transistor")) {
        x.onclick = (e) => {
            Deslocar_obj.Deslocar(e.target);
        }
    }
}