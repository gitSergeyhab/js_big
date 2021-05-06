const wallPictures = (blockPictSelect) => {
    const pictures = document.querySelectorAll(blockPictSelect);

    const changePic = (target, display) => {
        const img = target.querySelector('img');
        const paragraphs = target.querySelectorAll('p:not(.sizes-hit)');
        const srcSplit = img.getAttribute('src').split('.');
        const src = display === 'block' ?
            srcSplit[0].slice(0,-2) + '.' + srcSplit[1] :
            srcSplit[0] + '-1.' + srcSplit[1];

        img.setAttribute('src', src);
        paragraphs.forEach(par => par.style.display = display);
    } 

    pictures.forEach(pic => {
        pic.addEventListener('mouseenter', evt => changePic(evt.target, 'none'));
        pic.addEventListener('mouseleave', evt => changePic(evt.target, 'block'));
    })
}

export default wallPictures;