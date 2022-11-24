/*==========================================================================
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
============================================================================*/

 let numbers= [];

//prendo l'input button da HTML tramite id
const inputButton = document.getElementById('btn');
console.log(inputButton);

//creo un'evento che comincia quando clicco il bottone
inputButton.addEventListener('click', function () {
    
    //creo delle variabili che mi restituiscano un numero random tra 1 e 6 con la funzione Math.random
    const userRandomNumbers = Math.floor(Math.random() * 6) +1;
    numbers.push(userRandomNumbers);//(RIVEDERE L'UTILIZZO DI .PUSH)
    const randomNumbers = Math.floor(Math.random() * 6) +1;
    numbers.push(randomNumbers);

    //se il numero utente è suoperiore al numero della IA l'utente vince
    if (userRandomNumbers > randomNumbers){
        console.log('User Number: '+userRandomNumbers+' You Win!!! '+'IA Number:'+randomNumbers);
    }

    //altrimenti se il numero utente è inferiore al numero della IA l'utente perde
    else if (userRandomNumbers < randomNumbers){
        console.log('User Number: '+userRandomNumbers+' You Lose!!! '+'IA Number:'+randomNumbers);
    }
})

/*=======================================================================================================================================================
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma
=========================================================================================================================================================*/

//creo un archivo che contiene le variabili (array)
const mailList = [
    'ryuhayabusa@gmail.com',
    'heathermason@gmail.com',
    'benthrottle@gmail.com',
    'samusaran@gmail.com',
    'adawong@gmail.com'
]

//controllo che il mio array sia stampato in console
console.log(mailList);

//prento l'imput button da HTML tramite id
const searchButton = document.getElementById('search');
console.log(searchButton);

//creo un'evento che comincia quando clicco il bottone
searchButton.addEventListener('click', function () {

    //recupero il valore dell'elemento con id #mail
    const userMail = document.getElementById('mail').value;

    //dichiaro una variabile da richiamare nel ciclo 
    let allowed;

    //apro un ciclo che mi consente di matchare il valore della mail scritta dall'utente con gli elementi nella lista
    for (let i = 0; i <= mailList.length; i++){
        
        
        if (userMail === mailList[i]){
            allowed = i;
        }
    }

    
    if (allowed >= 0){
        console.log('Accesso consentito');
    }

    else {
        console.log('Accesso non consentito');
    }
    
})


