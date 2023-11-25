const DefinirUsuario = async (obj_user) => {
/*    
    const rsp_users = await fetch("http://localhost:3000/usersDB")

    if(rsp_users.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     }

    const data_users = await rsp_users.json();
    console.log("Estes são os dados dos usuários : \n"data_users);
*/
    const rsp_ip = await fetch("http://localhost:3000/ipDB")

    if(rsp_ip.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     }

    const data_ip = await rsp_ip.json();
    console.log("Estes são os dados dos ips acessados : \n" + data_ip);

    let date = new Date();

    $.getJSON("https://api.ipify.org?format=json",
                                          function(data) {
  
            // Setting text of element P with id gfg
            //$("#gfg").html(data.ip);
            let date_last_register = data_ip["date_last_register"] 
                    + ", " + date.toString() + ":from:" + obj_user["Email"] ;

            AnalisarIp(data_ip,data.ip) ? 
            (
                () => {
                    console.log("Existe o IP\n\
                    Atualizando o IP :\n");
                    console.log(data_ip);
                    PUTip( data.ip, data_ip, {
                        "date_last_register": date_last_register,
                        "user_associado" : obj_user
                    } );
                    redir("http://localhost:7070/Cpp.html");
            })() :
            (
                () => {
                    console.log(
                    "Não existe o IP\n\
                    Registrando o IP : " + data_ip);

                    POSTip( data.ip, {
                        "ip": ip,
                        "date_last_register": date_last_register,
                        "date_last_logout": "",
                        "user_associado": obj_user
                    } );
                    redir("http://localhost:7070/Cpp.html");
                }
            )()
                                          
        })

}
