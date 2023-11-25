const AnalisarIp = (array_ip,ip) => {

    var i = 1;
    for( const obj_ip of array_ip) {
        
    if (obj_ip.ip === ip) {
        console.log("O IP está registrado no banco");
        return true;
        break;
    } else {
        if (array_ip.length === i) {
            return false ;
            break
        }
    }

    i = i+1 ;

}

}