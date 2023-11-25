#! usr/bin/env node

const { exec } = require('child_process');
const path = require("path");
const arq = "teste2.txt";

exec(`echo "teste" > ${arq}` , (err, stdout, stderr) => {

    if (err) {
        console.log(`error: ${error.message}`);
    }

    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }

    console.log("process start ... ");

});
