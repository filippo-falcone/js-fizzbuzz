// Scrivere un programma che stampi in console i numeri da 1 a 100
// Creo un ciclo che va da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Assegno ai numeri una stringa quando è multiplo di 3, di 5 o di entrambi
    let fizzOrAndBuzz = i;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrAndBuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        fizzOrAndBuzz = 'Fizz';
    } else if (i % 5 === 0) {
        fizzOrAndBuzz = 'Buzz';
    }
    // Stampo i numeri all'utente
    console.log(fizzOrAndBuzz);
}
