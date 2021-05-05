import {getResource} from '../../assets/services/requests';

const calcDb = () => {
    const size = document.querySelector('#size');
    const material = document.querySelector('#material');
    const option = document.querySelector('#options');
    const promoCode = document.querySelector('.promocode');
    const calcPrice = document.querySelector('.calc-price');

    const defaultValues = {
        sizes: 0,
        materials: 0,
        options: 0,
        promocode: 0
    }

    const calculate2 = (param, values) => {
        defaultValues[param] = values;

        const sizeValue = defaultValues.sizes[size.value];
        const materialValue = defaultValues.materials[material.value];
        const promocodeValue = defaultValues.promocode[promoCode.value];

        let options = 0;
        const optionsValues = Array.from(option.selectedOptions)
        .map(option => option.value);
        if (optionsValues) {
           optionsValues.forEach(opt => {
               options += defaultValues.options[opt];
            });
        }
        
        if (sizeValue && materialValue) {
            let result = sizeValue * materialValue;
            if (optionsValues) result += options;
            if (promocodeValue) result *= promocodeValue;

            calcPrice.textContent = `${result} рублей`
        } else {
            calcPrice.textContent = `Для расчета нужно выбрать размер картины и материал картины`
        }
    }

    const calculate = (param) => {
        getResource(`http://localhost:3000/prices`)
        .then(result => calculate2(param, result[param]))
        .catch(err => {
            console.log(err);
            calculate2(param, 0);
            calcPrice.textContent = 'Что-то сломалось =(('
        });
    } 

    size.addEventListener('change', () => calculate('sizes'));
    material.addEventListener('change', () => calculate('materials'));
    options.addEventListener('change', () => calculate('options'))
    promoCode.addEventListener('input', () => calculate('promocode'));
}

export default calcDb;