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

if(clientAge>18){
      
    ticket = priceKilometers*kilometers;
   

} console.log(ticket);

