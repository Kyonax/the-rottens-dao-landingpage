let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = slider.getElementsByTagName('li');

let elementsToShow = 1;
let cardWith = sliderContainer.clientWidth / elementsToShow;

slider.style.width = cards.length * cardWith + 'px';

for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    element.style.width = cardWith + 'px';
    element.style.color = "#ffffff"
}
