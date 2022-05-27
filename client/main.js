import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const square = document.querySelector('.square');

const socket = io('http://localhost:3000');

const byteVal = () => Math.floor(Math.random() * 256);
const getRandomColor = () => `rgb(${byteVal()}, ${byteVal()}, ${byteVal()})`;

const switchSquareColor = (color) => (square.style.background = color);

square.addEventListener('click', () => {
  const color = getRandomColor();
  switchSquareColor(color);
  socket.emit('color', color);
});

socket.on('switchColor', switchSquareColor);
