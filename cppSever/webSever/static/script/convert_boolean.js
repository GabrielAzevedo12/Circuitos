const convert_boolean = (boolean) => {

    if (boolean) {
        return 1;
    } else {
        return 0;
    }
}

const convert_boolean_array = (array_boolean) => {

    var i = 1, j = 0, a = [] ;
    for ( x of array_boolean) {
        a[j] = convert_boolean(x);
        i = i*x;
        j = j+1;
    }

    console.log(i);
    return a ;
}