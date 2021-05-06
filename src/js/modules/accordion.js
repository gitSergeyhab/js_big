const accordion = (selectorAccordion, selectorQuestion, selectorAnswer) => {
    const accordionElement = document.querySelector(selectorAccordion);
    const questions = accordionElement.querySelectorAll(selectorQuestion);
    const answers = accordionElement.querySelectorAll(selectorAnswer);
    answers.forEach(answer => {
        answer.classList.add('animated', 'fadeInDown');
        answer.style.display = 'none';
    })

    questions.forEach(question => {
        question.addEventListener('click', () => {
            if (question.classList.contains('js-red-text')) {
                questions.forEach(q => {
                    q.nextElementSibling.style.display = 'none';
                    q.classList.remove('js-red-text');
                });
            } else {
                questions.forEach(q => {
                    q.nextElementSibling.style.display = 'none';
                    q.classList.remove('js-red-text');
                    });
                question.classList.add('js-red-text');
                question.nextElementSibling.style.display = 'block';
            }
        })
    })
}

export default accordion;