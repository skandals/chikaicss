const dropdowns = document.querySelectorAll('.dropdown');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((dropdownBtn) => {

    dropdownBtn.addEventListener('click', (e) => {

        // get dropdown id ref
        let menuHref = dropdownBtn.getAttribute('href').substring(1);
        let dropdownMenu = document.getElementById(menuHref);


    });

});

dropdowns.forEach((dropdown) => {
    
    dropdown.addEventListener('blur', (e) => {
        dropdown.style.display = 'none';
    })

});