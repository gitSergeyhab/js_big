const dropfile = () => {
    const dropFileAreas = document.querySelectorAll('[name="upload"]');
    // console.log(dropFileAreas)

    dropFileAreas.forEach(area => {
        area.addEventListener('dragenter', function (evt) {
            // evt.preventDefault();
            if (this.closest('.file_upload')) {
                this.closest('.file_upload').querySelector('button').style.border = '2px solid blue'
            }
        })

        area.addEventListener('dragleave', function (evt) {
            if (this.closest('.file_upload')) {
                this.closest('.file_upload').querySelector('button').style.border = ''
            }
        })

        
        area.addEventListener('dragover', function (evt) {
            evt.preventDefault();
        })

        area.addEventListener('drop', function (evt) {
            evt.preventDefault();
            if (this.closest('.file_upload')) {
                this.closest('.file_upload').querySelector('button').style.border = ''
            }
            //!!!  evt.dataTransfer.files   !!! массив с файлами
            area.files = evt.dataTransfer.files;
            const fileName = area.files[0].name;
            // console.log(upload.files)
            let fixedName;
            fileName.length > 12 ? 
                fixedName = '...' :
                fixedName = '.';
            area.previousElementSibling.textContent = fileName.split('.')[0].slice(0,7) + fixedName + fileName.split('.')[1];
        })
    })
}

export default dropfile;