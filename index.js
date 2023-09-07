const BTN_RU = document.getElementById('ru');
const BTN_ENG = document.getElementById('eng');
const langRu = document.querySelector('.container-ru');
const langEng = document.querySelector('.container-eng');

function switchLanguageToEng() {
    langRu.classList.add('hidden');
    langEng.classList.remove('hidden');
    BTN_ENG.classList.add('switch-lang-eng');
    BTN_RU.classList.remove('switch-lang-ru');
}

function switchLanguageToRu() {
    langRu.classList.remove('hidden');
    langEng.classList.add('hidden');
    BTN_RU.classList.add('switch-lang-ru');
    BTN_ENG.classList.remove('switch-lang-eng');
}

BTN_ENG.addEventListener('click', switchLanguageToEng);
BTN_RU.addEventListener('click', switchLanguageToRu);