const languageCheck = (selector) => {
    const fields = document.querySelectorAll(selector);
    // console.log()
    fields.forEach(field => {
        field.addEventListener('input', () => {
            field.value = field.value.replace(/[^а-яё0-9!"№;%:?*()_+=.,/@#$^& \-]/gi, '');
        })
    })
}

export default languageCheck; 