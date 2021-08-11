let number = document.querySelector('#number');
let button1 = document.querySelector('.button-1');
let button2 = document.querySelector('.button-2');
let button3 = document.querySelector('.button-3');
let counter = 0;

button1.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        number.classList.add("pulse");
        setTimeout( function() {
            number.classList.remove("pulse");
        }, 250);
        number.style.transition = 'all ease-in-out 0.10s';
    } else {
        counter = 0
        number.classList.add("error");
        setTimeout( function() {
        number.classList.remove("error");
        }, 2000);
        number.style.transition = 'all ease-in-out 0.30s';
    };
    number.innerHTML = counter;
});

button2.addEventListener('click', () => {
    counter++;
    number.innerHTML = counter;
    number.classList.add("pulse");
    setTimeout( function() {
        number.classList.remove("pulse");
    }, 250);
    number.style.transition = 'all ease-in-out 0.10s';
});

button3.addEventListener('click', () => {
    if (counter != 0) {
        counter = 0;
        number.classList.add("pulse");
        setTimeout( function() {
        number.classList.remove("pulse");
    }, 2000);
        number.style.transition = 'all ease-in-out 0.10s';
    } else {
        number.classList.add("error");
        setTimeout( function() {
        number.classList.remove("error");
        }, 2000);
        number.style.transition = 'all ease-in-out 0.30s';
    };
    number.innerHTML = counter;
});