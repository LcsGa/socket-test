import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const square = document.querySelector('.square');

const socket = io('ws://localhost:3000');

const byteVal = () => Math.floor(Math.random() * 256);
const getRandomColor = () => `rgb(${byteVal()}, ${byteVal()}, ${byteVal()})`;

square.addEventListener('click', () => socket.emit('color', getRandomColor()));

socket.on('switchColor', (color) => (square.style.background = color));
