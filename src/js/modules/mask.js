// const mask = (selector, matrix = '+7 (___) ___ __ __') => {
//     const setCursorPosition = (elem) => {
//         const pos = elem.value.length;
//         elem.focus();

//         if (elem.setSelectionRange) {
//             elem.setSelectionRange(pos, pos);
//         } else if (elem.createTextRange) {
//             const range = elem.createTextRange();
//             range.collapse(true);
//             range.moveEnd('character', pos);
//             range.moveStart('character', pos);
//             range.select();

//         }
//     }

//     function createMask(evt) {
//         let i = 0;
//         let def = matrix.replace(/\D/g, '');
//         let val = this.value.replace(/\D/g, '');
//         console.log('i', i)
//         console.log('def', def)
//         console.log('val', val)


//         if (def.length >= val.length) {
//             val = def
//         }

//         const replaceMatrix = (sign) => {
//             if (/[_\d]/.test(sign) && i < val.length) {
//                 return val.charAt(i++);
//             } else if (i >= val.length) {
//                 return '';
//             }
//             return sign
//         }

//         this.value = matrix.replace(/./g, replaceMatrix);
//         if (evt.type == 'blur') {
//             if (this.value.length == 2) {
//                 this.value = '';
//             }
//         } else {
//             setCursorPosition(this);
//         }
//     }

//     const inputs = document.querySelectorAll(selector);
//     inputs.forEach(input => {
//         input.addEventListener('input', createMask);
//         input.addEventListener('focus', createMask);
//         input.addEventListener('blur', createMask);
//     })
// }


const mask = (selector) => {
    const fields = document.querySelectorAll(selector);
    // console.log(fields);

    const valueMagick = (value) => {
        let res0 = value.replace(/\D/g, '');
        let res = '+' + res0;
        if (res0.length > 1) {
            res = '+' + res0.substring(0,1) + ' (' + res0.substring(1, 4);
        } 
        if (res0.length > 4) {
            res = res + ') ' + res0.substring(4, 7);
        } 
        if (res0.length > 7) {
            res = res + '-' + res0.substring(7, 9);
        }
        if (res0.length > 9) {
            res = res + '-' + res0.substring(9,11);
        }
     
        return res;
    }

    fields.forEach(field => {
        field.addEventListener('input', () => {
            field.value = valueMagick(field.value);
        })
    })
}

export default mask;