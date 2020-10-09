let person = {
    name : 'Daniele',
    lastname : 'Unknown'
}

/*

//Questo modo di scrivere può portare a errori
let test = "HIs name is " +person.name
      test+= " and his last name is "+person.lastname;

console.log(test);



//Con il template literal (Alt + 0096 per fare il backtick) - Stringa nortmale più backtick

let testLiteral = `

    akcbnjakjbcskjb
    akcnkjanckjbna
    acnxkankjna

    ajbaskjbc
    acknankacn
    " e vissero tutti felici e contenti"

    dfine


`;
console.log(testLiteral);



//questa func ritorna i paragrafi della var fullName
function funzioneLiteral(par1,par2,par3) {

    return par1+par2+par3
}


let fullName = funzioneLiteral `His name is ${person.name}, his lastname is ${person.lastname}
and he is ${10+20} years old`;

console.log(fullName);
//Posso fare qualsiasi operazione in Js mettendola con ${}

*/

// //se lascio solo par1 come argomento , mi chiama tutto l'array di stringa, tranne le variabili $
// function func(par1, par2, par3, par4) {
//     console.log(par4);
// }
// //par2='Daniele' - par3='Unknown - par4=30


let taggedString = func `His name is ${person.name}, his lastname is ${person.lastname}
and he is ${10+20} years old`;

//catturare tutti i parametri - 
function func(par1,...parametri) {
    console.log(parametri);
}







