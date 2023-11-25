const DefinirUsuario2 = async () => {
        const rsp_ip = await fetch("http://localhost:3000/ipDB")
    
        if(rsp_ip.ok) {
            console.log("Busca com sucesso")
         } else {
            console.log("Busca com falha")
         }
    
        const data_ip = await rsp_ip.json();
        console.log("Estes são os dados dos ips acessados : \n" + data_ip);
    
        $.getJSON("https://api.ipify.org?format=json", function(data) {
      
                AnalisarIp(data_ip,data.ip) ? 
                (
                    () => {
                        console.log("Existe o IP");

                        let UserGeral;
                        UserGeral = AnalisarIp2(data_ip,data.ip);

                        if(UserGeral) {

                            if(UserGeral.user_associado) {
                                DefinirUsuarioGeral(UserGeral.user_associado);
                            }

                        } else {

                        }
                        
                    }
                )() :
                (
                    () => {
                        console.log(
                        "Não existe o IP")
                    }
                )()
                                              
            })
    
    }
    