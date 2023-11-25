const fs = require('fs');
const eFile = ( PATH, ARQUVIVO, DADO) => {

    var dataNew = 'const dataNew = \"' + DADO + '\" ;\nmodule.exports = {dataNew}';

    fs.writeFile(PATH + 'newDate.js', dataNew, (err) => {

        if (err) throw err;
        console.log('O arquivo newDate.js foi criado!');

    });


    fs.readFile(PATH + ARQUVIVO,'utf8', function(err,dataOld){

        //Enviando para o console o resultado da leitura
        console.log(dataOld);
        const o = require(PATH + "newDate.js"),
        data = dataOld + "\n" + o.dataNew; 
        fs.writeFile(PATH + ARQUVIVO, data, (err) => {
            if (err) throw err;
            console.log('Foi escrito uma nova linha no arquivo!');
        });

        });

}

//eFile("arquivo.txt", "[" + [1,2] + "]" );
//eFile("arquivo.txt", "teste");

module.exports = { eFile } ;