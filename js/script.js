// Scrivere un programma che stampi in console i numeri da 1 a 100
const numberContainer = document.querySelector('#number-container');
const fizzButton = document.querySelector('#fizz-btn');
// Metto il programma in ascolto
fizzButton.addEventListener('click', function () {
    // Nascondo il btn
    fizzButton.classList.add('d-none');
    // Creo un ciclo che va da 1 a 100
    for (let i = 1; i <= 100; i++) {
        // Creo un elemento da inserire nell'html
        const number = document.createElement('div');
        // Assegno ai numeri una stringa quando è multiplo di 3, di 5 o di entrambi
        let fizzOrAndBuzz = i;
        if (i % 3 === 0 && i % 5 === 0) {
            fizzOrAndBuzz = 'FizzBuzz';
            number.classList.add('bg-success');
            number.classList.add('text-warning');
        } else if (i % 3 === 0) {
            fizzOrAndBuzz = 'Fizz';
            number.classList.add('bg-danger');
            number.classList.add('text-light');
        } else if (i % 5 === 0) {
            fizzOrAndBuzz = 'Buzz';
            number.classList.add('bg-warning');
            number.classList.add('text-danger');
        } else {
            number.classList.add('bg-light');
        }
        // Stampo i numeri all'utente
        // - Inserisco il contenuto da stampare
        number.innerHTML = fizzOrAndBuzz;
        // - Inserisco le classi
        number.classList.add('ms-number');
        number.classList.add('mx-2');
        number.classList.add('my-2');
        number.classList.add('rounded');
        number.classList.add('text-center');
        number.classList.add('d-flex');
        number.classList.add('align-items-center');
        number.classList.add('justify-content-center');
        // - Appendo l'elemento al container
        numberContainer.append(number);
    }
});
