const split = (stringArr,delimitador_inicial,delimitador_final) => {

    var stringUp = "", permissaoUpdate = false;

    for(let x of stringArr) {


        if (x === delimitador_inicial) {
               
            permissaoUpdate = true
            continue;

        }

        if (permissaoUpdate) {

            if (x !== delimitador_final) {

                stringUp =  stringUp + x;

            } else {
            
                permissaoUpdate = false;
                break;

            }

        }

    }

    return stringUp;

}

const splitL = (stringArr,delimitador_final) => {

    var stringUp = "", permissaoUpdate = false;

    for(let x of stringArr) {
               
            permissaoUpdate = true

        if (permissaoUpdate) {

            if (x !== delimitador_final) {

                stringUp =  stringUp + x;

            } else {
            
                permissaoUpdate = false;
                break;

            }

        }

    }

    return stringUp;

}

const vaziaString = (s) => {

    if (s === '') {
        return 0
    } else {
        return s;
    }

}



