// Validation
let submitForm = document.querySelector('#submitForm');
let email = document.querySelector('#mail');
let form = document.querySelector('form')

let regex = /^[a-z0-9_.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/u;
let checkCaps = /[A-Z]+/u;
let timeout = 3000
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
form.appendChild(errormsg);

submitForm.addEventListener('click', (event) => {
    let EmailValidation = regex.test(email.value);
    if (checkCaps.test(email.value)) {
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

// Local Storage and Session Storage code
let userName = document.querySelector('#name');
let content = document.querySelector('#msg');

// Get input data on the input field
form.addEventListener('keyup', () => {
    let data = {}
    data.name = userName.value;
    data.email = email.value;
    data.content = content.value;

    let stringD = JSON.stringify(data);
    localStorage.setItem('data', stringD)
})

// Sets the data back to the input
let setItems = () => {
    let setData = JSON.parse(localStorage.getItem('data'))
    userName.value = setData.name
    email.value = setData.email
    content.value = setData.content
}

window.onload = setItems