const button = document.querySelector('button');
const tag_classes = document.querySelectorAll('.day_mode');
const greeting = document.querySelector('#greeting');
const time_telling = document.querySelector('#time_telling');
const times = document.querySelectorAll('.time');

function activate_night_mode () {
    tag_classes.forEach(tag_class => {
        tag_class.classList.remove('day_mode');
        tag_class.classList.add('night_mode');
    })
    greeting.innerHTML = "GOOD NIGHT";
    time_telling.innerHTML = "This is night time!";
    times.forEach(time => {
        time.innerHTML = "day";
    })
    button.removeEventListener('click', activate_night_mode);
    button.addEventListener('click', activate_day_mode);
}

function activate_day_mode () {   
    tag_classes.forEach(tag_class => {
        tag_class.classList.remove('night_mode');
        tag_class.classList.add('day_mode');
    })
    greeting.innerHTML = "GOOD MORNING";
    time_telling.innerHTML = "This is day time!";
    times.forEach(time => {
        time.innerHTML = "night";
    })
    button.removeEventListener('click', activate_day_mode);
    button.addEventListener('click', activate_night_mode);
}

button.addEventListener('click', activate_night_mode);