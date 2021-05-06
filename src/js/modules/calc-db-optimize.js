import {getResource} from '../../assets/services/requests';

const calcDbOpti = () => {
    const size = document.querySelector('#size');
    const material = document.querySelector('#material');
    const option = document.querySelector('#options');
    const promoCode = document.querySelector('.promocode');
    const calcPrice = document.querySelector('.calc-price');

    let sizeVal, materialVal, optionVal=0, promoCodeVal=1;
    const getValue = (param) => {
        getResource('http://localhost:3000/prices')
        .then(res => {
            const optionsValues = Array.from(option.selectedOptions)
                .map(option => option.value);
            if (optionsValues && param === 'options') {
                optionVal = 0;
                optionsValues.forEach(val => {
                    optionVal += res[param][val]
                })
            }
            switch (param) {
                case 'sizes': sizeVal = res[param][size.value]; break;
                case 'materials': materialVal = res[param][material.value]; break;
                case 'promocode': promoCodeVal = res[param][promoCode.value] || 1; break;
            }
            
            if (sizeVal && materialVal) {
                calcPrice.textContent = (sizeVal * materialVal + optionVal) * promoCodeVal;
            } else {
                calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины'
            }
        });
    }

    size.addEventListener('change', () => getValue('sizes'));
    material.addEventListener('change', () => getValue('materials'));
    option.addEventListener('change', () => getValue('options'));
    promoCode.addEventListener('input', () => getValue('promocode'));
}

export default calcDbOpti;
