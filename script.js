let external_links = document.querySelectorAll('.other-site');

function handleExternalLinkClick(event) {
    let answer = confirm(`Ви впевнені, що хочете перейти на зовнішній сайт ${this.href}?`);

    if (!answer) {
        event.preventDefault()
    }
}

external_links.forEach(function (item) {
    item.addEventListener('click', handleExternalLinkClick);
});

let remover = document.querySelector('#rm-listener')
if (remover) {
    remover.addEventListener('click', function () {
        external_links.forEach(function (item) {
            item.removeEventListener('click', handleExternalLinkClick);
        });
    });
}

function printDeveloperInfo(surname, name, position = "Розробник") {
    console.log(`Прізвище: ${surname}`);
    console.log(`Ім'я: ${name}`);
    console.log(`Посада: ${position}`);
}

printDeveloperInfo("Сєргєйчик", "Єгор");

function filterAdsByCategory(category) {
    event.preventDefault();

    let cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (card.dataset.category !== category) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        }
    });
}

function search() {
    let search_value = document.querySelector('#search input').value;

    let cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        if (!card.textContent.toLowerCase().includes(search_value.toLowerCase())) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        }
    });
}

let search_button = document.querySelector('#search button');
if (search_button) {
    search_button.onclick = search;
}

document.querySelector('#login').addEventListener('click', function () {
    localStorage.setItem('auth', 'true');

    authenticate();
});

document.querySelector('#logout').addEventListener('click', function () {
    localStorage.removeItem('auth');

    authenticate();
});

function authenticate() {
    let authStatus = localStorage.getItem('auth') === 'true';

    document.querySelectorAll('[data-auth="required"]').forEach(function (item) {
        item.style.display = authStatus ? '' : 'none';
    });

    document.querySelectorAll('[data-auth="not-required"]').forEach(function (item) {
        item.style.display = authStatus ? 'none' : '';
    });
}

authenticate();

document.addEventListener('click', function () {
    if (event.target.dataset.scalableImage != undefined) {
        event.preventDefault();

        let img = document.createElement('img');
        img.src = event.target.src;
        img.style.width = '80%';
        img.style.height = 'auto';

        let overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function () {
            document.body.removeChild(overlay);
        });
    }
});