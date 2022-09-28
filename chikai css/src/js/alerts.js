let alerts = document.querySelectorAll('.alert');
let closeBtns = document.querySelectorAll('.alert-close');

closeBtns.forEach(closeBtn => {

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentElement.parentElement.remove();

    });

})