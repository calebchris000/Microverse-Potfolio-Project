// The popup-menu
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.menulist');
let overlay = document.getElementById('overlay')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// The card popup code

// All of the card's data in an array
let portfolios = [
    {
        'content': 'A daily selection of privately personalized reads;',
        'cuntent': ' no accounts or sign-ups required.',
        'image': './Graphics/Snapshoot Portfolio.jpg',
        'listItems': [
            'CANOPY',
            'Back End Dev',
            '2015'
        ],
        'seelive': 'See live',
        'seesource': 'See Source',
        'title': 'Tonic'
    },

    {
        'content': 'A daily selection of privately personalized reads;',
        'cuntent': ' no accounts or sign-ups required.',
        'image': './Graphics/Snapshoot Portfolio 2.jpg',
        'listItems': [
            'CANOPY',
            'Back End Dev',
            '2015'
        ],
        'seelive': 'See live',
        'seesource': 'See Source',
        'title': 'Multi-Post Stories'
    },

    {
        'content': 'A daily selection of privately personalized reads;',
        'cuntent': ' no accounts or sign-ups required.',
        'image': './Graphics/Snapshoot Portfolio 3.jpg',
        'listItems': [
            'CANOPY',
            'Back End Dev',
            '2015'
        ],
        'seelive': 'See live',
        'seesource': 'See Source',
        'title': 'Tonic'
    },

    {
        'content': 'A daily selection of privately personalized reads;',
        'cuntent': ' no accounts or sign-ups required.',
        'image': './Graphics/Snapshoot Portfolio 4.jpg',
        'listItems': [
            'CANOPY',
            'Back End Dev',
            '2015'
        ],
        'seelive': 'See live',
        'seesource': 'See Source',
        'title': 'Multi-Post Stories'
    }
]

// The 'Tonic' or 'Multi-Post Stories' text style
let topicText = {
    'color': '#172b4d',
    'fontSize': '32px'
}

// Stylings for the toxic text and cancel button wrapper
let toxicWrapStyle = {
    'alignItems': 'center',
    'display': 'flex',
    'justifyContent': 'space-between'
}

// Stylings for the cancel button
let cancelButtonStyle = {
    'backgroundColor': 'rgba(0,0,0,0)',
    'border': 'none',
    'color': '#172b4d',
    'fontSize': '2.25rem',
    'position': 'relative',
    'top': '-10px'
}
// Stylings for the three second elements
let thirdWrapperStyle = {
    'display': 'flex'
}

// Stylings for the third element
let thirdStyle = {
    'color': '#344563',
    'fontSize': '16px',
    'fontWeight': '600',
    'marginRight': '10px'
}

// The image style
let portStyle = {
    'borderRadius': '10px',
    'marginTop': '10px',
    'width': '100%'
}

// The content styling
let contentStyle = {
    'color': '#344563',
    'fontSize': '15px'
}

// The html,css and js wrapper styling
let buildStyle = {
    'display': 'flex',
    'flexWrap': 'wrap'
}

// The html, css and js styling
let htmlcssjs = {
    'backgroundColor': '#ebebff',
    'border': '2px solid #ebebff',
    'borderRadius': '8px',
    'color': '#6070ff',
    'fontWeight': '500',
    'marginRight': '10px',
    'padding': '0 12px',
    'width': 'fit-content'
};

// The button wrapper style
let buttonWrapperStyle = {
    'display': 'flex',
    'justifyContent': 'space-between',
    'marginBottom': '60px',
    'marginTop': '30px'
};

// The two buttons style
let twoButtonsStyle = {
    'border': '1px solid #6070ff',
    'borderRadius': '8px',
    'color': '#6070ff',
    'fontWeight': '500',
    'padding': '8px 12px',
    'userSelect': 'none'
}

// The containers of which the card popup would originate from.
let items = [
    document.querySelector('#first-item'),
    document.querySelector('#second-item'),
    document.querySelector('#third-item'),
    document.querySelector('#fourth-item')
]

