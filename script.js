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

