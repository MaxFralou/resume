const BTN_RU = document.getElementById('ru');
const BTN_ENG = document.getElementById('eng');
const langRu = document.querySelector('.container-ru');
const langEng = document.querySelector('.container-eng');

const langs = {
    ru: langRu,
    eng: langEng
  };
  
  const buttons = {
    ru: BTN_RU,
    eng: BTN_ENG 
  };
  
  function switchLanguage(lang) {
    hideOtherLanguage(lang);
    showLanguage(lang);
    setActiveButton(lang);
  }
  
  function hideOtherLanguage(activeLang) {
    const inactiveLang = activeLang === 'ru' ? 'eng' : 'ru';
    langs[inactiveLang].classList.add('hidden');
  }
  
  function showLanguage(lang) {
    langs[lang].classList.remove('hidden'); 
  }
  
  function setActiveButton(lang) {
    buttons[lang].classList.add('flag-lang');
    
    const inactiveLang = lang === 'ru' ? 'eng' : 'ru';
    buttons[inactiveLang].classList.remove('flag-lang');
  }
  
  buttons.ru.addEventListener('click', () => switchLanguage('ru'));
  buttons.eng.addEventListener('click', () => switchLanguage('eng'));