/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/
const numbers = [];
const inputButton = document.getElementById('btn');
console.log(inputButton);

inputButton.addEventListener('click', function () {
    
    const userRandomNumbers = Math.floor(Math.random() * 6);
    numbers.push(userRandomNumbers);
    const randomNumbers = Math.floor(Math.random() * 6);
    numbers.push(randomNumbers);

    if (userRandomNumbers > randomNumbers){
        console.log('User Number: '+userRandomNumbers+' You Win!!! '+'IA Number:'+randomNumbers);
    }

    else if (userRandomNumbers < randomNumbers){
        console.log('User Number: '+userRandomNumbers+' You Lose!!! '+'IA Number:'+randomNumbers);
    }

})