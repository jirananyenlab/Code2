/*
Each identifier must have at least one character.
The first character must be picked from: alpha, underscore, or dollar sign. The first character cannot be a digit.
The rest of the characters (besides the first) can be from: alpha, digit, underscore, or dollar sign. In other words, it can be any valid identifier character.
*/

function isValid(idn) {
   return  /^[a-zA-Z_$][\w$]*$/.test(idn);
  }
  console.log(isValid('___'));
  console.log(isValid('$ok'));
  console.log(isValid('"1ok0okay"'));
  console.log(isValid('str-str'));
  console.log(isValid('no no'));
  console.log(isValid(''));