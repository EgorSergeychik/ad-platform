let external_links = document.querySelectorAll('.other-site');

external_links.forEach(function (item) {
    item.addEventListener('click', function (event) {
        let answer = confirm(`Ви впевнені, що хочете перейти на зовнішній сайт ${item.href}?`);

        if (!answer) {
            event.preventDefault()
        }
    });
});

function printDeveloperInfo(surname, name, position = "Розробник") {
    console.log(`Прізвище: ${surname}`);
    console.log(`Ім'я: ${name}`);
    console.log(`Посада: ${position}`);
}

printDeveloperInfo("Сєргєйчик", "Єгор");

function search() {
    let search = document.querySelector('#search input')
    let search_value = search.value

    if (search_value > 'Пошук') {
        alert(search)
    } else {
        alert('Пошук')
    }
}

function changeColor(time = 3000, color = '#df7575') {
    let defaultColor = document.body.style.backgroundColor

    document.body.style.backgroundColor = color

    setTimeout(() => document.body.style.backgroundColor = defaultColor, time)

}

function newCard() {
    let card = document.querySelectorAll('.card')
    card = card[card.length - 1]

    card.innerHTML = '<a href="ad.html"><img src="https://picsum.photos/200/266"><div class="card-content"><p class="card-title">innerHTML</p></p></div></div></a>'
}