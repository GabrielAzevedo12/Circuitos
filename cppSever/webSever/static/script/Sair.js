const redir = (url) => {
    window.location.href = url;
    window.location.assign(url);
}

fgs.$("#listaHeader_Sair").onclick = async () => {
    const rsp_ip = await fetch("http://localhost:3000/ipDB")
    
    if(rsp_ip.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     }

    const data_ip = await rsp_ip.json();
    console.log("Estes são os dados dos ips acessados : \n" + data_ip);

    let date = new Date() ;

    $.getJSON("https://api.ipify.org?format=json", function(data) {
  
    AnalisarIp(data_ip,data.ip) ? 
    (
        () => {
            console.log("Existe o IP");

            let UserGeral;
            UserGeral = AnalisarIp2(data_ip,data.ip);

            if(UserGeral) {

                if(UserGeral.user_associado) {
                    RedefinirUsuarioGeral();
                    console.log("Existe o IP\n\
                    Atualizando o IP :\n");
                    console.log(UserGeral);
                    let date_last_logout = UserGeral["date_last_logout"] 
                    + ", " + date.toString() + ":from:" + UserGeral.user_associado["Email"] ;
                    PUTip( data.ip, data_ip, {
                        "date_last_logout": date_last_logout,
                        "user_associado": ""
                    } );
                    redir("http://localhost:7070/entrar.html");
                }

            } else {

            }
            
        }
    )() :
    (
        () => {
            console.log("Não existe o IP")
        }
    )()
                                  
})
}