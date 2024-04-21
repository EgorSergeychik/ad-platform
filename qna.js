const qna_data = [
    {
        "id": 0,
        "question": "Обрати...",
        "answer": "Оберіть запитання зі списку, щоб побачити відповідь."
    },
    {
        "id": 1,
        "question": "Як додати оголошення?",
        "answer": "Для того, щоб додати оголошення, потрібно зареєструватися на сайті, а потім увійти в свій акаунт. Після цього ви зможете додати оголошення, натиснувши на кнопку 'Створити оголошення' на головній панелі зверху."
    },
    {
        "id": 2,
        "question": "Як видалити оголошення?",
        "answer": "Для того, щоб видалити оголошення, потрібно увійти в свій акаунт, перейти на сторінку з оголошеннями, вибрати оголошення, яке потрібно видалити, і натиснути кнопку 'Видалити'.",

    },
    {
        "id": 3,
        "question": "Яка комісія за продаж?",
        "answer": "Комісія за продаж дорівнює 3% від суми продажу."
    }
]

let qna = document.querySelector('.qna-container')
if (qna) {
    function toggleQna() {
        qna.querySelector('.qna-content').classList.toggle('hidden')
    }

    qna.querySelector('.qna-answer').textContent = qna_data[0].answer

    qna_data.forEach(function (item) {
        let question = document.createElement('option')
        question.id = item.id
        question.textContent = item.question

        let selector = qna.querySelector('select')
        selector.appendChild(question)

        selector.addEventListener('change', function () {
            let selected = qna.querySelector('select').selectedOptions[0].id
            qna.querySelector('.qna-answer').textContent = qna_data[selected].answer
        })
    });
}