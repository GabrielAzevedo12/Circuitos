fgs.$("#Button_Entrar").onclick = async (e) => {
    const 
    emailUserName = fgs.$("#email"),
    password = fgs.$("#password");

    const rsp = await fetch("http://localhost:3000/usersDB")

    if(rsp.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     }

    const data = await rsp.json();

    console.log(data);

    for (let obj of data ) {

        var 
        CUser = (obj.Nome_Usuario === emailUserName.value || obj.Email === emailUserName.value),
        CPassword = (obj.Senha === password.value),
        CLogin = (CUser && CPassword) ;

        (CLogin) ? 
        ((obj) =>
         {
            console.log("O login foi realizado com sucesso ... ");
            DefinirUsuario(obj) ;
         })(obj) : 
        (() =>
         {
            console.log("A senha está incorreta ou o nome de usuário ou o e-mail estão ... ") ;
         })() ;

    }

    emailUserName.value = '';
    password.value = '';

}
/*
var xmlhttp = new XMLHttpRequest(), ip;
xmlhttp.open("GET", 'http://meuip.com/api/meuip.php');
xmlhttp.send();
xmlhttp.onload = function async (e) {
  alert("Seu IP é: "+xmlhttp.response);
  ip = xmlhttp.response;
}
*/