const intNegativo = (n) => {

    let number = (n)**0.5;
    if(number) {
        console.log("é positivo")
        return false;
    } else {
        console.log("é negativo")
        return true;
    }
    
}

const np = (n) => {

    let number = (n)**0.5;
    if(number) {
        //console.log("é positivo")
        return n;
    } else {
        //console.log("é negativo")
        return -1*n;
    }
    
}