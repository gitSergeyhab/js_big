// const download = () => {
//     const btnDownload = document.querySelector('.button-transparent');
//     const hiddenPics = document.querySelectorAll('.styles-2');

//     hiddenPics.forEach(pic => pic.classList.add('animated', 'fadeInUp'));

//     const showPics = () => {
//         hiddenPics.forEach(pic => {
//             pic.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
//             pic.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
//             btnDownload.style.display = 'none';
//         })
//     }
//     btnDownload.addEventListener('click', showPics)
// }
import {getResource} from '../../assets/services/requests';

const download = (btnSelector, containerSelector) => {
    const btnDownload = document.querySelector(btnSelector);
    const StyleContainer = document.querySelector(containerSelector);

    const creteStyleElem = ({src, title, link}) => {

        const styleElem = document.createElement('div');
        styleElem.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
        styleElem.innerHTML = `<div class=styles-block>
                                    <img src=${src} alt>
                                    <h4>${title}</h4>
                                    <a href="${link}">Подробнее</a>
                                </div>`;
        return styleElem
    }
    btnDownload.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
        // getResource('assets/db.json') // для работы без сервера
        .then(res => {
            // res.styles.forEach(style => { // для работы без сервера
            res.forEach(style => {
                const styleElem = creteStyleElem(style);
                StyleContainer.appendChild(styleElem);
            })
            btnDownload.style.display = 'none';
        })
        .catch(err =>{
            console.log(err);
            btnDownload.textContent = 'НЕПОЛУЧАЦА!'
        })
    })
}

export default download;