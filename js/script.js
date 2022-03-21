//меню гамбургер
const hamburger = window.document.querySelector('.hamburger'),
    menu = window.document.querySelector('.header__links'),
    close = window.document.querySelector('.close'),
    wrapper = window.document.querySelector('.wrapper');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});



//первый слайдер блок hit
const prev = window.document.querySelector('.hit__item-left'),
    next = window.document.querySelector('.hit__item-right'),
    items = window.document.querySelectorAll('.hit__item'),
    count = window.document.querySelector('.hit__count');

let indexHit = 1;

next.addEventListener('click', () => {
    indexHit += 1;
    if (indexHit == 4) {
         indexHit = 1;
    };
    selectItem(indexHit);
    
});

prev.addEventListener('click', () => {
    indexHit -= 1;
    if (indexHit == 0) {
         indexHit = 3;
    };
    selectItem(indexHit);
})


function selectItem(indexHit){
    count.innerHTML = indexHit;
    items.forEach(item => {
        item.classList.add('active');
        if (item == items[indexHit-1]) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
   
};

//второй слайдер, блок skills

const prevBar = window.document.querySelector('.description__bar-left'),
    nextBar = window.document.querySelector('.description__bar-right'),
    slides = window.document.querySelectorAll('.description__slide'),
    slideCount = window.document.querySelector('.description__count');

let slideIndex = 1;

nextBar.addEventListener('click', () => {
    slideIndex += 1;
    if (slideIndex == 5) {
        slideIndex = 1;
    };
    slideActive(slideIndex);
});

prevBar.addEventListener('click', () => {
    slideIndex -= 1;
    if (slideIndex == 0) {
        slideIndex = 4;
   };
    slideActive(slideIndex);
});

function slideActive(slideIndex) {
    slideCount.innerHTML = slideIndex;
    slides.forEach(slide => {
        slide.classList.add('active');
        if (slide == slides[slideIndex-1]) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    })
}




    