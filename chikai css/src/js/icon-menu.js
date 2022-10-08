let iconMenuBtns = document.querySelectorAll('.icon-menu-btn');
let iconMenus = document.querySelectorAll('.icon-menu');

iconMenuBtns.forEach(iconBtn =>  {
    iconMenus.forEach(iconMenu => {

        iconBtn.addEventListener('click', e => {
            e.preventDefault();
            
            let btnId = iconBtn.getAttribute('cc-target');
            let iconMenuId = iconMenu.getAttribute('id');

            if(btnId == iconMenuId){

                let menu = document.getElementById(btnId);

                if(menu.classList.contains('open')) {

                    menu.classList.remove('open');
                    menu.style.translate = '-300px 0px';

                }else {

                    menu.classList.add('open');
                    menu.style.translate = '0px 0px';

                }

            }



        })

    })
})