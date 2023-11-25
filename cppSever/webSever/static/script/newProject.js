/*
var 
body = document.body,
exibirCoordenadas = (event) => {
    console.log ("coordenada x : " + event.clientX + ", coordenada y : " + event.clientY );
},

interromperMouseEvent = () => {
    document.body.onmousemove = (event) => {
        
    }
};

body.onmousemove = (event) => {
    exibirCoordenadas(event);
}

body.onclick = (event) => {
    interromperMouseEvent();
}
*/
const newProject = () => {

    console.log("newProject foi iniciada");

    let 
    nameProject = window.prompt("Digite o nome do projeto abaixo "),
    userName = window.prompt("Digite o nome do usuário "),
    date = new Date();

    const rsp_ip = await fetch("http://localhost:3000/ipDB");
    
    if(rsp_ip.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     };

    const data_ip = await rsp_ip.json();
    console.log("Estes são os dados dos ips acessados : \n" + data_ip);

    $.getJSON("https://api.ipify.org?format=json", function(data) {
  
            AnalisarIp(data_ip,data.ip) ? 
            (
                () => {

                    console.log("Existe o IP");
                    let UserGeral;
                    UserGeral = AnalisarIp2(data_ip,data.ip);       
                    Transistors_OBJECT.project_transistors.object[nameProject]["user"] = UserGeral["user_associado"]["Nome_Usuário"] ;

                }
            )() :
            (
                () => {
                    console.log(
                    "Não existe o IP")
                }
            )()
                                          
        })

    Transistors_OBJECT.project_transistors.object[nameProject] = {} ;
    Transistors_OBJECT.project_transistors.object[nameProject]["transistors"] = Transistors_OBJECT.object_transistors;
    Transistors_OBJECT.project_transistors.object[nameProject]["nameProject"] = nameProject;
    Transistors_OBJECT.project_transistors.object[nameProject]["dateCreate"] = "Data de Criação projeto : " + date.toString();
    //Transistors_OBJECT.project_transistors.object[nameProject]["senha"] = date.toString();

}