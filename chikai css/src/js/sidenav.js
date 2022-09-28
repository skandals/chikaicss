const sidenavElem = document.querySelector('.sidenav');
const sidenavBtns = document.querySelectorAll('.sidenav-btn');

//create the sidenav overlay
const sidenavOverlay = document.createElement('div')
sidenavOverlay.classList.add('sidenav-overlay');
sidenavElem.insertAdjacentElement('beforebegin', sidenavOverlay);

// click the sidenav overlay to hide the sidenav
sidenavOverlay.addEventListener('click', e => {
    sidenavElem.style.trasition = 'ease-in 5s';
    e.target.style.display = 'none';
    sidenavElem.style.translate = '-300px 0px';
});

// click a btn to show the sidenav
sidenavBtns.forEach(sidenavBtn => {
    sidenavBtn.addEventListener('click', e => {
        sidenavOverlay.style.display = 'block';
        sidenavElem.style.trasition = 'ease-in-out 5s';
        sidenavElem.style.translate = '0px 0px';
    });
});


