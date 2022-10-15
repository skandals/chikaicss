const fullNavs = document.querySelectorAll('.fullnav');
const fullNavClose = document.querySelectorAll('.fullnav-close');
const fullNavItems = document.querySelectorAll('.fullnav-item')
const fullNavBtns = document.querySelectorAll('.fullnav-btn');

fullNavs.forEach(fullNav => {
    
    fullNavClose.forEach(fullNavCloseBtn => {
        fullNavCloseBtn.addEventListener('click', e => {
            e.preventDefault();

            if(fullNav.classList.contains('slide-down'))
                fullNav.style.translate = '0 -100%';
            else if(fullNav.classList.contains('slide-right'))
                fullNav.style.translate = '-100%';
            else 
                e.target.parentElement.style.display = 'none';

        })
    })
    
    fullNavBtns.forEach(fullNavBtn => {
        fullNavBtn.addEventListener('click', e => {
            e.preventDefault();

            let navId = e.target.getAttribute('cc-target');
            
            if(navId == fullNav.getAttribute('id')) {

                let fullNavTarget = document.getElementById(navId)
            
                if(fullNavTarget.classList.contains('slide-down')) 
                    fullNavTarget.style.translate = '0 0';
                else if(fullNavTarget.classList.contains('slide-right'))
                    fullNavTarget.style.translate = '0';
                else 
                    fullNavTarget.style.display = 'block';
                
            }

        })
    })

})