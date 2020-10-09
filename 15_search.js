
//search method - cerca una substr dentro una stringa, ritrona posizione

var frase = "33 trentini entrarono a Trento, trotterellando";

/*
search method 
    stringa.search(test or RegExp);
*/

var tre = frase.search('tre');
console.log(tre);   //*3

var treMaius = frase.search('Tre');
console.log(tre);

var numero = frase.search(/\d/);    ///\d/ indica il primo numero della stringa
console.log('Il numero sta a: ' +numero);