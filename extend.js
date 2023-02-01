// Validation

let submitForm = document.querySelector('#submitForm');
let email = document.querySelector('#mail');
let form = document.querySelector('form')

let errorStyle = {
    'backgroundColor': 'red',
    'color': '#fff',
    'opacity': '0',
    'transition': 'all 0.5s ease',
    'userSelect': 'none',
    'width': 'fit-content'
}

let errormsg = document.createElement('p');
Object.assign(errormsg.style, errorStyle);
errormsg.textContent = 'hello'
form.appendChild(errormsg)

let regex = /^[a-z0-9_.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/u;
let checkCaps = /[A-Z]+/u;
let timeout = 3000

submitForm.addEventListener('click', (event) => {
    let EmailValidation = regex.test(email.value);
    if (email.value === '') {
        setTimeout(function () {
            errormsg.style.opacity = '0'

        }, timeout)
        errormsg.style.opacity = '1';
        errormsg.innerHTML = 'Error! Field is empty';
        event.preventDefault()
    } else if (checkCaps.test(email.value)) {
        setTimeout(function () {
            errormsg.style.opacity = '0';

        }, timeout)
        errormsg.style.opacity = '1';
        errormsg.innerHTML = 'Error! capital letters are disallowed';
        event.preventDefault()
    } else if (!EmailValidation) {

        setTimeout(function () {
            errormsg.style.opacity = '0';

        }, timeout)
        errormsg.style.opacity = '1'
        errormsg.innerHTML = 'Error! Email Address not valid'
        event.preventDefault()
    }
})
