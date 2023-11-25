const 
express = require('express'),
app = express(),
fs = require("fs"),
router = express.Router();

//Rotas
app.use((_req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next();

});

app.use(express.json());

const 
index = require('./routes/index'),
personRoute = require('./routes/personRoute'),
Informaçoes_API_route = require('./routes/Informaçoes_API.js'),
data_up = {
  boolean: false,
  newData: undefined
},
users_1 = {
  id: 1,
  title: "Node Express API 1",
  version: "0.0.1"
} ,
users_2 = {
  id: 2,
  title: "Node Express API 2",
  version: "0.0.2"
}, 
dataUsers = require("./routes/db_users.json"),
dataIP = require("./routes/db_ips.json")  ;

app.use('/', index);
app.use('/persons', personRoute);
app.get('/:id', async (req, res) => {

        const rsp = await fetch("http://localhost:3000/")
      
        if(rsp.ok) {
            console.log("Busca com sucesso")
         } else {
            console.log("Busca com falha")
         }

        const 
        data = await rsp.json(), 
        query_id_1 = (obj) => {

          res.status(200).json({
            status: 'success',
            "data": obj
        });

        },
        query_id_2 = () => {
         
        };

        console.log(data);

        for (const obj of data.data.users ) {

          (obj.id + "" === req.params.id) ? 
          query_id_1(obj) : 
          query_id_2() ;

        }

        for (const obj of data.data.Informaçoes) {

          (obj.id + "" === req.params.id) ? 
          query_id_1(obj) : 
          query_id_2() ;

        }

});

app.get('/usersDB/:id', async (req, res) => {

  const rsp = await fetch("http://localhost:3000/usersDB")

  if(rsp.ok) {
      console.log("Busca com sucesso")
   } else {
      console.log("Busca com falha")
   }

  const 
  data = await rsp.json();

  console.log(data);

  for (const obj of data ) {

    (obj.id === req.params.id) ? 
    ((obj) =>
     {
      res.status(200).json( obj );
      console.log("Este é o req.body\n" + req.body)
     })(obj) : 
     (() =>
     {
      console.log("Id não encontrado")
     })() ;

  }

});

app.get('/ipDB/:id', async (req, res) => {

  const rsp = await fetch("http://localhost:3000/ipDB")

  if(rsp.ok) {
      console.log("Busca com sucesso")
   } else {
      console.log("Busca com falha")
   }

  const 
  data = await rsp.json();

  console.log(data);

  for (const obj of data ) {

    (obj.id === req.params.id) ? 
    ((obj) =>
     {
      res.status(200).json( obj );
      console.log("Este é o req.body\n" + req.body)
     })(obj) : 
     (() =>
     {
      console.log("Id não encontrado")
     })() ;

  }

});

app.put('/usersDB/:id', async (req, res) => {

  const rsp = await fetch("http://localhost:3000/usersDB")
    
  if(rsp.ok) {
      console.log("Busca com sucesso")
   } else {
      console.log("Busca com falha")
   }
    
  const data = await rsp.json();
  console.log(data);

  var i = 0;
  for ( obj_user of data) {
    if(obj_user.id === req.params.id)  {

      const user = Object.assign(obj_user, req.body);

      data[i] = user;
      dataUsers[i] = user;
      break;

    } else {

    }

    i = i+1;

  }
 
  fs.writeFile('./src/routes/db_users.json', JSON.stringify(dataUsers, null, "\t"), (err) => {
      if (err) throw err;
      console.log('O arquivo db_users.json foi atualizado!');
  });
  res.status(200).json(data);
   
  //eFile("db_users.json", JSON.stringify(dataUsers) );

});

app.put('/ipDB/:id', async (req, res) => {

  const rsp = await fetch("http://localhost:3000/ipDB");
    
  if(rsp.ok) {
      console.log("Busca com sucesso")
   } else {
      console.log("Busca com falha")
   }
    
  const data = await rsp.json();
  console.log(data);

  var i = 0;
  for ( obj_user of data) {
    if(obj_user.id === req.params.id)  {

      console.log(req.body);
      const user = Object.assign(obj_user, req.body);

      data[i] = user;
      dataIP[i] = user;
      break;

    } else {

    }

    i = i+1;

  }
 
  fs.writeFile('./src/routes/db_ips.json', JSON.stringify(dataIP, null, "\t"), (err) => {
      if (err) throw err;
      console.log('O arquivo db_ips.json foi atualizado!');
  });
  res.status(200).json(data);
   
  //eFile("db_ips.json", JSON.stringify(dataIP) );

});

module.exports = app;
