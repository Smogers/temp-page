const fil0 = document.querySelectorAll('.fil0');
const fil1 = document.querySelector('.fil1');
const fil2 = document.querySelector('.fil2');
const fil3 = document.querySelector('.fil3');
const fils = [fil0, fil2];
let hue = 0;
const generateColor = () => {
  const color = `hsl(${hue},75%,35%)`;
  fil0.forEach((fil) => (fil.style.fill = color));
  hue += 10;
};
setInterval(() => {
  generateColor();
}, 100);
