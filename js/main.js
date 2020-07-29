const searchBtn = document.querySelector('.header__navigation-search');
const searchInp = document.querySelector('.search-input');
const burgerDiv = document.querySelector('.header__opener');
const headerMenu = document.querySelector('.header__navigation-items');
const footerItems = document.querySelectorAll('.footer-title');
const arrowIcons = document.querySelectorAll('.dropdown-icon');

document.querySelector('.search-icon').addEventListener('click', () => {
    searchBtn.classList.toggle('active');
    searchInp.classList.toggle('active');
    if (searchInp.classList.contains('active')) {
        searchInp.focus();
    }
});

searchInp.addEventListener('focusout', () => {
    console.log('ef');
    searchBtn.classList.remove('active');
    searchInp.classList.remove('active');
});

burgerDiv.addEventListener('click', () => {
    burgerDiv.classList.toggle('active');
    headerMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
});

arrowIcons.forEach((item, i) => item.addEventListener('click', () => onItemOpenClick(i)));
footerItems.forEach((item, i) => item.addEventListener('click', () => onItemOpenClick(i - 1)));

function onItemOpenClick (i) {
    let parentNode = arrowIcons[i].parentNode;
    arrowIcons[i].classList.toggle('opened');
    parentNode.classList.toggle('opened');
}