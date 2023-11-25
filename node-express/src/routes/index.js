const { uuid } = require('uuidv4');
const {eFile} = require('../../fsWriteFile2');
const fs = require('fs');
const express = require('express');
const router = express.Router();
var path = require('path');
const 
version_obj_1 = {
    id: "Informaçoes",
    title: "Node Express API",
    version: "0.0.1"
}, 
dataUsers = require("./db_users.json"),
dataIP = require("./db_ips.json") ;

const data = {
    Informaçoes : [
        version_obj_1
    ], 
    users : dataUsers
    };  

router.get('/', function (req, res, next) {
     res.status(200).json({
         status: 'success',
        "data" : data 
    });
});  

router.get('/css/users.css', function (req, res, next) {

    var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./css/users.css";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })

});

router.get('/script/users.js', function (req, res, next) {

    var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./script/users.js";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })

});

router.get('/users', function (req, res, next) {

    var options = {
        root: path.join(__dirname), 
    }

    var CD = path.basename(__dirname);
    console.log(__dirname);
    var fileName = "./teste.html";
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })

});


router.get('/usersDB', function (req, res, next) {
    res.status(200).json(dataUsers, null, "\t");
});

router.get('/ipDB', function (req, res, next) {
  res.status(200).json(dataIP, null, "\t");
});

/*
router.get('/users', function (req, res, next) {
    res.status(200).send(JSON.stringify(dataUsers, null, "\t")); 
});
*/
router.post('/usersDB', async (req, res) => {

    const userId = Math.floor(Math.random() * 10);
    const user = Object.assign({ id: uuid() }, req.body);
  
    const rsp = await fetch("http://localhost:3000/usersDB")
      
    if(rsp.ok) {
        console.log("Busca com sucesso")
     } else {
        console.log("Busca com falha")
     }
      
    const data = await rsp.json();
    console.log(data);
    data[data.length] = user;
    dataUsers[dataUsers.length] = user;
    fs.writeFile('./src/routes/db_users.json', JSON.stringify(dataUsers, null, "\t"), (err) => {
        if (err) throw err;
        console.log('O arquivo db_users.json foi atualizado!');
    });
    res.status(200).json(data);
     
    //eFile("db_users.json", JSON.stringify(dataUsers) );
  
  });

router.post('/ipDB', async (req, res) => {
  const ipId = Math.floor(Math.random() * 10);
  const IP = Object.assign({ id: uuid() }, req.body);

  const rsp = await fetch("http://localhost:3000/ipDB")
    
  if(rsp.ok) {
      console.log("Busca com sucesso")
   } else {
      console.log("Busca com falha")
   }
    
  const data = await rsp.json();
  console.log(data);
  data[data.length] = IP;
  dataIP[dataIP.length] = IP;
  fs.writeFile('./src/routes/db_ips.json', JSON.stringify(dataIP, null, "\t"), (err) => {
      if (err) throw err;
      console.log('O arquivo db_ips.json foi atualizado!');
  });
  res.status(200).json(data);
   
  //eFile("db_ips.json", JSON.stringify(dataIP) );

});
/*
router.put('/usersDB/:id', async (req, res) => {

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

router.put('/ipDB/:id', async (req, res) => {

  const rsp = await fetch("http://localhost:3000/ipDB")
    
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
*/
module.exports = router; 