// The buttons to each of the elements.
let buttons = [
    document.querySelector('#submitOne'),
    document.querySelector('#submitTwo'),
    document.querySelector('#submitThree'),
    document.querySelector('#submitFour')

]

// The card popup style itself
let containerStyles = {
    'alignItems': 'center',
    'backgroundColor': 'rgba(255,255,255,1)',
    'borderRadius': '16px',
    'display': 'none',
    'height': '75vh',
    'left': '50%',
    'overflowY': 'scroll',
    'padding': '1px 20px',
    'position': 'fixed',
    'top': '40px',
    'transform': 'translateX(-50%) translateY(5%)',
    'width': '80vw',
    'zIndex': '4'
}

// The loop function that sticks the buttons to each card popup
let inc = 1
for (let it = 0; it < portfolios.length; it += inc) {

    // The container element for the popup
    let popupModal = document.createElement('div');
    Object.assign(popupModal.style, containerStyles);
    items[it].appendChild(popupModal);

    let topicWrapper = document.createElement('div');
    Object.assign(topicWrapper.style, toxicWrapStyle)
    popupModal.appendChild(topicWrapper);

    let topic = document.createElement('h2');
    let cancel = document.createElement('button');
    cancel.innerHTML = '&times';
    topic.innerHTML = portfolios[it].title;
    Object.assign(topic.style, topicText)
    Object.assign(cancel.style, cancelButtonStyle)
    topicWrapper.appendChild(topic);
    topicWrapper.appendChild(cancel);

    let thirdWrapper = document.createElement('div');
    Object.assign(thirdWrapper.style, thirdWrapperStyle)
    popupModal.appendChild(thirdWrapper);

    // The third elements
    let thirdElements = portfolios[it].listItems;
    let increment = 1
    for (let is = 0; is < thirdElements.length; is += increment) {

        let lists = document.createElement('div');
        lists.innerHTML = `${thirdElements[is]} &#x2022;`;
        Object.assign(lists.style, thirdStyle)
        thirdWrapper.appendChild(lists)
    }


    // The image element
    let imageOne = document.createElement('img');
    imageOne.src = portfolios[it].image;
    Object.assign(imageOne.style, portStyle)
    popupModal.appendChild(imageOne)


    // The content element
    let content = document.createElement('p')
    content.innerHTML = portfolios[it].content + portfolios[it].cuntent
    Object.assign(content.style, contentStyle)
    popupModal.appendChild(content);


    // The html, css and js wrapper
    let buildWrapper = document.createElement('div');
    Object.assign(buildWrapper.style, buildStyle);
    popupModal.appendChild(buildWrapper);

    // The html, css and js elements
    let html = document.createElement('div');
    let css = document.createElement('div');
    let js = document.createElement('div');
    html.innerHTML = 'html'
    css.innerHTML = 'css'
    js.innerHTML = 'javascript'
    Object.assign(html.style, htmlcssjs);
    Object.assign(css.style, htmlcssjs);
    Object.assign(js.style, htmlcssjs);
    buildWrapper.appendChild(html);
    buildWrapper.appendChild(css);
    buildWrapper.appendChild(js);

    // The buttons wrapper
    let buttonWrapper = document.createElement('div');
    Object.assign(buttonWrapper.style, buttonWrapperStyle)
    popupModal.appendChild(buttonWrapper)

    // The two end buttons
    let seelive = document.createElement('a');
    let seesource = document.createElement('a');
    seelive.innerHTML = 'See live';
    seesource.innerHTML = 'See Source';
    Object.assign(seelive.style, twoButtonsStyle)
    Object.assign(seesource.style, twoButtonsStyle)
    buttonWrapper.appendChild(seelive)
    buttonWrapper.appendChild(seesource)

    // The event listeners for the buttons
    buttons[it].addEventListener('click', () => {
        if (overlay.style.display === 'block') {
            overlay.style.display = 'none'
        } else {
            overlay.style.display = 'block'
        }
        popupModal.style.display = 'block'
    })

    // The event listeners for the hamburger menu
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // The event listeners for the cancel button
    cancel.addEventListener('click', function () {
        overlay.style.display = 'none'
        popupModal.style.display = 'none';
    })
}