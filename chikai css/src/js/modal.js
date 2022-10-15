const modals = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');

// create a modal overlay
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-overlay');

modals.forEach(modal => {

    modalBtns.forEach(modalBtn => {

        modalBtn.addEventListener('click', e => {
            e.preventDefault();

                //get modal id
                let modalId = modalBtn.getAttribute('cc-target');

            if(modalBtn.getAttribute('cc-target') == modal.getAttribute('id')) {

                let currModal = document.getElementById(modalId);
                // append overlay to the modal
                modal.insertAdjacentElement('beforebegin',modalOverlay)

                // show modal
                currModal.style.display = 'flex';
                modalOverlay.style.display = 'block';

                // if the modal has a fade class
                if(currModal.classList.contains('fade')) {
                    currModal.style.opacity = 1;
                    modalOverlay.style.opacity = 1;
                }   

            }

        });

    })

    // click modal overlay to hide the modal
    modalOverlay.addEventListener('click', e => {

        if(modal.classList.contains('fade')){
            modal.style.opacity = 0;
            e.target.style.opacity = 0;
        }else
            modal.style.display = 'none';
            e.target.style.display = 'none';

    });

    // modal close button
    let modalCloseBtn = modal.querySelector('.modal-close');
    modalCloseBtn.addEventListener('click', e => {
        e.preventDefault();

        if(modal.classList.contains('fade')){
            modalOverlay.style.opacity = 0;
            modal.style.opacity = 0;
        }else
            modalOverlay.style.display = 'none';
            modal.style.display = 'none';

    })

});
