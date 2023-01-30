


//Gets all elements IDs and classes
let hamburger = document.getElementById('hamburger');
let menuList = document.getElementById('menulist');
let section = document.querySelectorAll('.top, .fordesktop, .language');
let items = document.querySelectorAll('.elements ul *')


let styles = {
    display: 'block',
    position: 'absolute',
    right: '-5px',
    top: '-5px',
    width: '100vw',
    height: '100vh',
    textAlign: 'center',
    margin: '0',
    paddingTop: '80px',

    background: 'rgba(0, 47, 255, 0.54)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(6.7px)',
}

let unstyle = {
    background: 'none'
}

hamburger.addEventListener('click', function () {

    if (menuList.style.display == 'none') {
        Object.assign(menuList.style, styles);

       items.forEach(function(each) {
        each.style.marginTop = '40px';
        each.style.textDecoration = 'none';
        each.style.color = 'white';
        each.style.fontWeight = '700';
        each.style.fontSize = '2.5rem';
       })


    }
    else {
        menuList.style.display = 'none'
    }
})

function clickOut() {
    menuList.style.display = 'none'
}


menuList.addEventListener('click', clickOut);

window.addEventListener('resize', function(){
    if(window.innerWidth >= 768) {
        menuList.style.display = 'flex'
    }

    else {
        menuList.style.display = 'none'

    }
})