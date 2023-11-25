const fs = require('fs');
const eFile = ( PATHARQUVIVO, DADO ) => {

    var dataNew = 'const dataNew = \"' + DADO + '\" ;\nmodule.exports = {dataNew}';

    fs.writeFile('newDate.js', dataNew, (err) => {

        if (err) throw err;
        console.log('O arquivo newDate.js foi criado!');

    });


    fs.readFile(PATHARQUVIVO,'utf8', function(err,dataOld){

        //Enviando para o console o resultado da leitura
        console.log(dataOld);
        const o = require("./newDate.js"),
        data = dataOld + "\n" + o.dataNew; 
        fs.writeFile(PATHARQUVIVO, data, (err) => {
            if (err) throw err;
            console.log('Foi escrito uma nova linha no arquivo!');
        });

        });

}

//eFile("arquivo.txt", "[" + [1,2] + "]" );
//eFile("arquivo.txt", "teste");

module.exports = { eFile } ;