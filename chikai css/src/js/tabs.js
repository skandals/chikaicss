const tabs = document.querySelectorAll('.tabs');
const tabLinks = document.querySelectorAll('.tab');

tabs.forEach(tab => {

    tabLinks.forEach((tabLink ,i ,tabLinks) => {

        let targetId = tabLink.firstElementChild.getAttribute('cc-target');
        let targets = document.getElementById(targetId);
        if(targets)
            targets.classList.add('hide');

        tabLink.addEventListener('click', e => {

           let a = tabLink.firstElementChild;
           let contTarget = a.getAttribute('cc-target');
           let target = document.getElementById(contTarget);
           
           if(contTarget == target.getAttribute('id'))
           
                tabLinks.forEach(tabLi => { 
                    tabLi.classList.remove('active');
                    e.target.parentElement.classList.add('active')
                    let targetId = tabLi.firstElementChild.getAttribute('cc-target');
                    let targets = document.getElementById(targetId);
                    targets.classList.replace('show', 'hide');   
                    target.classList.replace('hide', 'show');   
                })

        })

        if(tabLink.classList.contains('active')) {
            let activeLink = document.querySelector('.active').firstElementChild;
            let activeTarget = document.getElementById(activeLink.getAttribute('cc-target'));
            activeTarget.classList.replace('hide','show')
        
        }else {
            let activeLink = tab.firstElementChild.classList.add('active')
            let activeTarget = document.getElementById(tab.firstElementChild.firstElementChild.getAttribute('cc-target'));
            activeTarget.classList.replace('hide','show')
        }

    })

})