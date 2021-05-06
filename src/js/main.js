import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import languageCheck from './modules/language_check';
import download from './modules/download';
import calculator from './modules/calculator';
import calcDb from './modules/calc-db';
import filter from './modules/filter';
import filter1 from './modules/filter1';
import wallPictures from './modules/wall-pictures';
import accordion from './modules/accordion';
import burgerMenu from './modules/burger-menu';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    languageCheck('[name="message"]');
    download('.button-transparent', '#styles .row');
    // calculator('XXX');
    calcDb();
    // filter('.portfolio-menu li', '.portfolio-block');
    filter1('.portfolio-menu', '.portfolio-block', 'active');
    wallPictures('.sizes-block');
    accordion('#accordion', '.accordion-heading', '.accordion-block');
    burgerMenu('.burger', '.burger-menu');
    scrolling('.pageup');



    // моя ф-ция:
    // sliders('.feedback-slider-item', '.feedback-slider', '', '.main-prev-btn', '.main-next-btn');
    // sliders('.main-slider-item', '.main-slider', '');

})