let key, chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const geNumRand = () => {
  let r = parseFloat(Math.round(Math.random()*10**2));
  while( r < 0 || r > 25) {
    r = geNumRand();
  }
  return r;
}

const catN = (e,a) => {
  var i = 0 ;
  for ( const element of a) {
    if (element === e) {
      return i ;
      break ; 
    } else  {
      i = i+1;
    }
  }

}

const MaiscOrMins = (e) => {
  let r = parseFloat(Math.round(Math.random()*10**1)), string = e;
  
  if ( r > 5) {
    return string.toUpperCase();
  } else {
    return string.toLowerCase();
  }

}

/*
console.log(key);
console.log(catN("c",chars));
*/
var ch,string = '';
for(var i = 0 ; i <= 10; i++) {
  ch = MaiscOrMins(chars[geNumRand()]);
  string = string + ch ;
}

console.log(string);