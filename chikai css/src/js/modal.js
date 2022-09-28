const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');

// create a modal overlay
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

modals.forEach(modal => {

    modalBtns.forEach(modalBtn => {

        modalBtn.addEventListener('click', e => {
            e.preventDefault();

            if(modalBtn.getAttribute('cc-target') == modal.getAttribute('id')) {

                //get modal id
                let modalId = modalBtn.getAttribute('cc-target');
                let currModal = document.getElementById(modalId);

                // append overlay to the modal
                modal.insertAdjacentElement('beforebegin',modalOverlay)

                // show modal
                modalOverlay.style.display = 'block';
                currModal.style.display = 'flex';

            }

        });

    })

    // click modal overlay to hide the modal
    modalOverlay.addEventListener('click', e => {
        modal.style.display = 'none';
        e.target.style.display = 'none';
    });

    // modal close button
    let modalCloseBtn = modal.querySelector('.modal-close');
    modalCloseBtn.addEventListener('click', e => {
        e.preventDefault();
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    })

});
