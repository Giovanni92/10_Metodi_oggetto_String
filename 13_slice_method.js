
//String.slice(inizio, fine)
//slice legge  eprende una porzione di stringa tra un inex iniziale e finale,
// legge anche valori negativi per leggere dalla fine all'inziion della stringa


var sciogli = "Date del pane al pazzo cane del paese";

var quattro = sciogli.slice(0,4);
// console.log(quattro); //*Date

var pIndex = sciogli.indexOf('pazzo');
var pazzo = sciogli.slice(pIndex, pIndex +5);
// console.log(pazzo); //*pazzo

var cIndex = sciogli.indexOf('cane');
var cane = sciogli.slice(cIndex, cIndex +4);
// console.log(cane);

var luogo = sciogli.slice(-5);  //prende dalla fine della stringa -5 char
console.log(luogo);

//per copiare una stringa su un altra var possiamo usare questo modo
var copiaStringa = sciogli.slice(0);
console.log(copiaStringa);


