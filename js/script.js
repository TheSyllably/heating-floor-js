new Swiper('.hero__slider', {
    slidesPerView: 2,
    spaceBetween: 10, 
    loop: true,

    navigation: {
        prevEl: '.hero__slider-btn_prev', 
        nextEl: '.hero__slider-btn_next',
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {    
            slidesPerView: 1
        },
        560: { 
            spaceBetween: 8,
            slidesPerView: 2
        },
        920: { 
            slidesPerView: 1
        },
        1240: {
            slidesPerView: 1
         }
    }

});


const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');
const calcResultWrapper = document.querySelector('.calc__result-wrapper')

const tariff = {
    economy: 550,
    comfort: 1440,
    premium: 2700,
};

calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
 

    if (calcForm.width.value > 0 && calcForm.length.value) {
       const square = calcForm.width.value * calcForm.length.value;
       const price = square * tariff[calcForm.tariff.value];

       calcResultWrapper.style.display = 'block';
      totalSquare.textContent = `${square} кв м`;
      totalPrice.textContent = `${price} руб`;
    }
})

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
     const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);

modalElem.style.cssText =  `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if(target === modalElem ||
        (btnCLose && target.closest(btnClose)) || 
        event.code === 'Escape') {

        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300);

        window.removeEventListener('keydown', closeModal);
    }
};
 
const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElems.forEach(btn => {
     
btn.addEventListener('click', openModal);
});

modalElem.addEventListener('click', closeModal);
};

modalController({
    modal: '.modal1',
    btnOpen: '.section__button',
    btnClose: '.modal__close'
});

modalController({
    modal: '.modal2',
    btnOpen: '.section__button2',
    btnClose: '.modal__close'
})
