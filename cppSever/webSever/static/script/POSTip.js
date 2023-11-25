const POSTip = (ip,user_associado) => {
    
    fetch("http://localhost:3000/ipDB",{ 
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body : JSON.stringify(user_associado)
      } )
              .then((resp) => resp.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));

}