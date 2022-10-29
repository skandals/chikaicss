const dropdowns = document.querySelectorAll('.dropdown');
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
// should be fixed (offset & overflow issue)
dropdowns.forEach(dropdown => {

    dropdownBtns.forEach(dropdownBtn => {
    
        dropdownBtn.addEventListener('click', e => {
            e.preventDefault();

            let dropdownId = dropdownBtn.getAttribute('cc-target');
            let dropdownElem = document.getElementById(dropdownId);
           
                if(dropdownId == dropdown.getAttribute('id')) {
                    
                    if(dropdown.classList.contains('show')) {
                        dropdownElem.classList.remove('show');
                    }else {
                        dropdownElem.classList.add('show');
                        dropdownElem.style.height = 'auto';
                        
                        dropdownElem.style.top = e.target.offsetTop+38+'px';

                        // if(dropdownElem.offsetWidth < dropdownBtn.offsetWidth) {
                            dropdownElem.style.left = e.target.offsetLeft+'px';
                        // }
                        // else {
                        //     dropdownElem.style.left = e.target.offsetLeft-100+'px';       
                        // }
                    }

                }

            })
            
        })
        
})   

window.addEventListener('click', e => {

    if(!e.target.matches('.dropdown-btn')) {
        dropdowns.forEach(dropdown => {
            if(dropdown.classList.contains('show')) 
                dropdown.classList.remove('show');    
        })
    }

})