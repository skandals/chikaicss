const sidenavs = document.querySelectorAll('.sidenav');
const sidenavBtns = document.querySelectorAll('.sidenav-btn');

//create the sidenav overlay
 const sidenavOverlay = document.createElement('div')
 sidenavOverlay.classList.add('sidenav-overlay');
 sidenavs.forEach(sidenav => {

    // click a btn to show the sidenav
    sidenavBtns.forEach(sidenavBtn => {
        sidenavBtn.addEventListener('click', e => {

            e.preventDefault(); 

            // get the current sidenav id
            if(sidenavBtn.getAttribute('cc-target') == sidenav.getAttribute('id')) {

                // get sidenav id
                let sideNavId = sidenavBtn.getAttribute('cc-target');
                let sideNavElem = document.getElementById(sideNavId);
                
                // append the overlay to the sidenav
                sideNavElem.insertAdjacentElement('beforebegin', sidenavOverlay);
                
                // show sidenav
                sidenavOverlay.style.display = 'block';
                sideNavElem.style.translate = '0px 0px';
                
                // click the sidenav overlay to hide the sidenav
                sidenavOverlay.addEventListener('click', e => {
                    
                    e.target.style.display = 'none';
                    sidenav.style.translate = '-300px 0px';
                    
                });

            }

        });
    });


})

// export {sidenavBtns, sidenavs, sidenavOverlay};
