const calculator = (rightCode) => {
    const size = document.querySelector('#size');
    const material = document.querySelector('#material');
    const options = document.querySelector('#options');
    const promoCode = document.querySelector('.promocode');
    const calcPrice = document.querySelector('.calc-price');

    const calculate = () => {
        if (size.value && material.value) {
            let result = +size.value * +material.value;
            // забирает значения из мультиселекта:
            const optionsValues = Array.from(options.selectedOptions).map(option => option.value);
            if (optionsValues) optionsValues.forEach(opt => result += +opt);
            
            const discount = promoCode.value === rightCode ? 1000 : 0;
            if (discount) result -= discount;

            calcPrice.textContent = `${result} рублей`
        } else {
            calcPrice.textContent = `Для расчета нужно выбрать размер картины и материал картины`
        }
    }

    size.addEventListener('change', calculate);
    material.addEventListener('change', calculate);
    options.addEventListener('change', calculate)
    promoCode.addEventListener('input', calculate);

    // let sizeX, materialX, optionsX, discount;

    // const calculate = (size, material, options, discount) => {
    //     if(size && material) {
    //         let result = size * material;
    //         if (options) {
    //             options.forEach(opt => result += +opt)
    //         }
    //         if (discount) result -= discount;
    //         calcPrice.textContent = `${result} рублей`
    //     } else {
    //         calcPrice.textContent = `Для расчета нужно выбрать размер картины и материал картины`
    //     }
    // }

    // size.addEventListener('change', () => {
    //     sizeX = +size.value;
    //     calculate(sizeX, materialX, optionsX, discount)
    // });

    // material.addEventListener('change', () => {
    //     materialX = +material.value;
    //     calculate(sizeX, materialX, optionsX, discount);
    // });

    // promoCode.addEventListener('input', () => {
    //     const codeX = promoCode.value;
    //     discount = codeX === rightCode ? 1000 : 0;
    //     calculate(sizeX, materialX, optionsX, discount);
    // });

    // options.addEventListener('change', () => {
    //     // забирает значения из мультиселекта
    //     optionsX = Array.from(options.selectedOptions)
    //     .map(option => option.value);
    //     calculate(sizeX, materialX, optionsX, discount);
    // })
}

export default calculator;