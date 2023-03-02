const button = document.querySelector('#click-button');
const clickCount = document.querySelector('#click-count');

let count = 0;

button.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
});