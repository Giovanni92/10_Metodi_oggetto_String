//Simile a slice, solo che non accetta valori negativi
//per leggere una sottostringa da un certo valore a un altro

var testo = "Una rana nera e rara sulla rena errò una sera";

//I valori negativi vengono presi come zero(0)
console.log(testo.substring(-4, 4));




//Metodo substr [si differenzia da substring perchè può usare indici negativi]
var ranaIndex = testo.indexOf('rana');
  var ranaString = testo.substr(ranaIndex, 4);
console.log(ranaString);

//dalla fine a -8 char contami tre char
console.log(testo.substr(-8,3));


