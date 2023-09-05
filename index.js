const BTN_RU = document.getElementById('ru');
const BTN_ENG = document.getElementById('eng');
const langRu = document.querySelector('.container-ru');
const langEng = document.querySelector('.container-eng');

function switchLanguageToEng() {
    langRu.classList.add('hidden');
    langEng.classList.remove('hidden');
}

function switchLanguageToRu() {
    langRu.classList.remove('hidden');
    langEng.classList.add('hidden');
}

BTN_ENG.addEventListener('click', switchLanguageToEng);
BTN_RU.addEventListener('click', switchLanguageToRu);