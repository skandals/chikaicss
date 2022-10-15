 const images = document.querySelectorAll('.carousel-item img');
 const carouselCont = document.querySelector('.carousel');
 const li = carouselCont.children;

class Carousel {


    //check if carousel items are li elements 
   loadFirstImg() {

       if(carouselCont.firstElementChild.matches('li')) {
            li[0].classList.add('img-active');
        }

    }

    // create dots for each image
     dots() {

        // split images
       images.forEach((img, i) => {

           
           // create a span element for a dot
           let span = document.createElement('span');
           
           // create a carousel dots container
           // and put the carousel dot container before the end of the carousel
           carouselCont.insertAdjacentHTML('beforeend', `
           <br>
           <div class="carousel-buttons">
           </div>
           `);

           //    append the dots to the 
           let carouselDots = document.querySelector('.carousel-buttons');
           carouselDots.append(span);

            //make first carousel dot active    
           carouselDots.firstElementChild.classList.add('carousel-btn-active');

       });

    }

    nextImg(dot, i, items) {


            //find the carousel item with active class and remove it
            images.forEach((img) => {
                let cItem = img.parentElement;
                cItem.classList.remove('img-active');
            })

            items.forEach((btn) => {
                btn.classList.remove('carousel-btn-active');
            });

            // insert the active class to the selected element
            li[i].classList.add('img-active');
            dot.classList.add('carousel-btn-active');
            
     }


}

let carousel = new Carousel();
carousel.loadFirstImg();
carousel.dots();

document.addEventListener('DOMContentLoaded', () => {

    let dots = document.querySelectorAll('.carousel-buttons span');

        dots.forEach((dot, i, items) => {

            dot.addEventListener('click', () => {

                carousel.nextImg(dot, i, items);
                
            })

        })

})

// export {Carousel, images, carouselCont, li};