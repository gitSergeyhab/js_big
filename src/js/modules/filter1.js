
const filter1 = (tabContSelect, photoSelector, activeClass) => {
    const tabContainer = document.querySelector(tabContSelect);
    const tabs = tabContainer.querySelectorAll('li');
    const photos = document.querySelectorAll(photoSelector);

    const showPhotos = (clas) => {
        photos.forEach(photo => {
            if(photo.classList.contains(clas)) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
        }})
    };

    tabContainer.addEventListener('click', evt => {
        const target = evt.target.closest('li');
        if (target) {
            tabs.forEach(tab => tab.classList.remove(activeClass));
            const needClass = target.classList[0];
            target.classList.add(activeClass);
            showPhotos(needClass);
        }
    })
}
export default filter1;