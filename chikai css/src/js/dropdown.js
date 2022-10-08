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
                        
                        if(dropdownElem.offsetWidth <= document.body.offsetWidth) {
                            dropdownElem.style.top = e.target.offsetTop+35+'px';
                            dropdownElem.style.left = e.target.offsetLeft+'px';
                        }
                        else if(dropdownElem.offsetLeft >= document.body.scrollWidth) {
                            dropdownElem.style.left = e.target.offsetLeft-300+'px';       
                        }
                        
                    }

                }

            })
            
        })
        
})   