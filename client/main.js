import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const square = document.querySelector('.square');

const socket = io('http://localhost:3000');

const hex = () =>
  Math.floor(Math.random() * 256)
    .toString(16)
    .split('')
    .reduceRight((acc, curr) => acc.replace('0', curr), '00')
    .split('')
    .reverse()
    .join('');
const getRandomColor = () => `#${hex()}${hex()}${hex()}`;

socket.on('connect', () => {
  console.log('Connected');

  square.addEventListener('click', () => {
    const color = getRandomColor();
    square.style.background = color;
    socket.emit('color', color);
  });
});

socket.on('switchColor', (color) => (square.style.background = color));
