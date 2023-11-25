console.log("Teste")

const div_Users = document.querySelector("#div_Users");
const gerarDB = async () => {

    const rsp = await fetch("http://localhost:3000/usersDB")
    if(rsp.ok) {
        console.log("Busca com sucesso")
    } else {
        console.log("Busca com falha")
    }
    const data = await rsp.json();
    console.log(data, typeof(data) ) ;

    div_Users.append( JSON.stringify(data, null, "\n") )

}

gerarDB();

const gerarDB_user = async (user) => {

    const rsp = await fetch("http://localhost:3000/usersDB" + "/" + user)
    if(rsp.ok) {
        console.log("Busca com sucesso")
    } else {
        console.log("Busca com falha")
    }
    const data = await rsp.json();
    console.log(data, typeof(data) ) ;

    div_Users.append( JSON.stringify(data, null, "\n") )

}

const 
button_buscar_id = document.querySelector("#button_buscar_id"),
id_user = document.querySelector("#id_user");

button_buscar_id.onclick = (e) => {

    const id = id_user.value;
    div_Users.childNodes[1].remove()
    gerarDB_user(id);
    id_user.value = '';

}




