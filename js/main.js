//console.log("ciao");

//1. individuzione e creazione delle variabili

const priceKilometers = 0.21;
let clientAge;
let clientOfftwenty = 18;
let clientOffforty = 65;
let kilometers;



clientAge = prompt("Età"); //il dato in input sarà una stringa da convertire in un valore
clientAge = parseInt(clientAge);
kilometers = prompt("Quanti chilometri devi percorrere?");
kilometers =parseFloat(kilometers)

console.log(clientAge);
console.log(kilometers);

//calcolo del ticket

let ticket = priceKilometers*kilometers;

let offTwenty = priceKilometers/100*20;
let offTwentyticket = offTwenty*kilometers;

if(clientAge>18 && clientAge<65){
      
    ticket = priceKilometers*kilometers;
   
console.log(ticket);
} else if(clientAge<18){
    
    offTwentyticket = offTwenty*kilometers;

} 

console.log(offTwentyticket);


