const greeting = document.querySelectorAll('h1');
const buttons = document.querySelectorAll('button');

function change_h1() {
    greeting.forEach(greet => {
        greet.innerHTML = 'HI!!!';
    })
}

function alert_click() {
    alert("I TOLD YOU DON'T CLICK ON ME!!!");
    this.style.color = 'Red';
    this.style.backgroundColor = 'Black';
}

buttons.forEach(button => {
    button.addEventListener('click', alert_click);
})

greeting.forEach(greet => {
    greet.addEventListener('click', change_h1);
})


