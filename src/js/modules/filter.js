const filter = (tabSelector, slideSelector) => {
    const tabs = document.querySelectorAll(tabSelector);
    const slides = document.querySelectorAll(slideSelector);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            const needClass = tab.classList[0];
            tab.classList.add('active')
            
            slides.forEach(slide => {
                if (!slide.classList.contains(needClass)) {
                    slide.style.display = 'none'
                } else {
                    slide.style.display = 'block'
                }
            })
        })
    })
}

export default filter;