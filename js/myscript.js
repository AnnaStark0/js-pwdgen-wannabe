const nome = prompt ('Inserisci il tuo Nome');

const cognome = prompt ('Inserisci il tuo Cognome');

const colore = prompt ('Inserisci il tuo Colore Preferito');

const password = nome + cognome + colore + '21';

document.getElementById('psw').innerHTML = 'Ecco la tua Password: ' + password;