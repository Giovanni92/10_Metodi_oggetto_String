
var stringa = "aiutami a programmare";
console.log(stringa.indexOf('pro'));

//Mi cerca se cè la string che gli chiedo nel contesto, e mi ritorna la posizione in cui la trova
if(stringa.indexOf('ai')!=-1) console.log("C'è la stringa: "+stringa.indexOf('ai'));

//se a indexof do la stringa 'ai' con questa sintassi, vedrebbe il valore 0 come posizione in cui la trova e 
//restituirebbe un errore
//- in questo caso pro non essendo alla posizione zero non mi restituisce errori
if(stringa.indexOf('pro')) console.log("C'è la stringa: "+stringa.indexOf('pro'));