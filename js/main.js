//console.log("ciao");

//1. individuzione e creazione delle variabili

const priceKilometers = 0.21;
let clientAge;
let kilometers;

//let clientOfftwenty = 18;
//let clientOffforty = 65;



clientAge = prompt("Età"); //il dato in input sarà una stringa da convertire in un valore
clientAge = parseInt(clientAge);
kilometers = prompt("Quanti chilometri devi percorrere?");
kilometers =parseFloat(kilometers)

console.log(clientAge);
console.log(kilometers);

//calcolo del ticket
//default
let ticket = priceKilometers*kilometers;
let ticketFixed = ticket.toFixed(2);

//-20%
let offTwenty = priceKilometers/100*20;
let offTwentyticket = offTwenty*kilometers;
let tewntyFixed = offTwentyticket.toFixed(2);

//-40%
let offForty = priceKilometers/100*40;
let offFortyticket = offForty*kilometers;
let fortyFixed = offFortyticket.toFixed(2);
let message = "il prezzo totale del biglietto è €";

//4. elaborazione codice 

if(clientAge){
      
    //ticket = priceKilometers*kilometers;
    ticketFixed = ticket.toFixed(2);
    message = "il prezzo totale del biglietto è €"
   console.log(`${message}${ticketFixed}`)

}else if(clientAge<=18){
    
    //offTwentyticket = offTwenty*kilometers;
    tewntyFixed = offTwentyticket.toFixed(2);
    message = "il prezzo totale del biglietto è €"
    console.log(`${message}${tewntyFixed}`);
}else if(clientAge>=65){

    //offFortyticket = offForty*kilometers;
    fortyFixed = offFortyticket.toFixed(2);
    message = "il prezzo totale del biglietto è ";
    
    console.log(`${message}${fortyFixed}`);
}




    




