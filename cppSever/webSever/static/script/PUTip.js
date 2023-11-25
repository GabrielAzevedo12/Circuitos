const PUTip = async (ip, data_ip, user_associado) => {
    
  console.log("PUTip está sendo executada ...");
  console.log("Objeto que será atualizado :\n");
  console.log(data_ip.id);
  console.log("Valores que serão atualizados :\n");
  console.log(user_associado);
    
  const obj_up = AnalisarIp2(data_ip,ip);
  fetch("http://localhost:3000/ipDB/" + obj_up.id ,{ 
    method: "PUT",
    headers: {
        "Content-type": "application/json",
    },
    body : JSON.stringify(user_associado)
    } )
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

}