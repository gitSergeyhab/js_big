const burgerMenu = (burgerBtnSel, burgerListSel) => {
    const burgerBtn = document.querySelector(burgerBtnSel);
    const burgerList = document.querySelector(burgerListSel);

    burgerBtn.addEventListener('click', () => {
        if (burgerList.style.display === 'block') {
            burgerList.style.display = 'none';
        } else if (window.screen.availWidth < 993) {
            burgerList.style.display = 'block';
        }
    })

    // window.addEventListener('resize', () => console.log(window.innerWidth, window.screen.availWidth))
    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) burgerList.style.display = 'none';
    })
}

export default burgerMenu;