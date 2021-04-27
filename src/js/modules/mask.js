const mask = (selector, matrix = '+7 (___) ___ __ __') => {
    const setCursorPosition = (elem) => {
        const pos = elem.value.length;
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();

        }
    }

    function createMask(evt) {
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def
        }

        const replaceMatrix = (sign) => {
            const valid = /[_\d]/.test(sign) && i < val.length;
            if (valid) {
                return val.charAt(i++);
            } else if (i >= val.length) {
                return '';
            }
            return sign
        }

        this.value = matrix.replace(/./g, replaceMatrix);
        if (evt.type == 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this);
        }
    }

    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    })
}

export default mask;