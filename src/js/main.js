import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import languageCheck from './modules/language_check';
import download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    languageCheck('[name="message"]');
    download('.button-transparent', '#styles .row');



    // моя ф-ция:
    // sliders('.feedback-slider-item', '.feedback-slider', '', '.main-prev-btn', '.main-next-btn');
    // sliders('.main-slider-item', '.main-slider', '');

})