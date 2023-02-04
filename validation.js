// Validation
let submitForm = document.querySelector('#submitForm');
let email = document.querySelector('#mail');
let form = document.querySelector('form');

// The regex for the email address
let regex = /^[a-z0-9_.%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/u;

// The regex for detecting capitalization
let checkCaps = /[A-Z]+/u;

// Number set for the timeouts.
let timeout = 3000;

// The style to be set if an error occured on the form input(For email for now)
let borderError = {
    'border': '3px solid red',
    'transition': 'all 0.5s ease-in-out'
}

// The style for the error message
let errorStyle = {
    'backgroundColor': 'orange',
    'color': '#000',
    'opacity': '0',
    'transition': 'all 0.5s ease',
    'userSelect': 'none',
    'width': 'fit-content'
};


// The error message creation
let errormsg = document.createElement('p');
Object.assign(errormsg.style, errorStyle);
errormsg.textContent = 'hello';
form.appendChild(errormsg);

// Function that writes out the error message
let reportError = (report) => {
    setTimeout(function () {
        errormsg.style.opacity = '0';
        email.style.borderColor = 'rgba(0,0,0,0)'
    }, timeout);
    errormsg.style.opacity = '1';
    errormsg.innerHTML = report;
    event.preventDefault();
}

// Testing the email validation
let EmailValidation = regex.test(email.value);

// Listens to the submit button, checks if the email address is filled correctly
submitForm.addEventListener('click', () => {

    if (email.value === '') {
        Object.assign(email.style, borderError);
        let report = 'Please type your email address';
        reportError(report)
    } else if (checkCaps.test(email.value)) {
        Object.assign(email.style, borderError);
        let report = 'Error! capital letters are disallowed'
        reportError(report)
    } else if (!EmailValidation) {
        Object.assign(email.style, borderError);
        let report = 'Error! Email Address not valid'
        reportError(report);
    }
});

// Local Storage and Session Storage code
let userName = document.querySelector('#name');
let content = document.querySelector('#msg');

// Get input data on the input field
let data = {};
form.addEventListener('keyup', () => {
    data.name = userName.value;
    data.email = email.value;
    data.content = content.value;

    let stringD = JSON.stringify(data);
    localStorage.setItem('data', stringD);
});

// Function that sets the data back to the input
let setItems = () => {
    let setData = JSON.parse(localStorage.getItem('data'));
    userName.value = setData.name;
    email.value = setData.email;
    content.value = setData.content;
};

// Sets the saved local data back to the input field on refresh or restart
window.onload = setItems;