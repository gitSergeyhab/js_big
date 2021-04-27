// import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const uploads = document.querySelectorAll('[name="upload"]');
    console.log(uploads);

    uploads.forEach(upload => {
        upload.addEventListener('input', () => {
            const fileName = upload.files[0].name;
            let fixedName;
            fileName.length > 12 ? 
                fixedName = '...' :
                fixedName = '.';
            upload.previousElementSibling.textContent = fileName.split('.')[0].slice(0,7) + fixedName + fileName.split('.')[1];
        })
    })

    // checkNumInputs('input[name="user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spiner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        uploads.forEach(item => {
            item.previousElementSibling.textContent = 'файл не выбран'
        })
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.setAttribute('src', message.spiner)
            item.parentNode.appendChild(statusMessage);

            let textMessage = document.createElement('div');
            textMessage.classList.add('status');
            textMessage.textContent = message.loading;
            item.parentNode.appendChild(textMessage);

            item.style.display = 'none';

            const formData = new FormData(item);

            let api;
            item.closest('.popup-design') || item.classList.contains('calc-form') ? api = 'assets/server.php' :  api = 'assets/question.php';
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusMessage.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                    }, 3000);
                });
        });
    });
};

export default forms;