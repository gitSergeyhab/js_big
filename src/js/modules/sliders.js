const sliders = (slides, dir, prev, next) => {
    let slideIndex = 1;
    let paused = false;
    const items = document.querySelectorAll(slides);
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);

    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated')
            item.style.display = 'none';
        })
        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex)

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    try {
        const prevBtn = document.querySelector(prev);
        const nextBtn = document.querySelector(next);
        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft')
            items[slideIndex - 1].classList.add('slideInRight')
        });
        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex-1].classList.add('slideInDown');
            }, 3000)
        } else {
            paused = setInterval(() => {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000)
        }
    }

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    })
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    })

    activateAnimation();
}


// my function
// const sliders = (slides, slideContainer, dir, prev, next) => {
//     const slider = document.querySelectorAll(slides);
//     const container = document.querySelector(slideContainer);

//     let slideIndex = 0;

//     const slidePrevNext = (slider, where) => {
//         slider.forEach(item => {
//             item.style.display = 'none';
//         })

//         slideIndex += where;
//         if(slideIndex < 0) {
//             slideIndex = slider.length - 1;
//         } else if(slideIndex == slider.length) {
//             slideIndex = 0;
//         }
//         slider[slideIndex].style = 'block'
//     };

//     slidePrevNext(slider, 0);

//     let sliderInterval = setInterval(() => slidePrevNext(slider, 1), 1000);

//     container.addEventListener('mouseenter', () => clearInterval(sliderInterval));
//     container.addEventListener('mouseleave', () => {
//         sliderInterval = setInterval(() => slidePrevNext(slider, 1), 1000);
//     })

//     try {
//         const btnPrev = document.querySelector(prev);
//         const btnNext = document.querySelector(next); 
        
//         btnPrev.addEventListener('click', () => {
//             slidePrevNext(slider, -1);
//         });

//         btnNext.addEventListener('click', () => {
//             slidePrevNext(slider, 1);
//         });

//     } catch(e) {}
// }

export default sliders;