const DefinirUsuarioGeral = async (obj_userG) => {

    console.log("Este é o usuário geral :\n" + obj_userG);
    fgs.$("#listaHeader_User").textContent = obj_userG.Nome_Usuário;

}
const RedefinirUsuarioGeral = async () => {

    fgs.$("#listaHeader_User").textContent = "Usuário";
    
}
    